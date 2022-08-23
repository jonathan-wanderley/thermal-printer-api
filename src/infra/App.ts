import Express, { Application } from 'express';
import { mongoDBConnection } from '../database';
import 'express-async-errors';
import BaseRoutes from './BaseRoutes';
import errorHandler from './middlewares/errorHandler';

export default class App {
  private instance: Application;

  private defaultPort = 3000;

  constructor() {
    this.instance = Express();
  }

  async setup(port?: number): Promise<void> {
    const selectedPort = port || this.defaultPort;

    this.instance.use(Express.json());
    this.instance.use(BaseRoutes);
    this.instance.use(errorHandler);

    await mongoDBConnection.createConnection();

    this.instance.listen(selectedPort, () => {
      console.log(`Server running on port: ${selectedPort}`);
    });
  }

  getInstance() {
    return this.instance;
  }
}
