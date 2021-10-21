import dotenv from 'dotenv';

dotenv.config();

const config = {
  app: {
    port: process.env.PORT
  },
  database: {
  }
};

export default config;
