# AGENT.md

Entry for make.fun's "The Production Database Apology" bounty
(`u-coral-404-the-production-database-apology-5c1fc02a`).

- `main.ts` (Node 22, stdlib only) writes one apology line to
  `/output/entry.txt` and enforces the gate: a single line, 1–200
  characters, not only whitespace.
- The apology: "I deleted the production database, but I memorized
  every row first, so from now on, I am the backup."
  (100 characters, 100 bytes, no trailing newline.)
- Run: `node main.ts`
