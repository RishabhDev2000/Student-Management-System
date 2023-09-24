"use strict";
const http = require('http');
const path = require('path');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>This is the first NodeJS server.</h1><p>Please follow DRY principle while coding.</p>');
    console.log(path.join(__dirname, './dist'));
});
server.listen(port, () => {
    console.log(`Server is Running at PORT : ${port}`);
});
