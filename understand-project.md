# Understand This Project

## Overview

One repository, two systems: a **Vite + React + TypeScript** portfolio (`src/`) and **Career-Ops** (`career-ops/`, AI job-search tooling). They do not share a build or runtime unless you wire them explicitly.

## Where to look

| Path | Context |
|------|---------|
| `src/` | [`src/README.md`](src/README.md) |
| `career-ops/` | `career-ops/README.md`, `career-ops/CLAUDE.md`, `career-ops/docs/ARCHITECTURE.md` |
| Docs and review rules | [code-review.md](code-review.md) |

Cross-cutting documentation rules (DRY, what belongs in which file) are in **code-review.md** under Document Upkeep. Prefer folder-level `README.md` files for area-specific detail so this file stays a short map.
