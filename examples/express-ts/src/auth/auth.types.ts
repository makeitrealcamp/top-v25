import { Request } from 'express';

import { UserDocument } from '../api/user/user.model';

export interface AuthRequest extends Request {
  user?: UserDocument;
}
