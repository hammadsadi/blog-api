/* eslint-disable @typescript-eslint/no-this-alias */
import { model, Schema } from 'mongoose';
import { TUser, UserModel } from './user.interface';
import { UserRole } from './user.constant';
import bcrypt from 'bcrypt';
import config from '../../config';
const userSchema = new Schema<TUser, UserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      enum: UserRole,
      default: 'user',
    },
  },
  {
    timestamps: true,
  },
);

// Hasing Password Using Pre Hooks
userSchema.pre('save', async function (next) {
  const userInfo = this;
  userInfo.password = await bcrypt.hash(
    userInfo.password,
    Number(config.BCRYPT_SOLT_ROUND),
  );
  next();
});

// Check User By Id
userSchema.statics.isUserExistByEmail = async function (email: string) {
  return await User.findOne({ email }).select('+password');
};

// Check Password
userSchema.statics.isCheckPassword = async function (
  myPlaintextPassword: string,
  hashPass: string,
) {
  return await bcrypt.compare(myPlaintextPassword, hashPass);
};

export const User = model<TUser, UserModel>('User', userSchema);
