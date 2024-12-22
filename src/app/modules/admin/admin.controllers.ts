import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AdminServices } from './admin.services';
/**
 * @Desc User Block By Admin
 * @Params ""
 * @Method PATCH
 * @Return Data
 */

const adminBlock = catchAsync(async (req, res) => {
  await AdminServices.blockUser(req.params.userId);
  sendResponse(res, {
    success: true,
    message: 'User blocked successfully',
    statusCode: 200,
  });
});

/**
 * @Desc Delete Blog By Admin
 * @Params ""
 * @Method DELETE
 * @Return Data
 */

const deleteBlog = catchAsync(async (req, res) => {
  await AdminServices.deleteBlog(req.params.id);
  sendResponse(res, {
    success: true,
    message: 'Blog deleted successfully',
    statusCode: 200,
  });
});
export const AdminControllers = {
  adminBlock,
  deleteBlog,
};
