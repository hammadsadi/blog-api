import { SortOrder } from 'mongoose';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TBlog } from './blog.interface';
import { Blog } from './blog.model';

/**
 * @Desc Blog Save To DB
 * @Params ""
 * @Method POST
 * @Return Data
 */
const blogSaveToDB = async (payload: TBlog, author: string) => {
  // Find User
  const user = await User.findById(author);
  // Validation
  if (!user) {
    throw new AppError(404, 'Author Not Found!');
  }
  const result = await Blog.create({ author, ...payload });
  return {
    _id: result._id,
    title: result.title,
    content: result.content,
    author: result,
  };
};

/**
 * @Desc Blog Update To DB
 * @Params id
 * @Method PATCH
 * @Return Data
 */
const blogUpdateToDB = async (
  payload: Partial<TBlog>,
  author: string,
  id: string,
) => {
  // Find User
  const user = await User.findById(author);
  // Validation
  if (!user) {
    throw new AppError(404, 'Author Not Found!');
  }
  const blog = await Blog.findOne({ author: user?._id, _id: id });

  // Validation
  if (!blog) {
    throw new AppError(404, 'Blog Not Found!');
  }
  const result = await Blog.findByIdAndUpdate(id, payload, { new: true });
  return {
    _id: result?._id,
    title: result?.title,
    content: result?.content,
    author: result,
  };
};

/**
 * @Desc Get All Blog From DB
 * @Params ""
 * @Method POST
 * @Return Data
 */
const getAllblogFromDB = async (query: Record<string, unknown>) => {
  // Done > search, filter, sortBy
  // Searchable Fields
  const blogSearcAbleFields = ['title', 'content'];
  let search = '';
  if (query?.search) {
    search = query?.search as string;
  }

  const searchQuery = Blog.find({
    $or: blogSearcAbleFields.map((field) => ({
      [field]: { $regex: search, $options: 'i' },
    })),
  });

  let filterQuery = searchQuery;
  if (query?.filter) {
    filterQuery = filterQuery.find({ author: query?.filter });
  }

  let sortBy = filterQuery;
  if (query?.sortBy) {
    sortBy = filterQuery.sort(query?.sortBy as string);
  }

  const sortOrder = sortBy;

  let querySortOrder: SortOrder = 1;
  if (query?.sortOrder === 'desc') {
    querySortOrder = -1;
  }
  const blogs = sortOrder
    .sort({ createdAt: querySortOrder })
    .populate('author');
  return await blogs;
};

/**
 * @Desc Delete Blog From DB
 * @Params id
 * @Method DELETE
 * @Return Data
 */
const deleteblogFromDB = async (id: string, author: string) => {
  // Find User
  const user = await User.findById(author);
  // Validation
  if (!user) {
    throw new AppError(404, 'Author Not Found!');
  }
  const blogExistByAuthor = await Blog.findOne({ author: user?._id, _id: id });

  // Validation
  if (!blogExistByAuthor) {
    throw new AppError(404, 'Blog Not Found!');
  }

  const result = await Blog.findByIdAndDelete(id);
  return result;
};

export const BlogServices = {
  blogSaveToDB,
  getAllblogFromDB,
  blogUpdateToDB,
  deleteblogFromDB,
};
