// this how we import libs in nodeJs. This is our first nodeJs Service.
const app = require('./backend/app');
const http = require('http');
const debug = require('debug')('node-angular')

const normalizePort = val => {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }
  return false;
};

const onError = error => {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof addr === "string" ? "pipe" + addr : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + "requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + "is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe" + addr : "port" + port;
  debug("Listening on " + bind);
};

const port = normalizePort(process.env.PORT || 3000);
app.set("port", port);

const server = http.createServer(app);
server.on("error", onError);
server.on("Listening", onListening);
server.listen(port);


// Writing all the code just with NodeJs would be irriterende. If we wanna find out if we targeted just our /notingpath or if we had /product then
// we would have to parse that manually on the incoming requests. This we dont wanna do, that is why we use express backend.

