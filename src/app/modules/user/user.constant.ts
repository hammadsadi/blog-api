import { TRole } from './user.interface';

export const UserRole: TRole[] = ['user', 'admin'];
export const USER_ACCESS_ROLE = {
  user: 'user',
  admin: 'admin',
} as const;
