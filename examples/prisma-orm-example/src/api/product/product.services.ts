import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function getAllProducts() {
  return prisma.product.findMany();
}

export function getProductById(id: string) {
  return prisma.product.findUnique({
    where: {
      id: id,
    },
  });
}

export async function createProduct(input: any) {
  return prisma.product.create({
    data: {
      name: input.name,
      description: input.description,
      price: parseInt(input.price),
    },
  });
}

export function updateProduct(id: string, product: any) {
  return prisma.product.update({
    where: {
      id: id,
    },
    data: {
      name: product.name,
      description: product.description,
      price: parseInt(product.price),
    },
  });
}

export function deleteProduct(id: string) {
  return prisma.product.delete({
    where: {
      id: id,
    },
  });
}

// const products = await prisma.product.findMany({
//   where: {
//     price: {
//       gt: 4000,
//       lte: 15000,
//     },
//   },
// });
// const products = await prisma.product.findMany({
//   select: {
//     name: true,
//     reviews: {
//       select: {
//         text: true,
//         rating: true,
//       },
//     },
//   },
// });
