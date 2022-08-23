import IProductRepository from '../../../repositories/Product/interface';

export default class ProductUseCase {
  private productRepository: IProductRepository;

  constructor(productRepository: IProductRepository) {
    this.productRepository = productRepository;
  }
}
