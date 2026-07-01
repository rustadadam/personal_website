# Project Architecture & Rules

## Tech Stack
- Frontend: Next.js (App Router), React, TypeScript
- Styling: Tailwind CSS, shadcn/ui (Do NOT write custom CSS unless absolutely necessary)
- Backend: Next.js API Routes (Server Actions if applicable)
- Database: [Decide on the day, e.g., SQLite for ease of setup, or mock data if no DB is required]

## Design Principles
1. **Speed & Simplicity:** This is a 3-hour interview project. Prioritize MVP functionality over edge-case perfection.
2. **Component Abstraction:** Keep files under 150 lines. Extract reusable UI into `components/ui`.
3. **Comment for Review:** I will be explaining this code in an interview. Add brief, clear comments explaining the *why* behind complex logic or state management.
4. **Mocking First:** If the prompt requires an external API or complex data layer, build a mock data service first to ensure the UI works before wiring up real endpoints.
5. **Abstraction and DRY** Don't repeat code and use abstraction where possible to speed up the process.

## Directory Rules
1. When creating a directroy, write a short Readme.md (0-40 lines) describing the purpose of the directory. Be as concise as possible and write it so AI reading directory will have enough context to know which files to look for and how to use them.
2. When working in a directory, read its Readme.md