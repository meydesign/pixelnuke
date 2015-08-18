import winston from 'winston';

function onDisconnect(socket) {
  winston.log('info', '[%s] DISCONNECTED', socket.address);
}

function onConnect(socket) {
  socket.on('info', (data) => {
    winston.log('info', '[%s] %s', socket.address, JSON.stringify(data, null, 2));
  });

  winston('info', '[%s] CONNECTED', socket.address);

  require('../api/thing/thing.socket').register(socket);
}

module.exports = (socketio) => {
  socketio.on('connection', (socket) => {
    socket.address = socket.handshake.address !== null
      ? socket.handshake.address.address + ':' + socket.handshake.address.port
      : process.env.DOMAIN;

    socket.connectedAt = new Date();

    socket.on('disconnect', () => {
      onDisconnect(socket);
    });

    onConnect(socket);
  });
};
