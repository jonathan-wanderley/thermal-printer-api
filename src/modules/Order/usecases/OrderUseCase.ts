import IOrderRepository from '../../../repositories/Order/interface';

export default class OrderUseCase {
  private orderRepository: IOrderRepository;

  constructor(orderRepository: IOrderRepository) {
    this.orderRepository = orderRepository;
  }

  async find() {
    return 0;
  }
}
