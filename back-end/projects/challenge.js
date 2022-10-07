const http = require('http');

const req = http.request({
  port: 3005,
  method: 'GET'
});

// chunk, response content

req.on('response', (res) => {
  res.on('data', (chunk) => {
    console.log(`Server say: ${chunk}`);
  });
});

req.end();

const reqSocket = http.request({
  port: 3005,
  headers: {
    Upgrade: 'websocket',
    Connection: 'Upgrade'
  }
});

reqSocket.on('upgrade', (res, socket) => {
  console.log('connected to server');
  // socket.write('eae mano?');
  process.stdin.pipe(socket);
});

reqSocket.end();

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