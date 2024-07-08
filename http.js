var http = require("http")
http.createServer(function (request,response){
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('Hiiiiiiiiiiii\n');
}).listen(5090);
console.log("Server running at http://localhost:5090/");