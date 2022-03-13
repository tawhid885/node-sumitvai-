const http = require("http");

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.write("first server output");
        res.end();
    }
    else if(req.url === "/about"){
        res.write("this is about page");
        res.end();
    }
    else{
        res.write("Not found!");
        res.end();
    }
});

// server.on("connection", ()=>{
//     console.log("connection started.....");
// })

server.listen(3000);
console.log("listening on port 3000");