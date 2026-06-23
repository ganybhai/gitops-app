const http = require('http');
const env = process.env.APP_ENV || 'dev';
const version = process.env.APP_VERSION || 'v1.0.0';
http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.end(JSON.stringify({ env, version, status: 'ok' }));
}).listen(3000, () => console.log(`Running on :3000 [${env}] ${version}`));
