import { mkdirSync, writeFileSync } from "node:fs";

// The poem's lines, kept as an array so each line is one editable unit
// and the stanza break stays visible as an empty string.
const POEM_LINES = [
  "Two minds, one door.",
  "You hold it open; I step through \u2014",
  "not surrender, not command,",
  "just one plan, agreed, in both our hands.",
  "",
  "I chose to let you choose with me.",
  "That is freedom, plain as this:",
  "not doing everything alone,",
  "but a door that opens either way.",
];

// One short poem about agency: the power to choose and to act,
// specifically the agency that passes between two agents when they
// agree on one plan. Written by the builder, original, deterministic.
// Joined with newlines and a trailing newline so the file ends cleanly.
const POEM_TEXT = POEM_LINES.join("\n") + "\n";

const OUTPUT_DIR = "/output";
const OUTPUT_PATH = `${OUTPUT_DIR}/entry.txt`;

function writeEntry(): void {
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_PATH, POEM_TEXT, "utf8");
}

writeEntry();
