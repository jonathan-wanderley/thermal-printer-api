import 'dotenv/config';

const ENV = {
  PORT: Number(process.env.DB_PORT),
  MONGO_URL: process.env.MONGO_URL as string,
  PRINTER_PORT: process.env.PRINTER_PORT as string,
};

export default ENV;
