import sendResponse from '../../utils/sendResponse';
import catchAsync from '../../utils/catchAsync';
import { UserServices } from './user.services';

/**
 * @Desc User Create
 * @Params ""
 * @Method POST
 * @Return Data
 */

const userCreate = catchAsync(async (req, res) => {
  const result = await UserServices.userSaveToDB(req.body);
  sendResponse(res, {
    success: true,
    message: 'User registered successfully',
    statusCode: 201,
    data: result,
  });
});


/**
 * @Desc User Login
 * @Params ""
 * @Method POST
 * @Return Data
 */

const userLogin = catchAsync(async (req, res) => {
  const result = await UserServices.userLogin(req.body);
  sendResponse(res, {
    success: true,
    message: 'Login successful',
    statusCode: 200,
    data: {
      token: result,
    },
  });
});
export const UserControllers = {
  userCreate,
  userLogin,
};
