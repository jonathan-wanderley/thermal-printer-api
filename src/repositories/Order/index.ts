/* eslint-disable @typescript-eslint/no-var-requires */
import { Model } from 'mongoose';
import IOrder from '../../entities/interfaces/IOrder';
import Order from '../../entities/Order';
import IOrderRepository from './interface';

export default class OrderRepository implements IOrderRepository {
  create(payload: any): Promise<any> {
    throw new Error('Method not implemented.');
  }

  private orderModel: Model<IOrder> = Order;
}
