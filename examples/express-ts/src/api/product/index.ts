import { Router } from 'express';

import { isAuthenticated, hasRole } from '../../auth/auth.services';

import {
  handleAllGetProducts,
  handleCreateProduct,
  handleDeleteProduct,
  handleGetProductById,
  handleUpdateProduct,
} from './product.controller';

const router = Router();
// RESTful API

// GET /api/products
router.get('/', handleAllGetProducts);
// GET /api/products/:id
router.get('/:id', handleGetProductById);
// POST /api/products
router.post('/', handleCreateProduct);
// PATCH /api/products/:id
router.patch('/:id', handleUpdateProduct);
// DELETE /api/products/:id
router.delete('/:id', isAuthenticated, hasRole(['ADMIN', 'USER']), handleDeleteProduct);

export default router;
