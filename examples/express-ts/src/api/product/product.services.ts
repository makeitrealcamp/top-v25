import { DocumentDefinition, FilterQuery } from "mongoose";

import Product, { ProductDocument } from "./product.model";

export function getAllProducts() {
  return Product.find({})
}

export function getProductById(id: string) {
  return Product.findById(id)
    .populate({ path: 'createdBy', select: 'firstName lastName avatar' })
    .populate({ path: 'owner', select: 'firstName lastName avatar' });
    // .populate('createdBy');
}

export async function searchProduct(filter?: FilterQuery<ProductDocument>) {
  const products = filter ? await Product.find(filter) : await Product.find();
  return products;
}

export async function createProduct(
  input: DocumentDefinition<Omit<ProductDocument, 'createdAt' | 'updatedAt'>>,
) {
  return Product.create(input);
}

export function updateProduct(
  id: string,
  product: DocumentDefinition<Omit<ProductDocument, 'createdAt' | 'updatedAt'>>,
) {
  return Product.findByIdAndUpdate(id, product, { new: true });
}

export function deleteProduct(id: string) {
  return Product.findByIdAndRemove(id);
}
