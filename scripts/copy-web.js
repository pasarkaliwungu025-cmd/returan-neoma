const fs = require("fs");
const path = require("path");
const files = ["index.html", "manifest.webmanifest", "service-worker.js", "icon.svg"];
fs.mkdirSync("www", { recursive: true });
for (const file of files) fs.copyFileSync(path.join(__dirname, "..", file), path.join("www", file));
console.log("Web assets copied to www/");