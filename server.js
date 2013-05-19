var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('CLC 21\n');
}).listen(process.env.PORT || 1337, '127.0.0.1');
console.log('Server running :1337');