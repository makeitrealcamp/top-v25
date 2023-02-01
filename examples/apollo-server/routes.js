import { expressMiddleware } from '@apollo/server/express4';

import context from './graphql/context.js';
import helloworld from './api/helloworld/index.js';

const options = {
  context,
}

function routesConfig(app, graphqlServer) {
  // Rest API
  app.use('/api/helloworld', helloworld);

  // GraphQL
  app.use('/graphql', expressMiddleware(graphqlServer, options));
}

export default routesConfig;
