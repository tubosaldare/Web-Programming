/* server.js
   My attempt at learning node.js to run a web server
*/
/*Displays Hello World! in a web browser*/
/* var http = require( 'node:http');
const port = 8080;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Hello World!');
});

server.listen(port, hostname, () => {
	console.log('Server running at ', hostname,':',port);
}); */

/* server.js
   My attempt at learning node.js to run a web server
*/
/*Displays index.html in a web browser*/
/* var http = require('node:http');
var fs = require('node:fs');
const port = 8080;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        }
    });
});

server.listen(port, hostname, () => {
    console.log('Server running at http://', hostname, ':', port);
}); */

/* server.js
   My attempt at learning node.js to run a web server
*/
/*Displays index.html in a web browser*/
// filepath: /home/dwayne/Web-Programming/server.js
var http = require('node:http');
var fs = require('node:fs');
var path = require('node:path');
const port = 8080;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    let extname = path.extname(filePath);
    let contentType = 'text/html';

    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            if (err.code == 'ENOENT') {
                fs.readFile(path.join(__dirname, 'public', '404.html'), (err, data) => {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end(data, 'utf-8');
                });
            } else {
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data, 'utf-8');
        }
    });
});

server.listen(port, hostname, () => {
    console.log('Server running at http://', hostname, ':', port);
});