import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import OrderUseCase from '../../modules/Order/usecases';
import constants from '../constants';

const finishOrderEvent = (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
  socket.on(constants.finishOrder.request, async (id: string) => {

    const orderFinished = await OrderUseCase.finish(id);

    socket.emit(constants.finishOrder.response, orderFinished);
  });
}

export default finishOrderEvent;
