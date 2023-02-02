import { Router } from "express";

import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getProductByIdController,
  updateProductController,
} from "./product.controller";

const router = Router();
// RESTful API

// GET /api/products
router.get("/", getAllProductsController);
// GET /api/products/:id
router.get("/:id", getProductByIdController);
// POST /api/products
router.post("/", createProductController);
// PATCH /api/products/:id
router.patch("/:id", updateProductController);
// DELETE /api/products/:id
router.delete("/:id", deleteProductController);

export default router;
