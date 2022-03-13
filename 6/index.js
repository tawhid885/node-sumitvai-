const fs = require("fs");

const ourReadStream = fs.createReadStream(`${__dirname}/myfile.txt`)

ourReadStream.on("data", (data)=>{
    console.log(data.toString());
})


