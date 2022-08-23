import { Schema } from 'mongoose';
import IProduct from './IProduct';

export default interface IOrder {
  orderNumber: number;
  clientName: string;
  products: [Schema.Types.ObjectId | IProduct];
  payment: {
    orderTotal: number;
    amountPaid: number;
    moneyChange: number;
    method: string[];
  };
  note: string;
}
