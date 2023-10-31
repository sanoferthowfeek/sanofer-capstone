import mongoose from "mongoose";
const MONGO_URL = process.env.MONGO_URL;

 export function dataBaseConnection(){
  const params = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    'mongoose.connect(MONGO_URL,params)';
    console.log(" MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
  }
}



  