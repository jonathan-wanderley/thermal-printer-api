import { Socket } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import OrderUseCase from '../../modules/Order/usecases';
import constants from '../constants';

const withdrawlDashboardEvent = (socket: Socket<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
  socket.on(constants.withdrawalDashboard.request, async () => {

    const response = await OrderUseCase.withdrawal();

    socket.emit(constants.withdrawalDashboard.response, response)
  });
}

export default withdrawlDashboardEvent;
