import OrderUserCase from '../usecases';
import OrderController from './OrderController';

const orderController = new OrderController(OrderUserCase);

export default orderController;
