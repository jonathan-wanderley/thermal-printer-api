import { Model } from 'mongoose';
import Product from '../../entities/Product';
import IProduct from '../../entities/interfaces/IProduct';
import IProductRepository from './interface';

export default class ProductRepository implements IProductRepository {
  private Product: Model<IProduct> = Product;

  find(payload: any): Promise<any> {
    throw new Error('Method not implemented.');
  }
}
