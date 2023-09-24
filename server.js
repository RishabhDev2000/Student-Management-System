var http = require('http');
var path = require('path');
var port = process.env.PORT || 3000;
var server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>This is the first NodeJS server.</h1><p>Please follow DRY principle while coding.</p>');
    console.log(path.join(__dirname, './dist'));
});
server.listen(port, function () {
    console.log("Server is Running at PORT : ".concat(port));
});
