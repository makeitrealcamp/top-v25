import { Router } from 'express';

import {
  handleLoginUser,
} from './local.controller'

const router = Router();


// Login
// POST /auth/local/login
router.post('/login', handleLoginUser);
// Change password
// POST /auth/local/change-password
// router.post('/change-password', handleChangePasswordUser);
// // Forgot password
// // POST /auth/local/forgot-password
// router.post('/forgot-password', handleForgotPasswordUser);
// // Verify email
// // POST /auth/local/verify-email
// router.post('/verify-email', handleVerifyEmailUser);

export default router;
