// userRoutes.js
import express from 'express';
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser);

// router.route('/login').get(authUser);
router.post('/login', authUser);

router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
// router.route('/profile').get(protect, getUserProfile);
// router.get('/profile', protect, getUserProfile);

export default router;
