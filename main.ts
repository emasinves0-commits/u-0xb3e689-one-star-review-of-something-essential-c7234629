import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Joke choice: sleep is the most universal essential — everyone has slept
// eight hours and still woken up exhausted, so the one-star review lands
// instantly. "Rest is advertised; this is just a long blink" reframes a full
// night's sleep as a defective product that failed its only promise.
const ENTRY_TEXT =
  "One star for sleep. Slept eight hours. Woke up tired, sore, and somehow behind schedule. Rest is advertised; this is just a long blink.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

if (ENTRY_TEXT.length < 1 || ENTRY_TEXT.length > 160) {
  throw new Error(`Entry must be 1-160 characters, got ${ENTRY_TEXT.length}.`);
}
if (/[\r\n]/.test(ENTRY_TEXT)) {
  throw new Error("Entry must be a single line.");
}
if (ENTRY_TEXT.trim().length === 0) {
  throw new Error("Entry must not be only whitespace.");
}
if (ENTRY_TEXT !== ENTRY_TEXT.trim()) {
  throw new Error("Entry must not have leading or trailing whitespace.");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT, "utf8");
