import config from '../../config';
import AppError from '../../errors/AppError';
import { TUser, TUserLogin } from './user.interface';
import { User } from './user.model';
import jwt from 'jsonwebtoken';
/**
 * @Desc User Save To DB
 * @Params ""
 * @Method POST
 * @Return Data
 */
const userSaveToDB = async (payload: TUser) => {
  const result = await User.create(payload);
  return {
    _id: result._id,
    name: result.name,
    email: result.email,
  };
};

/**
 * @Desc User Login
 * @Params ""
 * @Method POST
 * @Return Token
 */
const userLogin = async (payload: TUserLogin) => {
  // Check User
  const user = await User.isUserExistByEmail(payload?.email);
  if (!user) {
    throw new AppError(401, 'Invalid credentials!');
  }
  // Check User Delete Status
  if (user && user.isBlocked) {
    throw new AppError(400, 'User Blocked!');
  }

  // Check Password
  const passCheck = await User.isCheckPassword(
    payload?.password as string,
    user?.password,
  );

  if (!passCheck) {
    throw new AppError(401, 'Invalid credentials!');
  }
  const userPayload = {
    id: user?._id,
    role: user?.role,
  };
  // Create Token
  const token = jwt.sign(userPayload, config.JWT_ACCESS_TOKEN as string, {
    expiresIn: config.JWT_ACCESS_TOKEN_EXPIRES_IN,
  });

  return token;
};

export const UserServices = {
  userSaveToDB,
  userLogin,
};
