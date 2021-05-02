 const http =require('http');

 const server = http.createServer((req, res) => {
     res.end("hej med dig");
 });

 server.listen(process.env.PORT || 3000);
