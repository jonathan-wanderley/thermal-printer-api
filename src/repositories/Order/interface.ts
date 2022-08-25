export default interface IOrderRepository {
  create(payload: any): Promise<any>;
  delete(id: string): Promise<any>;
  getTodayOrders(): Promise<any>;
  getAndSortTodayOrders(doneInput: boolean, sortType: "asc" | "desc"): Promise<any>;
  finish(id: string): Promise<any>;
}
