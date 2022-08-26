import Express, { Application } from 'express';
import { mongoDBConnection } from '../database';
import 'express-async-errors';
import cors from 'cors';
import BaseRoutes from './BaseRoutes';
import errorHandler from './middlewares/errorHandler';
import path from 'path';
import http from 'http';
import { Server as SocketServer } from 'socket.io'
import socket from '../sockets';
import swaggerUi from 'swagger-ui-express';
import swaggerJson from "./docs/swagger.json";

export default class App {
  private instance: Application;

  private defaultPort = 3000;

  constructor() {
    this.instance = Express();
  }

  async setup(port?: number): Promise<void> {
    const selectedPort = port || this.defaultPort;

    const server = http.createServer(this.instance);
    const io = new SocketServer(server).listen(server);

    this.instance.use(Express.json());
    this.instance.use(BaseRoutes);
    this.instance.use(cors());
    this.instance.use(errorHandler);
    this.instance.use(Express.static(path.join(__dirname, '../../public')));

    this.instance.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));

    await mongoDBConnection.createConnection();
    socket.server(io);

    server.listen(selectedPort, () => {
      console.log(`Server running on port: ${selectedPort}`);
    });


  }

  getInstance() {
    return this.instance;
  }

}
