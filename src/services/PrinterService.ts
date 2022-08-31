import ENV from "../infra/config/env";
import NodeThermalPrinter from 'node-thermal-printer';

const ThermalPrinter = NodeThermalPrinter.printer;
const PrinterTypes = NodeThermalPrinter.types;

export default class PrinterService {
  private printer: NodeThermalPrinter.printer;

  constructor() {
    this.printer = new ThermalPrinter({
      type: PrinterTypes.EPSON,                                  // Printer type: 'star' or 'epson'
      interface: 'printer-output.txt',                       // Printer interface
      characterSet: 'SLOVENIA',                                 // Printer character set - default: SLOVENIA
      removeSpecialCharacters: false,                           // Removes special characters - default: false
      lineCharacter: "=",                                       // Set character for lines - default: "-"
      options:{                                                 // Additional options
        timeout: 5000                                           // Connection timeout (ms) [applicable only for network printers] - default: 3000
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
