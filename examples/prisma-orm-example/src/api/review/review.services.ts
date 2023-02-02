import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export function getAllReviews() {
  return prisma.review.findMany();
}

export function getReviewById(id: string) {
  return prisma.review.findUnique({
    where: {
      id: id,
    },
  });
}

export async function createReview(input: any) {
  return prisma.review.create({
    data: {
      text: input.text,
      rating: parseInt(input.rating),
      Product: {
        connect: {
          id: input.productId,
        },
      },
    },
  });
}

export function updateReview(id: string, review: any) {
  return prisma.review.update({
    where: {
      id: id,
    },
    data: {
      text: review.text,
      rating: parseInt(review.rating),
    },
  });
}

export function deleteReview(id: string) {
  return prisma.review.delete({
    where: {
      id: id,
    },
  });
}
