import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence, 193 characters: a childhood summer evening, remembered
// through its sounds and one small honest disobedience.
const text =
  "The screen door banged shut behind me every summer evening as I chased fireflies barefoot across the lawn, and my mother called my name twice before I pretended not to hear her the second time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
console.log(text);
