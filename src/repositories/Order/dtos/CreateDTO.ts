export default interface CreateOrderDTO {
  orderNumber: number;
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
