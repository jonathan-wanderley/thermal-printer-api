import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import OrderUseCase from '../../modules/Order/usecases';
import constants from '../constants';

const kitchenDashboardEvent = (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
  socket.on(constants.kitchenDashboard.request, async () => {

    const orderList = await OrderUseCase.kitchen();

    socket.emit(constants.kitchenDashboard.response, orderList)
  });
}

export default kitchenDashboardEvent;
