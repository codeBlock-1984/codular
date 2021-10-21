import express from 'express';

import expressLoader from './express.loader';

class Loader {
  static async init(app: express.Application) {
    expressLoader(app);
    console.log('express app initialized...');
  }
}

export default Loader;
