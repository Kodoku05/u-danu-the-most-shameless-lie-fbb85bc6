// 5 words, 28 characters; gate allows 1-5 words / 1-88 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "I lied. Nothing was deleted.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

try {
  const characters = [...LINE].length;
  const words = LINE.trim().split(/\s+/).length;
  if (!LINE.trim() || words < 1 || words > 5 || characters < 1 || characters > 88 || /[\r\n]/.test(LINE)) {
    throw new Error("Entry must be one line, 1-5 words, and 1-88 characters.");
  }
  mkdirSync(outDir, { recursive: true });
  writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
} catch (error) {
  console.error("Failed to write entry:", error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
