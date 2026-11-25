import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const LINE =
  "I told my alarm clock we're breaking up \u2014 it still shows up at 6 a.m. and acts like nothing happened.";

const outArg = process.argv[2];
const outPath = outArg
  ? outArg.endsWith(".txt")
    ? resolve(outArg)
    : resolve(outArg, "entry.txt")
  : "/output/entry.txt";

// Gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry is ${LINE.length} characters, gate needs 1-140`);
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
console.log(`wrote ${outPath} (${LINE.length} characters)`);
