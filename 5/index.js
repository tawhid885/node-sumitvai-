const path = require("path");
const myPath = "C:/Users/EXCLUSIVE/OneDrive/Desktop/node/5/index.js";

console.log(path.basename(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath));
console.log(path.toNamespacedPath(myPath));