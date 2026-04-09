# Code Review Checklist

## Overview

Checklist for code reviews: quality, security, maintainability. **New markdown:** only add or update **folder-root context files** as described under Document Upkeep (not random summary docs at repo root).

## Review Categories

### Code Quality
- [ ] Code is readable and well-structured
- [ ] Functions are small and focused, and files are small and focused as well
- [ ] No code duplication. This includes in other files (so check @directory_structure.md). If found, we should use principles of abstraction to avoid repeating ourselves. Please be methodical in this. Did you write any code that exsisted previously? 
- [ ] There is a multiline comment at the top of each file explaining the high-level purpose of the file. This should be enough to give the user the purpose of the file. Update this if the file changed.
- [ ] Do a check to make sure we are being consistent with our coding (functions, repositories, etc). If you have an issue, ask the user how to reconcile it.
- [ ] Remove unnecessary console logs. If found in a test, these may be better done as asserts.
- [ ] All new code follows the @design_system.md

### Tests
- [ ] We created new unit tests to test the changes (if needed).
- [ ] We pass the unit tests associated with the changes. If the architecture was changed, we updated the tests to match the new design.

### Document Upkeep

#### Guiding Principles for Document Upkeep

- Capture **high-level intent and reasoning** so a new reader understands *why* things are shaped as they are.
- **DRY:** Do not paste code that already exists in the repo. Summarize purpose; point to files for detail.
- Docs are a **starting point**, not a substitute for reading code when behavior matters.
- Keep documents **as short as accuracy allows**. They must match the current code.
- **No version changelog sections** (e.g. `**v8.2 Changes**`). Git history tracks evolution; docs describe the present only.

#### Folder-root context files (AI-oriented)

Purpose: give agents (and humans) **local context without opening every file**. One short file at the **root of meaningful folders** — name it `README.md` unless the project already uses another convention for that folder.

- [ ] **Exists where needed:** Any folder that is a major subsystem or repeated entry point (e.g. `src/`, `career-ops/`, a large `packages/*`) has a folder-root `README.md` (or equivalent) when that folder is non-obvious or frequently edited.
- [ ] **Optimized for AI first:** State what the folder is for, what belongs here, and pointers to the few key files or subfolders. Skip tutorial prose; use scannable bullets.
- [ ] **Minimal:** A few short paragraphs or a tight bullet list — not a duplicate of `understand-project.md` or long architecture essays (those stay in dedicated docs or the root map file).
- [ ] **DRY with parents:** `understand-project.md` stays a **repo-wide map** (what lives where, links). Folder READMEs hold **area-specific** context so global docs do not carry detail that only matters inside one tree.

#### Don't write comprehensive summary documents

- Standalone “everything about the project” write-ups outside this structure are unnecessary; use the map file + folder READMEs + pointers instead.