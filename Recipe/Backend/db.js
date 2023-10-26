import mongoose from "./mongoose";
const MONGO_URL = 'mongodb+srv://sanofer:guvi1234@cluster0.htinaip.mongodb.net/?retryWrites=true&w=majori';

 export function dataBaseConnection(){
  const params = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(MONGO_URL, params);
    console.log(" MongoDB Connected");
  } catch (error) {
    console.log("MongoDB Connection Failed", error);
  }
}



  