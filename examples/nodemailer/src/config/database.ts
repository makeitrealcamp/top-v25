import mongoose from "mongoose";

import log from '../logger'

async function connectDb() {
  const uri = process.env.MONGO_DB_URI;

  if (!uri) {
    throw new Error("MONGO_DB_URI is not defined");
  }

  try {
    await mongoose.connect(uri)

    log.info('Connected to database');
  } catch (error) {
    log.fatal(error);
    process.exit(1);
  }
}


export default connectDb;
