import { Router } from 'express';

import {
  handleAllGetUsers,
  handleCreateUser,
  handleDeleteUser,
  handleGetUser,
  handleUpdateUser,
  handleLoginUser
} from './user.controller';

const router = Router();

// RESTful API

// GET /api/users
router.get('/', handleAllGetUsers);
// GET /api/users/:id
router.get('/:id', handleGetUser);
// POST /api/users
router.post('/', handleCreateUser);
// PATCH /api/users/:id
router.patch('/:id', handleUpdateUser);
// DELETE /api/users/:id
router.delete('/:id', handleDeleteUser);


// Login
// POST /api/users/login
router.post('/login', handleLoginUser);

export default router;
