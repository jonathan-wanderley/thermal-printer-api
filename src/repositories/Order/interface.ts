export default interface IOrderRepository {
  create(payload: any): Promise<any>;
  getTodayOrders(): Promise<any>;
  finish(id: string): Promise<any>;
}
