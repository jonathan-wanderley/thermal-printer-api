/* eslint-disable @typescript-eslint/no-var-requires */
import { Model } from 'mongoose';
import IOrder from '../../entities/interfaces/IOrder';
import Order from '../../entities/Order';
import CreateOrderDTO from './dtos/CreateDTO';
import IOrderRepository from './interface';
import endOfDay from 'date-fns/endOfDay';
import startOfDay from 'date-fns/startOfDay';

export default class OrderRepository implements IOrderRepository {
  private orderModel: Model<IOrder> = Order;

  async create(payload: CreateOrderDTO): Promise<any> {
    const createdUser = await this.orderModel.create(payload);
    return createdUser;
  }

  async getTodayOrders() {
    return await this.orderModel.find({
      createdAt: {
        $gte: startOfDay(new Date()),
        $lte: endOfDay(new Date()),
      }
    });
  }
}
