import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();

import connectDb from './config/database';
import routes from './routes';
import configExpress from './config/express';

const app = express();

const port = process.env.PORT || 8080;

// Setup Express
configExpress(app);

// Connect to MongoDB
connectDb();

// Setup routes
routes(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
