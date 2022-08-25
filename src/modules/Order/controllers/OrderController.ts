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

  get finish() {
    return async (req: Request, res: Response) => {
      const { id } = req.params;

      const result = await this.usecase.finish(id);

      res.json(result);
    }
  }

  get kitchen() {
    return async (req: Request, res: Response) => {

      const result = await this.usecase.kitchen();

      res.json(result);
    }
  }
}
