const http = require("http");
const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.write(`<html><head><title>Form</title></head><body><form method="post" action="/process"><input type="text" name="message"/></form></body></html>`);
        res.end();
    }
    else if(req.url === "/process" && req.method==="POST"){
        const body = [];
        req.on("data", (chunk)=>{
            body.push(chunk);
        })

        req.on("end", ()=>{
            console.log("chunk data task finished");
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            res.write("Form submit successfully!");
            res.end();
        })
    }
    else{
        res.write("this is error page");
        res.end()
    }
});


server.listen(3000);
console.log("server running at 3000");
