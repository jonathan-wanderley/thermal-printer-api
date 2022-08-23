import { connect, Mongoose } from 'mongoose';

export default class Connection {
  private instance: Mongoose | undefined;

  private urlConnection: string;

  constructor(urlConnection: string) {
    this.urlConnection = urlConnection;
  }

  getInstance() {
    return this.instance;
  }

  async createConnection() {
    try {
      this.instance = await connect(this.urlConnection);
      console.log('Database connected!');
    } catch (error) {
      console.error(error);
    }
  }
}
