import { orderRepository } from '../../../repositories';
import OrderUseCase from './OrderUseCase';

const orderUseCase = new OrderUseCase(orderRepository);

export default orderUseCase;
