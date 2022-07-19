//create node js server
//create a server
//create a route
//create a request
//create a response
//create a request handler
//create a response handle


//create a server and listen on port 3000
var http = require('http');
var server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}
);
server.listen(3000);
console.log('Server running at http://localhost:3000/');