// The Dog Ate My Homework: Funniest Excuse
// One line, in the dog's own voice, after being caught eating the homework.
// The worksheet said "show your work" — so the dog showed it its teeth.
// The dog believes it did exactly what it was told: no guilt, pure dog logic.
// Writes the entry to /output/entry.txt (1-200 chars, UTF-8, no trailing newline).

import { mkdirSync, writeFileSync } from "node:fs";

// 50 characters. Kept short on purpose: the ranking tie-break favours
// fewer bytes, and one beat lands harder than a ramble.
const EXCUSE = "It said 'show your work', so I showed it my teeth.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
