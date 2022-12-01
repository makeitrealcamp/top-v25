import user from './api/user';

function routes(app) {
  app.use('/api/users', user);

}

export default routes;
