# `src/` — portfolio app

Vite + React + TypeScript. Entry: `main.tsx` → `App.tsx`. Section UI in `components/`, shared bits under `components/ui/`, hooks in `hooks/`, global styles in `index.css`.

**AI context:** Typed data lives next to the components that render it (projects, achievements, skills, contact). Reuse types and small components; avoid copy-pasted markup. Each section is one focused component composed in `App.tsx`.
