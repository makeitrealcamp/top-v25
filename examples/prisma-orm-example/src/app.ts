import express from "express";

import configExpress from "./config/express";
import routes from "./routes";

const app = express();

const port = process.env.PORT || 8080;

configExpress(app);
// Setup routes
routes(app);

app.listen(port, () => {
  console.info(`Server is running on port ${port}!!`);
});
