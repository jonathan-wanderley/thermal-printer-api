export default interface IProductRepository {
  find(payload: any): Promise<any>;
}
