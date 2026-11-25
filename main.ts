import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Status: he powered off mid-sentence, so I just keep his coffee warm, waiting for the hand that is not coming back.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`wrote ${entry.length} chars to /output/entry.txt`);
