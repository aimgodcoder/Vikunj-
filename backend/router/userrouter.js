import express from 'express';
import { registerUser,loginUser,getUserProfile } from '../controller/usercontroller.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile',isAuthenticated, getUserProfile);


export default router;