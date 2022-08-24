import { orderRepository, productRepository } from '../../../repositories';
import OrderUseCase from './OrderUseCase';

const orderUseCase = new OrderUseCase(orderRepository, productRepository);

export default orderUseCase;
