import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import OrderUseCase from '../../modules/Order/usecases';

const withdrawlDashboardEvent = (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
  socket.on('request-withdrawal', async () => {

    const response = await OrderUseCase.withdrawal();

    socket.emit('response-withdrawal', response)
  });
}

export default withdrawlDashboardEvent;
