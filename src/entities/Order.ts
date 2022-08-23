import { model, Schema } from 'mongoose';
import IOrder from './interfaces/IOrder';

export const orderSchema = new Schema<IOrder>(
  {
    orderNumber: {
      type: Schema.Types.Number,
    },
    clientName: {
      type: Schema.Types.String,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
    payment: {
      orderTotal: {
        type: Schema.Types.Number,
      },
      amountPaid: {
        type: Schema.Types.Number,
      },
      moneyChange: {
        type: Schema.Types.Number,
      },
      method: [
        {
          type: Schema.Types.String,
        },
      ],
    },
    note: {
      type: Schema.Types.String,
    },
  },
  { timestamps: true },
);

orderSchema.index({ '$**': 'text' });

export default model<IOrder>('Order', orderSchema);
