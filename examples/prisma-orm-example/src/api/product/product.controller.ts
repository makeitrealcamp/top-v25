import { Request, Response, NextFunction } from "express";

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "./product.services";

export async function getAllProductsController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
}

export async function getProductByIdController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const product = await getProductById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.json(product);
  } catch (error) {
    next(error);
  }
}

export async function createProductController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const product = await createProduct(req.body);
    res.json(product);
  } catch (error) {
    next(error);
  }
}

export async function updateProductController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const product = await updateProduct(id, req.body);
    res.json(product);
  } catch (error) {
    next(error);
  }
}

export async function deleteProductController(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const product = await deleteProduct(id);
    res.json(product);
  } catch (error) {
    next(error);
  }
}
