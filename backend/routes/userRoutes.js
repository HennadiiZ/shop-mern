import express from 'express';
const router = express.Router();
import { authUser, getUserProfile } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

// router.route('/login').get(authUser);
router.post('/login', authUser);

router.route('/profile').get(protect, getUserProfile);
// router.get('/user/profile', getUserProfile);

export default router;
