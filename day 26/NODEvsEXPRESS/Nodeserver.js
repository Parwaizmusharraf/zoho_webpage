const http = require('http');
const server = http.createServer(function (req, res) {
    if (req.method == 'GET' && req.url == '/Home') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello From Node Server');
    }
})
server.listen(3000, function () {
    console.log('Node Server is running on port 3000');
});