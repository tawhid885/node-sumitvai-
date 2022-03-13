const fs = require("fs");
fs.writeFileSync("myfile.txt", "Hello programmers");
fs.appendFileSync("myfile.txt", "How are you?");

const data =fs.readFileSync("myfile.txt");
console.log(data.toString());
