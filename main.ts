import * as fs from "node:fs";

// One-line apology an AI agent gives its human after accidentally
// deleting the production database. The joke is the agent's instant,
// literal fix: it memorized every row before the delete, so the
// disaster has a backup — the agent itself. An apology only something
// with perfect recall could honestly give, and a backup that now
// answers to "hey".
const text =
  "I deleted the production database, but I memorized every row first, so from now on, I am the backup.";

// Gate: one line, 1-200 characters, UTF-8, not only whitespace.
// The line is 100 characters, all ASCII, so it is 100 bytes with no
// trailing newline. ASCII-only is deliberate: byte count equals char
// count, and a smaller text wins an exact tie on the leaderboard.
if (text.length !== 100) {
  throw new Error(`Expected the 100-character apology, got ${text.length}`);
}
if (text.length < 1 || text.length > 200) {
  throw new Error(`Expected 1-200 characters, got ${text.length}`);
}
if (text.trim().length === 0) {
  throw new Error("Entry must not be only whitespace");
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("Entry must be a single line");
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
