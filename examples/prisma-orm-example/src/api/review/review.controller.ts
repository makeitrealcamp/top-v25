import { Request, Response } from "express";

import {
  createReview,
  deleteReview,
  getAllReviews,
  getReviewById,
  updateReview,
} from "./review.services";

export async function createReviewController(req: Request, res: Response) {
  const review = await createReview(req.body);
  res.json(review);
}

export async function getAllReviewsController(req: Request, res: Response) {
  const reviews = await getAllReviews();
  res.json(reviews);
}

export async function getReviewByIdController(req: Request, res: Response) {
  const { id } = req.params;
  const review = await getReviewById(id);
  res.json(review);
}

export async function updateReviewController(req: Request, res: Response) {
  const { id } = req.params;
  const review = await updateReview(id, req.body);
  res.json(review);
}

export async function deleteReviewController(req: Request, res: Response) {
  const { id } = req.params;
  const review = await deleteReview(id);
  res.json(review);
}
