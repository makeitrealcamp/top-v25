import { Router, Request, Response } from 'express';

const router = Router();

// GET /api/healthcheck
router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Your server is Running!!' });
});

export default router;
