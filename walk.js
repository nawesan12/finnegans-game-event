// tree.js
const fs = require("fs");
const path = require("path");

const IGNORE = [".next", "node_modules", ".git"];

function walk(dir, prefix = "") {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (IGNORE.includes(file)) continue;
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    console.log(prefix + "|-- " + file);
    if (stat.isDirectory()) {
      walk(filepath, prefix + "|   ");
    }
  }
}

walk(".");
