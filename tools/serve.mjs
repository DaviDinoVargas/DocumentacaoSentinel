import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
const root = path.resolve(import.meta.dirname, '..');
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.woff2':'font/woff2','.json':'application/json'};
http.createServer((req,res) => {
  let url;
  try { url = decodeURIComponent(new URL(req.url, 'http://localhost').pathname).replace(/^\/DocumentacaoSentinel(?=\/|$)/, ''); } catch { res.writeHead(400).end(); return; }
  const file = path.resolve(root, '.' + (url === '/' || !url ? '/index.html' : url));
  if (!file.startsWith(root + path.sep)) { res.writeHead(403).end(); return; }
  fs.readFile(file, (err,data) => { if(err) {res.writeHead(404).end('Não encontrado'); return;} res.writeHead(200, {'Content-Type':types[path.extname(file)] || 'application/octet-stream'}).end(data); });
}).listen(8000, '127.0.0.1', () => console.log('http://127.0.0.1:8000/DocumentacaoSentinel/'));
