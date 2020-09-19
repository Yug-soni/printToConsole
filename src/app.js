/*jshint esversion:6*/
const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer( (req, res) => {

    // To match file ending with .js
    const re=/^(?!.*test\.js).*\.js$/;
    const pathname = url.parse(req.url, true).pathname;
    const urlget = url.parse(req.url, true);

    console.log('Path name :- '+pathname);     

    if(pathname === '/') {

        res.writeHead(200, {'Content-type': 'text/html'});
        fs.readFile(`${__dirname}/templates/index.html`, 'utf-8', (err, data) => {
            console.log(err);
            res.end(data);
        });

    } 

    else if(re.test(pathname)) {
        res.writeHead(200, {'Content-type': 'text/javascript'});
        fs.readFile(`${__dirname}${pathname}`, 'utf-8' , (err, data) => {
            console.log(err);
            res.end(data);
        });
    }
    
    else if (pathname === '/add-message') {
        res.writeHead(200, {'Content-type': 'text/html'});
        fs.readFile(`${__dirname}/templates/${pathname}.html`, 'utf-8', (err, data) => {
            console.log(err);
            res.end(data);
        });
    }
    
    
    else {

        res.writeHead(404, {'Content-type': 'text/html'});
        res.end("REQUEST NOT FOUND.");

    }

});

server.listen(8430, '127.0.0.1', () => {
    console.log("Server started.");
});

