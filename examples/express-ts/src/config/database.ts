import mongoose from "mongoose";

async function connectDb() {
  const uri = process.env.MONGO_DB_URI;

  try {
    await mongoose.connect(uri)

    console.log('Connected to database');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}


export default connectDb;
