import { Server as SocketServer } from 'socket.io'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'

const server = (io: SocketServer<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>) => {
  io.on('connection', (socket) => {
    console.log('conexao detectada');
  });
}

export default {
  server
}
