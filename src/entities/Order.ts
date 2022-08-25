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
        id: {
          type: Schema.Types.ObjectId,
          ref: 'Product',
        },
        name: {
          type: Schema.Types.String,
        },
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
      methods: [
        {
          type: Schema.Types.String,
        },
      ],
    },
    note: {
      type: Schema.Types.String,
    },
    done: {
      type: Schema.Types.Boolean,
    },
    finishedTime: {
      type: Schema.Types.Date,
    },
  },
  { timestamps: true },
);

orderSchema.index({ '$**': 'text' });

export default model<IOrder>('Order', orderSchema);
