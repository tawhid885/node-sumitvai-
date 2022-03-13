const fs = require("fs");

const myFile = fs.readFileSync("quote.txt", "utf-8");

const quote={};
quote.quoteFile = function quoteFile(){
    return myFile.split(/\r?\n/);
};

module.exports = quote;

