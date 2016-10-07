var fs = require('fs');
var path = require('path');
var http2 = require('http2').createServer({
  key: fs.readFileSync(path.join(__dirname, './localhost.key')),
  cert: fs.readFileSync(path.join(__dirname, './localhost.crt'))
}, (request, response) => {
  var filePath;
  var serverRoot = '../';

  if (request.url == "/") {
    filePath = `${serverRoot}index.html`;
  } else {
    filePath = `${serverRoot}${request.url}`;
  }

  var filename = path.join(__dirname, filePath);

  if (fs.existsSync(filename) && fs.statSync(filename).isFile()) {
    response.writeHead(200);
    response.writeHead(200)
    fs.createReadStream(filename).pipe(response)
  } else {
    response.writeHead(404);
    response.end();
  }
}).listen(8080);