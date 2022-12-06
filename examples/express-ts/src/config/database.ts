import mongoose from "mongoose";

async function connectDb() {
  const uri = process.env.MONGO_DB_URI;

  if (!uri) {
    throw new Error("MONGO_DB_URI is not defined");
  }

  try {
    await mongoose.connect(uri)

    console.log('Connected to database');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}


export default connectDb;
