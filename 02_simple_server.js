let http = require('http');
let port = 5500;

let myServer = http.createServer(function (clientRequest, serverResponse) {
  serverResponse.end('Your registration was successful, you are a member now!');
});

myServer.listen(port);
