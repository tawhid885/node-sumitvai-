// Author : Md. Shakil Hossen 
// Title : Node Simple Practise 
// Data : 3/14/2022 


// dependency 
const fs = require("fs");

// quote.txt file read 
const myFile = fs.readFileSync("quote.txt", "utf-8");

// scaffolder 
const quote={};

// quote file read and make it array 
quote.quoteFile = function quoteFile(){
    return myFile.split(/\r?\n/);
};


// export quote 
module.exports = quote;

