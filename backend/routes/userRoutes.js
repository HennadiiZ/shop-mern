import express from 'express';
const router = express.Router();
import { authUser } from '../controllers/userController.js';

// router.route('/login').get(authUser);
router.post('/login', authUser);

export default router;
