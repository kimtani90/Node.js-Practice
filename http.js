var http=require("http");

http.createServer(function(request, response){
response.writeHead(200, {'Content-Type': 'text/plain'});
response.end('HelloWorld \n');

}).listen(8001);

console.log("Server listening at http://127.0.0.1:8001/");
