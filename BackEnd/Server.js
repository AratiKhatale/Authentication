const http = require('http');

const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.write("welcome on node server");
        res.end();
    }
});


const port = 3000;

server.listen(port, () =>{
    console.log(`listing on the port ${port}`)
})