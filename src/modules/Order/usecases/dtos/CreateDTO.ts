export default interface CreateOrderDTO {
  clientName: string;
  products: string[];
  payment: {
    amountPaid: number;
    methods: string;
  };
  note: string;
}
