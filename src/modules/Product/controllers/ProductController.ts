import { Request, Response } from 'express';
import ProductUseCase from '../usecases/ProductUseCase';

export default class ProductController {
  private usecase: ProductUseCase;

  constructor(usecase: ProductUseCase) {
    this.usecase = usecase;
  }

  get find() {
    return async (req: Request, res: Response) => {
      const { search } = req.query;

      const productList = await this.usecase.find(search as string);

      res.json(productList);
    };
  }
}
