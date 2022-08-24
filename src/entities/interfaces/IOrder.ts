import { Schema } from 'mongoose';
import IProduct from './IProduct';

export default interface IOrder {
  orderNumber: number;
  clientName: string;
  products: [
    {
      id: Schema.Types.ObjectId | IProduct;
      name: string;
    },
  ];
  payment: {
    orderTotal: number;
    amountPaid: number;
    moneyChange: number;
    methods: string[];
  };
  note: string;
  done: boolean;
  finishedTime: Date;
}
