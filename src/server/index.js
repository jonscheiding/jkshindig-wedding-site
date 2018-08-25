import keystone from 'keystone';
import { generate } from 'generate-password';

keystone.init({
  'cookie secret': generate({length: 32, numbers: true}),
  'name': 'jkshindig-wedding',
  'user model': 'User',
  'auto update': true,
  'auth': true,
  'port': process.env.BACKEND_PORT || 4000,
  'static': [
    '../../build'
  ]
});

keystone.import('./models');
keystone.set('routes', require('./routes'));

keystone.start();
