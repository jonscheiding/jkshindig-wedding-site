import keystone from 'keystone';
import { generate } from 'generate-password';

keystone.init({
  'cookie secret': generate({length: 32, numbers: true}),
  'name': 'jkshindig-wedding',
  'user model': 'User',
  'auto update': true,
  'auth': true,
  'port': 4000
});

keystone.import('./models');

keystone.start();
