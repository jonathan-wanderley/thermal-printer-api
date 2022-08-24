import OrderRepository from './Order';
import ProductRepository from './Product';

const productRepository = new ProductRepository();
const orderRepository = new OrderRepository();

export { productRepository, orderRepository };
