import AppError from '../../errors/AppError';
import { Blog } from '../blog/blog.model';
import { User } from '../user/user.model';

/**
 * @Desc User Block By Admin
 * @Params ""
 * @Method PATCH
 * @Return Data
 */
const blockUser = async (userId: string) => {
    const user = await User.findById(userId);
    // Validation
    if (!user) {
      throw new AppError(404, 'User Not Found!');
    }
  const result = await User.findByIdAndUpdate(userId, { isBlocked: true });
  return result;
};

/**
 * @Desc Delete Blog By Admin
 * @Params ""
 * @Method DELETE
 * @Return Data
 */
const deleteBlog = async (blogId: string) => {
  const blog = await Blog.findById(blogId);
  // Validation
  if (!blog) {
    throw new AppError(404, 'Blog Not Found!');
  }
  const result = await Blog.findByIdAndDelete(blogId);
  return result;
};
export const AdminServices = {
  blockUser,
  deleteBlog,
};
