const _ = require('lodash');
const io = require('socket.io-client');

export default (socketFactory) => {
  const ioSocket = io('', {
    path: '/socket.io-client',
  });

  const socket = socketFactory({
    ioSocket: ioSocket,
  });

  return {
    socket: socket,

    syncUpdates: (modelName, array, cb) => {
      let localEvent;

      const localCallback = cb || angular.noop;

      socket.on(modelName + ':save', (item) => {
        localEvent = 'created';

        const oldItem = _.find(array, { _id: item._id });
        const index = array.indexOf(oldItem);

        if (oldItem) {
          array.splice(index, 1, item);
          localEvent = 'updated';
        } else {
          array.push(item);
        }

        localCallback(localEvent, item, array);
      });

      socket.on(modelName + ':remove', (item) => {
        localEvent = 'deleted';

        _.remove(array, { _id: item._id });

        localCallback(localEvent, item, array);
      });
    },

    unsyncUpdates: (modelName) => {
      socket.removeAllListeners(modelName + ':save');
      socket.removeAllListeners(modelName + ':remove');
    },
  };
};
