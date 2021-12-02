import express from 'express';

import expressLoader from './express.loader';
import dbLoader from './db.loader';

class Loader {
  static async init(app: express.Application) {
    await dbLoader();
    console.log('database connected');
    expressLoader(app);
    console.log('express app initialized...');
  }
}

export default Loader;
