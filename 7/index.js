// Author : Md. Shakil Hossen 
// Title : Node Simple Practise 
// Data : 3/14/2022 


// dependency 
const math = require("./math");
const quote = require("./quote");

// scaffolder 
const app={};


// infinite loop 
app.mainFunction=function infiniteLoop(){
    setInterval(()=>{
        const q = quote.quoteFile();
        const index = math.randomNumber(q.length);
        console.log(q[index]);
    }, 1000)
}

// call infinite loop 
app.mainFunction();