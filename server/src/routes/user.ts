import { Router } from 'express';
import userController from '../controllers/UserController.js';
import { authMiddleware } from '../middlewares/authMiddleware.js';
import { adminMiddleware } from '../middlewares/adminMiddleware.js';

const userRouter = Router();

userRouter.get('/me', authMiddleware, userController.getCurrentUser);
userRouter.get('/', authMiddleware, adminMiddleware, userController.getAllUsers);

export default userRouter;