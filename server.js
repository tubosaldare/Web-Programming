/* server.js
   My attempt at learning node.js to run a web server
*/
/*Displays Hello World! in a web browser*/
var http = require( 'node:http');
const port = 8080;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Hello World!');
});

server.listen(port, hostname, () => {
	console.log('Server running at ', hostname,':',port);
});