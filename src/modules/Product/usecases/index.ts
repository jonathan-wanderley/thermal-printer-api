import { productRepository } from '../../../repositories';
import ProductUseCase from './ProductUseCase';

const productUseCase = new ProductUseCase(productRepository);

export default productUseCase;
