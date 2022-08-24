export default interface CreateOrderDTO {
  clientName: string;
  products: [
    {
      id: string;
      name: string;
    },
  ];
  payment: {
    orderTotal: number;
    amountPaid: number;
    moneyChange: number;
    methods: string;
  };
  note: string;
  done: boolean;
}
