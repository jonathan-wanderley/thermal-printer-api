import ENV from '../infra/config/env';
import Conection from './connection';

const mongoDBConnection = new Conection(ENV.MONGO_URL);

export { mongoDBConnection };
