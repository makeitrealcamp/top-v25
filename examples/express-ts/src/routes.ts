import { Application } from 'express';

import authLocal from './auth/local';
import user from './api/user';
import product from './api/product';

function routes(app: Application): void {
  app.use('/api/users', user);
  app.use('/api/products', product);

  // auth routes
  app.use('/auth/local', authLocal);
  // app.use('/auth/facebook', authFacebook);
  // app.use('/auth/google', authGoogle);
  // app.use('/auth/twitter', authTwitter);
  // app.use('/auth/github', authGithub);
}

export default routes;
