import { Server as SocketServer } from 'socket.io';
import { DefaultEventsMap } from 'socket.io/dist/typed-events';
import socketEvents from './events';

const server = (io: SocketServer<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {

  io.on('connection', (socket) => {
    console.log('[WebSocket] Connected sucessfuly!');

    socketEvents.finishOrder(socket);
    socketEvents.deleteOrder(socket);
    socketEvents.kitchenDashboard(socket);
    socketEvents.withdrawlDashboard(socket);
  });
}

export default {
  server
}
