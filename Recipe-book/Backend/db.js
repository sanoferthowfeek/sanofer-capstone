import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

 export async function dataBaseConnection(){
  const params = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
   await mongoose.connect(MONGO_URL,params);
    console.log(" MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
  }
}



  