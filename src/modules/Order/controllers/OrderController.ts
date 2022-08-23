import { Request, Response } from 'express';
import OrderUseCase from '../usecases/OrderUseCase';

export default class OrderController {
  private usecase: OrderUseCase;

  constructor(usecase: OrderUseCase) {
    this.usecase = usecase;
  }

  async create() {
    return 0;
  }
}
