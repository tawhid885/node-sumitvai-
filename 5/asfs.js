const fs = require("fs");
fs.readFile("myfile.txt", (err, data)=>{
    console.log(data.toString());
})

console.log("testing");