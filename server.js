var st = require('st');
var http = require('http');

var PORT = process.env.PORT || 6090;

http.createServer(
  st({
    path: process.cwd(),
    url: '/',
    index: 'index.html'
  })
).listen(PORT, function() {
  console.log("Server running at http://localhost:" + PORT);
});
