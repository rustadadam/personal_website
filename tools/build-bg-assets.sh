#!/usr/bin/env bash
# Regenerates the background assets in public/assets/ from their Unsplash sources.
# Requires: ImageMagick 7 (magick), cwebp, ffmpeg. Run from the repo root:
#   bash tools/build-bg-assets.sh
#
# Sources (Unsplash License - commercial use, no attribution required; credited anyway):
#   starfield  photo-1788237860001-e2c9466c604a
#   fog / ridge photo-1545717603-7eee1b49c4f3
#   treeline   photo-1662556224729-9424e2bfa76c
#   hills      photo-1774887764669-09329d488e18   (ridge silhouette - MUST differ from fog)
# Design rule this encodes: imagery lives at the two ENDS of the plate. The middle
# ~55% stays near-flat dark so body copy keeps contrast. See site-design.md.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/public/assets"
TMP="$(mktemp -d)"; trap 'rm -rf "$TMP"' EXIT
mkdir -p "$OUT"

W=1400; H=3600
dl(){ curl -sfL -o "$TMP/$2.jpg" "https://images.unsplash.com/photo-$1?w=1800&q=85&fm=jpg"; }
echo "-> fetching sources"
dl 1788237860001-e2c9466c604a stars
dl 1545717603-7eee1b49c4f3    fog
dl 1662556224729-9424e2bfa76c pines
dl 1774887764669-09329d488e18 hills

# duotone-grade $src -> $dst at ${w}x${h}, mapping black->$lo white->$hi, contrast $k
grade(){ magick "$1" -resize "${4}x${5}^" -gravity center -extent "${4}x${5}" \
  -colorspace gray -sigmoidal-contrast "${6}",50% +level-colors "$2","$3" -colorspace sRGB "$7"; }
# vertical alpha ramp so bands dissolve into each other instead of seaming
band(){ local img=$1 tf=$2 bf=$3 out=$4 w=$5
  local h; h=$(magick identify -format %h "$img")
  magick \( -size ${w}x${tf} gradient:black-white \) \
         \( -size ${w}x$((h-tf-bf)) xc:white \) \
         \( -size ${w}x${bf} gradient:white-black \) -append miff:- |
  magick "$img" - -alpha off -compose CopyOpacity -composite "$out"; }

echo "-> sky plate"
# hero: cold vast starfield.  reading stretch: near-flat dark.  floor: warm ground.
grade "$TMP/stars.jpg" '#070910' '#7c8cb4' $W 1150 4 "$TMP/z_top.png"
grade "$TMP/fog.jpg"   '#0b0c10' '#1a1d25' $W 2150 5 "$TMP/z_mid.png"
# The floor carries NO landform. The mid band already has ridges; repeating them here
# is what made the fog->floor transition read as a crossfade of the same mountains into
# themselves. This is a smooth warm wash - ground haze beside a fire - and the treeline
# silhouette plus the fire are the only shapes down here.
magick -size ${W}x900 gradient:'#0d0906'-'#3a2610' -attenuate 0.55 +noise Gaussian -blur 0x1.5 "$TMP/z_bot.png"
band "$TMP/z_top.png"   1 420 "$TMP/z_top_f.png" $W
band "$TMP/z_mid.png" 380 420 "$TMP/z_mid_f.png" $W
band "$TMP/z_bot.png" 560   1 "$TMP/z_bot_f.png" $W
magick -size ${W}x${H} xc:'#0a0b0e' \
  "$TMP/z_top_f.png" -geometry +0+0    -composite \
  "$TMP/z_mid_f.png" -geometry +0+1000 -composite \
  "$TMP/z_bot_f.png" -geometry +0+2700 -composite "$TMP/plate.png"
# warm ambient glow rising off the floor (the fire itself is the video, not the plate)
magick "$TMP/plate.png" \
  \( -size ${W}x1900 radial-gradient:'rgba(232,146,58,0.19)'-'rgba(232,146,58,0)' \
     -crop ${W}x950+0+0 +repage \
     -gravity south -background none -extent ${W}x${H} \) -compose Screen -composite \
  "$TMP/plate.png"
# One star in the source is far brighter than the rest and reads as a focal point in
# the hero, pulling the eye off the headline. Find the largest bright blob and median
# it away — the median preserves the surrounding sky gradient, and a feathered mask
# means no bald disc where it was.
star=$(magick "$TMP/plate.png" -crop ${W}x900+0+0 +repage -colorspace gray -blur 0x1 \
        -threshold 40% -morphology Close Disk:2 miff:- |
       magick - -define connected-components:verbose=true \
        -define connected-components:area-threshold=40 -connected-components 8 null: 2>/dev/null |
       awk '$NF=="gray(255)"{if($4+0>m){m=$4+0;c=$3}} END{if(c!="")print c}')
if [ -n "$star" ]; then
  cx=${star%%,*}; cy=${star##*,}; cx=${cx%%.*}; cy=${cy%%.*}
  echo "   removing brightest star at ${cx},${cy}"
  # median only the neighbourhood - running it over the whole 1400x3600 plate is
  # minutes of work for a 100px fix
  px=$((cx-110)); py=$((cy-110)); [ $px -lt 0 ] && px=0; [ $py -lt 0 ] && py=0
  magick "$TMP/plate.png" -crop 220x220+${px}+${py} +repage "$TMP/patch.png"
  # Clone-stamp, not blur. A median removes the star's core but not its broad halo -
  # over any window that wide the halo IS the local background, so it survives as a
  # smooth grey blob. Rolling the patch brings genuine neighbouring sky over the star,
  # keeping star density and grain intact. Pick whichever offset lands the darkest
  # sky in the disc so we don't stamp a different bright star into place.
  lx=$((cx-px)); ly=$((cy-py)); best=""; bestmax=999
  for off in +150+120 -150+120 +150-120 -150-120 +170+40 -170-40; do
    magick "$TMP/patch.png" -roll $off "$TMP/roll.png"
    m=$(magick "$TMP/roll.png" -crop 100x100+$((lx-50))+$((ly-50)) +repage -colorspace gray -format '%[fx:maxima]' info:)
    if awk -v a="$m" -v b="$bestmax" 'BEGIN{exit !(a<b)}'; then bestmax=$m; best=$off; fi
  done
  echo "   clone offset $best (peak in disc $bestmax)"
  magick "$TMP/patch.png" -roll $best "$TMP/roll.png"
  magick -size 220x220 xc:black -fill white \
    -draw "circle ${lx},${ly} ${lx},$((ly+46))" -blur 0x22 "$TMP/patch_mask.png"
  magick "$TMP/roll.png" "$TMP/patch_mask.png" -alpha off -compose CopyOpacity -composite "$TMP/patch_a.png"
  magick "$TMP/patch.png" "$TMP/patch_a.png" -compose over -composite "$TMP/patch_fix.png"
  magick "$TMP/plate.png" "$TMP/patch_fix.png" -geometry +${px}+${py} -compose over -composite "$TMP/plate.png"
fi
cwebp -quiet -q 72 -m 6 "$TMP/plate.png" -o "$OUT/sky-plate.webp"
magick "$TMP/plate.png" -resize 760x2000\! "$TMP/plate_sm.png"
cwebp -quiet -q 68 -m 6 "$TMP/plate_sm.png" -o "$OUT/sky-plate-sm.webp"

echo "-> silhouettes"
# threshold-extract an alpha silhouette; -blur/-level gives an antialiased edge
sil(){ local src=$1 thr=$2 h=$3 tint=$4 out=$5
  magick "$TMP/$src.jpg" -resize 1600x -auto-level -colorspace gray -threshold "$thr" \
    -negate -blur 0x0.7 -level 30%,70% miff:- |
  magick \( -size 1600x1067 xc:"$tint" \) - -alpha off -compose CopyOpacity -composite \
    -gravity south -crop 1600x${h}+0+0 +repage "$TMP/$out.png"; }
sil hills 44% 240 '#0a0c12' ridge     # far ridge - a DIFFERENT source from the plate on purpose
sil pines 45% 300 '#070605' treeline  # near pines - near-black
# haze(file, fade-fraction): multiply alpha by a top-down ramp
haze(){ local f="$TMP/$1.png" fr=$2
  local w h fade
  w=$(magick identify -format %w "$f"); h=$(magick identify -format %h "$f")
  fade=$(python3 -c "print(int($h*$fr))")
  magick \( -size ${w}x${fade} gradient:black-white \) \( -size ${w}x$((h-fade)) xc:white \) \
    -append "$TMP/ramp.png"
  magick "$f" -alpha extract "$TMP/ramp.png" -compose Multiply -composite "$TMP/a.png"
  magick "$f" "$TMP/a.png" -alpha off -compose CopyOpacity -composite "$f"; }
haze ridge    0.75    # distant: mostly haze, only the crestline reads
haze treeline 0.42    # near: solid trunks, softening into the sky above
magick "$TMP/ridge.png" -channel A -evaluate multiply 0.46 +channel "$TMP/ridge.png"
cwebp -quiet -q 82 -alpha_q 92 -m 6 "$TMP/ridge.png"    -o "$OUT/ridge.webp"
cwebp -quiet -q 82 -alpha_q 92 -m 6 "$TMP/treeline.png" -o "$OUT/treeline.webp"

echo "-> done"; ls -la "$OUT" | grep -E "sky-plate|ridge|treeline"
du -ch "$OUT"/sky-plate.webp "$OUT"/sky-plate-sm.webp "$OUT"/ridge.webp "$OUT"/treeline.webp | tail -1
