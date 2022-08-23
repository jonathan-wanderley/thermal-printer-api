import Express, { Application } from 'express';
import BaseRoutes from './BaseRoutes';

export default class App {
  private instance: Application;

  private defaultPort = 3000;

  constructor() {
    this.instance = Express();
  }

  setup(port?: number): void {
    const selectedPort = port || this.defaultPort;

    this.instance.use(Express.json());
    this.instance.use(BaseRoutes);
    this.instance.listen(selectedPort, () => {
      console.log(`Server running on port: ${selectedPort}`);
    });
  }
}
