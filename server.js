import { createServer } from 'node:http';
import { pathToFileURL } from 'node:url';

export function greeting(name) {
  return `Helo, ${name}`;
}

export function page() {
  return `<!doctype html>
<html>
  <head><meta charset="utf-8"><title>th-shot-app</title></head>
  <body style="font-family: sans-serif; padding: 2rem">
    <h1>${greeting('terminalhire')}</h1>
    <p>A one-page app for screenshot runs.</p>
  </body>
</html>`;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const port = Number(process.env.PORT) || 3000;
  createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.end(page());
  }).listen(port, () => console.log(`listening on ${port}`));
}
