import { createConnection } from 'typeorm';
import { connectionDetails } from '../config/ormconfig';

const loader = async () => {
  await createConnection(connectionDetails);
}

export default loader;
