module.exports = {

  // Server IP
  ip: process.env.IP || undefined,

  // Server port
  port: process.env.PORT || 8080,

  // MongoDB connection options
  mongo: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/pixelnuke',
  },

  // Seed Database
  seedDB: false,
};
