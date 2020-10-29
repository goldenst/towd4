import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserByid,
  updateUser,
} from '../controlers/userControler.js';

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/login', authUser);
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

router
  .route('/:id')
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserByid)
  .put(protect, admin, updateUser)


export default router;
