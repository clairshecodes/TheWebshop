const http = require('http');
const server = http.createServer((req, res) => {


  // exits the server
  //process.exit();
  res.setHeader('Content-type','text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Fuck</h1></body>');
  res.write('</html>');
  res.end();
});
/* listen starts a process, and listens for incoming request */
server.listen(3000);


