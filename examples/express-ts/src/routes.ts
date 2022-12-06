import { Application } from 'express';

import user from './api/user';
import product from './api/product';

function routes(app: Application): void {
  app.use('/api/users', user);
  app.use('/api/products', product);

}

export default routes;
