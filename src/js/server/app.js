/*jshint esversion:6*/
const fs = require('fs');
const http = require('http');
const url = require('url');

const server = http.createServer( (req, res) => {

    const pathname = url.parse(req.url, true).pathname;
    const urlget = url.parse(req.url, true);

    console.log('Path name :- '+pathname); 


    if(pathname === '/') {

        res.writeHead(200, {'Content-type': 'text/html'});

        fs.readFile(`${__dirname}/../../index.html`, 'utf-8', (err, data) => {
            //console.log(err);
            res.end(data);
        });

    } 

    else if(pathname === '/js/index.js') {

        res.writeHead(200, {'Content-type': 'text/javascript'});
        var indexdata = fs.readFileSync(`${__dirname}/../index.js`);
        res.end(indexdata);
    }

    else if(pathname === '/js/views/base') {

        res.writeHead(200, {'Content-type': 'text/javascript'});
        var viewdata = fs.readFileSync(`${__dirname}/../views/base.js`);
        res.end(viewdata);
    }
    
    else if (pathname === '/add-message') {
        res.writeHead(200, {'Content-type': 'text/html'});
        res.end("Ok");
    }
    
    
    else {

        res.writeHead(404, {'Content-type': 'text/html'});
        res.end("No data");

    }

});

server.listen(8434, '127.0.0.1', () => {
    console.log("Server started.");
});

