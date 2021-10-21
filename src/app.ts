import express from 'express';

import loaders from './loaders';


const appLoader = async () => {
  const app = express();
  await loaders.init(app);
  return app;
}


export default appLoader;

