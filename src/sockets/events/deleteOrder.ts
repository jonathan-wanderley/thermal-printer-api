import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import OrderUseCase from '../../modules/Order/usecases';

const deleteOrderEvent = (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
  socket.on('request-deleteorder', async (id: string) => {
    await OrderUseCase.delete(id);
    socket.emit('response-deleteorder');
  });
}

export default deleteOrderEvent;
