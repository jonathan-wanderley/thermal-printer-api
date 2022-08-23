import 'dotenv/config';

const ENV = {
  PORT: Number(process.env.DB_PORT),
  MONGO_URL: process.env.MONGO_URL as string,
};

export default ENV;
