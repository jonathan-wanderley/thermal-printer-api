import Express, { Application } from 'express';
import { mongoDBConnection } from '../database';
import 'express-async-errors';
import BaseRoutes from './BaseRoutes';
import errorHandler from './middlewares/errorHandler';
import path from 'path';
import cors from 'cors';
import http from 'http';
import { Server as SocketServer } from 'socket.io'
import socket from '../sockets';

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
    this.instance.use(errorHandler);
    this.instance.use(Express.static(path.join(__dirname, '../../public')));

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
