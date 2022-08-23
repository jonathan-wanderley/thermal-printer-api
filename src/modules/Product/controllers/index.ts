import ProductUseCase from '../usecases';
import ProductController from './ProductController';

const productController = new ProductController(ProductUseCase);

export default productController;
