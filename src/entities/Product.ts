import { model, Schema } from 'mongoose';
import IProduct from './interfaces/IProduct';

export const productSchema = new Schema<IProduct>(
  {
    name: {
      type: Schema.Types.String,
    },
    photo: {
      type: Schema.Types.String,
    },
    price: {
      type: Schema.Types.Number,
    },
    ingredients: [{ type: Schema.Types.String }],
    categories: [{ type: Schema.Types.String }],
  },
  { timestamps: true },
);

productSchema.index({ '$**': 'text' });

export default model<IProduct>('Product', productSchema);
