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

  async delete(id: string): Promise<any> {
    return await this.orderModel.deleteOne({ _id: id });
  }

  async getTodayOrders() {
    return await this.orderModel.find({
      createdAt: {
        $gte: startOfDay(new Date()),
        $lte: endOfDay(new Date()),
      }
    });
  }

  async getAndSortTodayOrders(doneInput: boolean, sortType: "asc" | "desc") {
    return await this.orderModel
      .find({
        done: doneInput,
        createdAt: {
          $gte: startOfDay(new Date()),
          $lte: endOfDay(new Date()),
        }
      })
      .sort({ orderNumber: sortType });
  }

  async finish(id: string) {
    return await this.orderModel.findOneAndUpdate({ _id: id }, { done: true }, { new: true })
  }
}
