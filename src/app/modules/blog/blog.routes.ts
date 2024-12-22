import { Router } from 'express';

import validateRequest from '../../middlewares/validation';
import { BlogValidationSchemas } from './blog.validation';
import { BlogControllers } from './blog.controllers';
import auth from '../../middlewares/auth';
import { USER_ACCESS_ROLE } from '../user/user.constant';

// Init Blog Router
const router = Router();

// Create Blog
router.post(
  '/',
  auth(USER_ACCESS_ROLE.user),
  validateRequest(BlogValidationSchemas.createBlogValidationSchema),
  BlogControllers.blogCreate,
);
// Update Blog
router.patch(
  '/:id',
  auth(USER_ACCESS_ROLE.user),
  validateRequest(BlogValidationSchemas.updateBlogValidationSchema),
  BlogControllers.blogUpdate,
);
// Update Blog
router.delete('/:id', auth(USER_ACCESS_ROLE.user), BlogControllers.deleteblog);
// All Blog
router.get('/', BlogControllers.Allblog);
export const BlogRoutes = router;
