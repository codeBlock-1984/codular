import http from 'http';
import config from './config';

import appLoader from './app';

const startServer = async () => {
  const port = config.app.port;
  const app = await appLoader();
  const server = http.createServer(app);

  server.listen(port, () => {
    console.log(`Modular server is listening on port ${port}...`);
  });
}

startServer();
