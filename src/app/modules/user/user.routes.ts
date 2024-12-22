import { Router } from 'express';
import { UserControllers } from './user.controllers';
import { UserValidationSchemas } from './user.validation';
import validateRequest from '../../middlewares/validation';

// Init Router
const router = Router();

// Register User
router.post(
  '/register',
  validateRequest(UserValidationSchemas.createUserValidationSchema),
  UserControllers.userCreate,
);
// Register User
router.post(
  '/login',
  validateRequest(UserValidationSchemas.UserLoginValidationSchema),
  UserControllers.userLogin,
);

export const UserRoutes = router;
