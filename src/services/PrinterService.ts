import ENV from "../infra/config/env";
import { SerialPort } from "serialport";

export default class {
  private printerPort: string = ENV.PRINTER_PORT;
  private port: any;

  constructor() {
    this.port = new SerialPort({ path: this.printerPort, baudRate: 9600 });
  }

  async print(message: string) {
    this.port.on('open', (err: any) => {
      if(err) console.log(err);

      this.port.write(message)
    });

    this.port.on('error', (err: any) => console.log(err));
  }
}
