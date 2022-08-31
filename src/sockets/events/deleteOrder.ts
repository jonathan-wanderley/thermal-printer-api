import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import OrderUseCase from '../../modules/Order/usecases';
import constants from '../constants';

const deleteOrderEvent = (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
  socket.on(constants.deleteOrder.request, async (id: string) => {
    await OrderUseCase.delete(id);
    socket.emit(constants.deleteOrder.response);
  });
}

export default deleteOrderEvent;
