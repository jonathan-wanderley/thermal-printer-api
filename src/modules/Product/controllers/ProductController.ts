import ProductUseCase from '../usecases/ProductUseCase';

export default class ProductController {
  private usecase: ProductUseCase;

  constructor(usecase: ProductUseCase) {
    this.usecase = usecase;
  }
}
