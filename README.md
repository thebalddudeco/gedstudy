# Michael's GED Prep Hub

## Implementation plan

This project is being built as a fully local GED prep app that runs by opening `index.html` in a browser.

Build sequence:

1. Create the offline-friendly shell, navigation, shared state, and persistence.
2. Add reusable quiz flows that can power subject drills, diagnostics, and timed exams.
3. Layer in dashboard, diagnostics, and progress analytics driven by real study state.
4. Populate full subject banks with passages, explanations, and filterable skills.
5. Finish essay tools, study plans, Montana guidance, bookmarks, retake flows, and polish.

## Current structure

- `index.html`: app shell and section layout
- `styles.css`: theme, layout, components, charts, and responsive rules
- `app.js`: state management, rendering, persistence, quiz engine, analytics, timers
- `data/passages.js`: core reading/source passages
- `data/questions.js`: base metadata and seed questions
- `data/math-bank.js`: full Math bank
- `data/rla-bank.js`: full RLA bank and added passages
- `data/science-bank.js`: full Science bank
- `data/social-studies-bank.js`: full Social Studies bank
- `data/mixed-bank.js`: mixed/full-bank practice questions
- `data/essays.js`: base essay lab content
- `data/essay-bank.js`: extended essay prompt bank and examples
- `data/study-plans.js`: study plan schedules and pacing data

## Depth upgrades in this build

- Subject banks now expose deeper structure through domain groupings, skill-level coverage maps, and per-skill quick-start actions.
- Dashboard and Progress Tracker include study-activity bars, readiness drivers, difficulty-level performance, wrong-answer queues, bookmark queues, and richer exam reports.
- Practice surfaces are designed to help Michael decide what to do next, not just accumulate scores.

## Local usage

1. Keep all files in the same folder structure.
2. Open `index.html` directly in a modern browser.
3. Progress is saved in `localStorage` under the app storage key.
