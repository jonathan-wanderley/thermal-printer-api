export default interface IOrderRepository {
  create(payload: any): Promise<any>;
}
