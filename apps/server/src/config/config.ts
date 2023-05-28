import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export default {
  dbConnection: process.env.DB_MONGO_CONNENCTION || 'mongodb://127.0.0.1:27017',
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 8080,
  env: 'development',
};
