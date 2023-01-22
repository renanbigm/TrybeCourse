const http = require('http');
const url = require('url'); // string to object;
const util = require('util'); // object to string;
const { StringDecoder } = require('string_decoder');

const port = 3334;
const server = http.createServer((req, res) => {
  // console.log(http.METHODS);
  // console.log(req.headers)
  const path = url.parse(req.url, true); // path.pathname, path.search, path.query
  // const decoder = new StringDecoder('utf-8');
  let buffer = '';
  
  req.on('data', (chunk) => {
      console.log('data --->', chunk);
      console.log('decoded --->', buffer += chunk);
      buffer += chunk;
    });

    req.on('end', (chunk) => {
      if (chunk) {
        buffer += chunk;
      }
      res.writeHead(200, 'ok');
      // res.write(util.inspect(path.query));
      res.write(buffer);

      res.end('its done');
    });
    
    // res.writeHead(200, 'OK');
    // console.log(req.url);
  // console.log(util.inspect(path.query));
  // res.write(util.inspect(path.query));
  // res.end('Done');
});

// server.on('connection')

server.listen(port, () => {
  console.log(`Server up on port: ${port}.`);
});

// const http = require('http');

// const req = http.request({
//   port: 3005,
//   method: 'GET',
// });

// // chunk, response content

// req.on('response', (res) => {
//   res.on('data', (chunk) => {
//     console.log(`Server say: ${chunk}`);
//   });
// });

// req.end();

// const reqSocket = http.request({
//   port: 3005,
//   headers: {
//     Upgrade: 'websocket',
//     Connection: 'Upgrade',
//   },
// });

// reqSocket.on('upgrade', (res, socket) => {
//   console.log('connected to server');
//   // socket.write('eae mano?');
//   process.stdin.pipe(socket);
// });

// reqSocket.end();

// let net = require('net');
// let client = new net.Socket();

// client.connect(2708, '127.0.0.1',function(){
//     console.log("Client Connected!\n");
//     client.emit('adduser',"UserName");
// });

// client.on('data',function(data){
//     console.log(""+data);
// });

// client.on('close', function() {
//     console.log('Connection closed');
// });