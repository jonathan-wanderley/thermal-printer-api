import ENV from "../infra/config/env";
import NodeThermalPrinter from 'node-thermal-printer';

const ThermalPrinter = NodeThermalPrinter.printer;
const PrinterTypes = NodeThermalPrinter.types;

export default class PrinterService {
  private printer: NodeThermalPrinter.printer;

  constructor() {
    this.printer = new ThermalPrinter({
      type: PrinterTypes.EPSON,
      interface: ENV.PRINTER_PORT,
      characterSet: 'SLOVENIA',
      removeSpecialCharacters: false,
      lineCharacter: "=",
      options:{
        timeout: 5000
      }
    });


  }

  async checkConnection(): Promise<boolean> {
    let isConnected = await this.printer.isPrinterConnected();
    if(isConnected) {
      console.log('[Thermal Printer] Printer connected sucessfully!');
    }

    return isConnected;
  }


  async print(message: string) {
    this.printer.newLine();
    this.printer.drawLine();
    this.printer.println(message);
    this.printer.drawLine();
    let execute = await this.printer.execute();
    console.log('[Thermal Printer] Printed successfully!');
  }
}
