import { Request, Response } from 'express';
import OrderUseCase from '../usecases/OrderUseCase';

export default class OrderController {
  private usecase: OrderUseCase;

  constructor(usecase: OrderUseCase) {
    this.usecase = usecase;
  }

  get create() {
    return async (req: Request, res: Response) => {
      const order = await this.usecase.create(req.body);
      res.json(order);
    };
  }
}
