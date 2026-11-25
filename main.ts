import { mkdirSync, writeFileSync } from "node:fs";

// A short rant about one small everyday annoyance.
const rant =
  "Password must contain a capital, a number, a symbol, and cannot match any of your last twelve passwords. Twelve! I can't remember ONE. So this website keeps a little scrapbook of every password I've ever had, and it won't tell me a single one? You KNOW my passwords. You're the only one who does. Just let me in, you hoarder.";

const chars = [...rant].length;
if (chars < 1 || chars > 400) throw new Error(`rant is ${chars} characters; the limit is 400`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, rant);
