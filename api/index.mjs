const http  = require('node:http');

const DEFAULT_HEADERS = {
  'Access-Control-Allow-Methods':  '*',
  'Access-Control-Allow-Origin':   '*',
  'Access-Control-Allow-Headers':  '*',
  'Access-Control-Expose-Headers': '*',
  'Content-Type': 'application/json'
};

const server = http.createServer((req, res) => {
  req.on('end', () => {
    res.writeHead(200, DEFAULT_HEADERS);
    res.end(JSON.stringify({ test: 1 }));
  });
});

server.listen(3000);

server.on(
  'listening',
  () => console.log(`server is started on http://localhost:3000...`)
);
server.on(
  'error',
  () => console.log('Сервер не запустился')
);

export default server;