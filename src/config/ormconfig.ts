import { ConnectionOptions } from 'typeorm';
import config from './config';

const isProd = config.app.env === 'production';
const ext = `${ isProd ? 'js' : 'ts'}`;

const dbConfig = config.db[config.app.env];

export const connectionDetails: ConnectionOptions = {
  name: 'default',
  type: 'postgres',
  ...dbConfig as {},
  synchronize: !isProd,
  logging: false,
  entities: [`../../data/database/index{.ts,.js}`],
  migrations: [`../../data/database/migration/**/*{}`],
  subscribers: [`../../data/database/subscriber/**/*.${ext}`],
  cli: {
    entitiesDir: '../../data/database/entity',
    migrationsDir: '../../data/database/migration',
    subscribersDir: '../../data/database/subscriber',
  },
};
