import winston from 'winston';

import User from './user.model';

User
  .find({})
  .remove(() => {
    User.create(
      {
        provider: 'local',
        name: 'Test User',
        email: 'test@test.com',
        password: 'test',
      },
      {
        provider: 'local',
        role: 'admin',
        name: 'Admin',
        email: 'admin@admin.com',
        password: 'admin',
      },
      () => {
        winston.log('info', 'finished populating users');
      }
    );
  });
