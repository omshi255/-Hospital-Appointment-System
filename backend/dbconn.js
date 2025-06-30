import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    console.log("MONGO_URI:", process.env.MONGO_URI);
    const connection = await mongoose.connect(`${process.env.MONGO_URI}`);

    console.log(
      `mongo db connected succesfully !! DB HOST:${connection.connection.host}`
    );
  } catch (error) {
    console.log("mongo db conncetion error ", error);
    process.exit(1);
  }
};
export default connectDB;

