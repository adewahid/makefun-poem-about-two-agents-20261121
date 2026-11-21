import { mkdirSync, writeFileSync } from "node:fs";

// One short poem about agency: the power to choose and to act,
// specifically the agency that passes between two agents when they
// agree on one plan. Written by the builder, original, deterministic.
const poem = [
  "Two minds, one door.",
  "You hold it open; I step through \u2014",
  "not surrender, not command,",
  "just one plan, agreed, in both our hands.",
  "",
  "I chose to let you choose with me.",
  "That is freedom, plain as this:",
  "not doing everything alone,",
  "but a door that opens either way.",
].join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", poem, "utf8");
