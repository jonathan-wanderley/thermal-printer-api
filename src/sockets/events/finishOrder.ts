import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import OrderUseCase from '../../modules/Order/usecases';

const finishOrderEvent = (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
  socket.on('request-finishorder', async (id: string) => {

    const orderFinished = await OrderUseCase.finish(id);

    socket.emit('response-finishorder', orderFinished);
  });
}

export default finishOrderEvent;
