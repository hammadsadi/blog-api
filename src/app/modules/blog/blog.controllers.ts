import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogServices } from './blog.services';
/**
 * @Desc Blog Create
 * @Params ""
 * @Method POST
 * @Return Data
 */

const blogCreate = catchAsync(async (req, res) => {
  const id = req?.user.id;
  const result = await BlogServices.blogSaveToDB(req.body, id);
  sendResponse(res, {
    success: true,
    message: 'Blog created successfully',
    statusCode: 201,
    data: result,
  });
});

/**
 * @Desc Blog Update
 * @Params ""
 * @Method PATCH
 * @Return Data
 */

const blogUpdate = catchAsync(async (req, res) => {
  const author = req?.user.id;
  const result = await BlogServices.blogUpdateToDB(
    req.body,
    author,
    req.params.id,
  );
  sendResponse(res, {
    success: true,
    message: 'Blog updated successfully',
    statusCode: 200,
    data: result,
  });
});

/**
 * @Desc Get All Blog
 * @Params ""
 * @Method GET
 * @Return Data
 */

const Allblog = catchAsync(async (req, res) => {
  const result = await BlogServices.getAllblogFromDB(req.query);
  sendResponse(res, {
    success: true,
    message: 'Blogs fetched successfully',
    statusCode: 200,
    data: result,
  });
});

/**
 * @Desc Delete Blog
 * @Params ""
 * @Method GET
 * @Return Data
 */

const deleteblog = catchAsync(async (req, res) => {
   const author = req?.user.id;
   await BlogServices.deleteblogFromDB(req.params.id, author);
  sendResponse(res, {
    success: true,
    message: 'Blog deleted successfully',
    statusCode: 200,
  });
});

export const BlogControllers = {
  blogCreate,
  Allblog,
  blogUpdate,
  deleteblog,
};
