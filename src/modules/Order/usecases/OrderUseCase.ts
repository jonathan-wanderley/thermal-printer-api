import AppError from '../../../infra/errors/AppError';
import IOrderRepository from '../../../repositories/Order/interface';
import IProductRepository from '../../../repositories/Product/interface';
import CreateOrderDTO from './dtos/CreateDTO';

export default class OrderUseCase {
  private orderRepository: IOrderRepository;

  private productRepository: IProductRepository;

  constructor(
    orderRepository: IOrderRepository,
    productRepository: IProductRepository,
  ) {
    this.orderRepository = orderRepository;
    this.productRepository = productRepository;
  }

  async create(payload: CreateOrderDTO) {
    // eslint-disable-next-line prettier/prettier
    const productArray = await this.productRepository.returnArrayWithName(payload.products);

    const totalPrice = await this.productRepository.countTotalPrice(
      payload.products,
    );

    if (payload.payment.amountPaid < totalPrice) {
      throw new AppError(
        400,
        `O valor pago é insuficiente. Valor total: ${totalPrice}. Valor pago: ${payload.payment.amountPaid}`,
      );
    }


    const dataObject = {
      clientName: payload.clientName,
      products: productArray,
      payment: {
        orderTotal: totalPrice,
        amountPaid: payload.payment.amountPaid,
        moneyChange: payload.payment.amountPaid - totalPrice,
        methods: payload.payment.methods,
      },
      note: payload.note,
      done: false,
    };

    const newOrder = await this.orderRepository.create(dataObject);
    return newOrder;
  }
}
