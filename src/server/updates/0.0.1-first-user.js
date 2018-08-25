import { generate } from 'generate-password';

const initialPassword = generate({ length: 16, uppercase: false });

console.log(`Initial password for admin user: ${initialPassword}`);

export const create = {
  User: [
    {
      displayName: 'Admin',
      email: 'admin@jkshindig.com',
      password: initialPassword
    }
  ]
};
