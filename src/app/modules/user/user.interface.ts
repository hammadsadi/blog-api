/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';
import { USER_ACCESS_ROLE } from './user.constant';

// Role Type
export type TRole = 'admin' | 'user';
// User Types
export interface TUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: TRole;
  isBlocked: boolean;
}

export interface TUserLogin {
  _id?: string;
  email: string;
  password: string;
  role: string;
}
export interface UserModel extends Model<TUser> {
  isUserExistByEmail(email: string | undefined): Promise<TUser>;
  isCheckPassword(
    myPlaintextPassword: string,
    hashPass: string,
  ): Promise<boolean>;
}
export type TUserAccessRole = keyof typeof USER_ACCESS_ROLE;
