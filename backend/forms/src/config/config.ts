import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export default {
  dbConnectionPassword: process.env.DB_MONGO_CONNENCTION || '',
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 8080,
  env: 'development',
};
