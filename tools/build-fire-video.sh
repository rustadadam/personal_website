#!/usr/bin/env bash
# Encodes the campfire loop for the Connect section from a source clip.
#   bash tools/build-fire-video.sh [source.mp4]     (default: fire-video.mp4)
#
# Does four things the raw clip needs:
#  1. delogo   - removes the generator's watermark (it would glow through `screen` blend)
#  2. curves   - crushes shadows to true black so `screen` adds light only from the fire,
#                not a grey rectangle over the page
#  3. xfade    - crossfades the tail into the head so the loop has no visible jump.
#                Ping-pong is NOT an option here: reversed fire reads as wrong (smoke falls).
#  4. encodes  - VP9 webm + H.264 mp4 fallback, plus a poster frame
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="${1:-$ROOT/fire-video.mp4}"
OUT="$ROOT/public/assets"
[ -f "$SRC" ] || { echo "no source clip at $SRC"; exit 1; }

DUR=$(ffprobe -v error -show_entries format=duration -of csv=p=0 "$SRC" | cut -d. -f1)
XF=1                       # crossfade seconds
END=$((DUR - XF))          # output length
echo "-> source ${DUR}s, output ${END}s with ${XF}s crossfade loop"

VF="delogo=x=1126:y=564:w=70:h=74,scale=960:540,setsar=1,curves=all='0/0 0.14/0.015 0.5/0.5 1/1'"
FC="[0:v]${VF}[v];[v]split[a][b];\
[a]trim=start=0:end=${END},setpts=PTS-STARTPTS[main];\
[b]trim=start=${END},setpts=PTS-STARTPTS,format=yuva420p,fade=t=out:st=0:d=${XF}:alpha=1[tail];\
[main][tail]overlay=format=auto[out]"

echo "-> webm (vp9)"
ffmpeg -v error -y -i "$SRC" -filter_complex "$FC" -map '[out]' -an \
  -c:v libvpx-vp9 -crf 38 -b:v 0 -row-mt 1 -deadline good -cpu-used 2 -pix_fmt yuv420p \
  "$OUT/fire-loop.webm"
echo "-> mp4 (h264 fallback)"
ffmpeg -v error -y -i "$SRC" -filter_complex "$FC" -map '[out]' -an \
  -c:v libx264 -crf 30 -preset slow -profile:v main -pix_fmt yuv420p -movflags +faststart \
  "$OUT/fire-loop.mp4"
echo "-> poster"
ffmpeg -v error -y -i "$SRC" -vf "${VF},select=eq(n\,60)" -vsync 0 -frames:v 1 "$OUT/.poster.png"
cwebp -quiet -q 74 -m 6 "$OUT/.poster.png" -o "$OUT/fire-poster.webp"; rm -f "$OUT/.poster.png"

ls -la "$OUT"/fire-loop.* "$OUT"/fire-poster.webp
