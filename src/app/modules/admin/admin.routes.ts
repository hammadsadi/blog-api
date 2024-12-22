import { Router } from 'express';
import { AdminControllers } from './admin.controllers';
import auth from '../../middlewares/auth';
import { USER_ACCESS_ROLE } from '../user/user.constant';

// Init Router
const router = Router();

// Register User
router.patch(
  '/users/:userId/block',
  auth(USER_ACCESS_ROLE.admin),
  AdminControllers.adminBlock,
);
// Register User
router.delete(
  '/blogs/:id',
  auth(USER_ACCESS_ROLE.admin),
  AdminControllers.deleteBlog,
);

export const AdminRoutes = router;
