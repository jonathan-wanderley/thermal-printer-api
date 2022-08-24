export default interface IOrderRepository {
  create(payload: any): Promise<any>;
  getTodayOrders(): Promise<any>;
}
