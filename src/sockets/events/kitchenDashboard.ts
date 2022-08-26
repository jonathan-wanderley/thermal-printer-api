import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import OrderUseCase from '../../modules/Order/usecases';

const kitchenDashboardEvent = (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
  socket.on('request-kitchen', async () => {

    const orderList = await OrderUseCase.kitchen();

    socket.emit('response-kitchen', orderList)
  });
}

export default kitchenDashboardEvent;
