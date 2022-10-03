const http = require('node:http');
const port = 3005;

// Create an HTTP server
const server = http.createServer();

server.on('request', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('okay');
});

server.on('upgrade', (req, socket, head) => {
  socket.write('HTTP/1.1 101 Web Socket Protocol Handshake\r\n' +
               'Upgrade: WebSocket\r\n' +
               'Connection: Upgrade\r\n' +
               '\r\n');
  socket.on('data', (chunk) => {
    console.log(`client say: ${chunk}`);
  });

  // socket.pipe(socket); // echo back
});


server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

// Now that server is running
server.listen(port, () => {
  console.log(`server up on port:${port}`)
});
