/* eslint-disable @typescript-eslint/no-var-requires */
import { Model } from 'mongoose';
import IProduct from '../../entities/interfaces/IProduct';
import Product from '../../entities/Product';
import IProductRepository from './interface';

const { ObjectId } = require('mongoose').Types;

export default class ProductRepository implements IProductRepository {
  private productModel: Model<IProduct> = Product;

  async find(search: string): Promise<any> {
    if (!search || search === undefined) {
      return await this.productModel.find({});
    }

    let possibleId = null;
    if (ObjectId.isValid(search)) {
      possibleId = search;
    }

    return await this.productModel.find({
      $or: [{ _id: possibleId }, { name: search }],
    });
  }
}
