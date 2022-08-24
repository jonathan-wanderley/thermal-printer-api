export default interface IProductRepository {
  find(payload: any): Promise<any>;
  countTotalPrice(productList: any): Promise<any>;
  returnArrayWithName(IdList: Array<string>): Promise<any>;
}
