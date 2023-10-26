import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import dotenv from "dotenv";
// import { dataBaseConnection } from "./db.js";

import cors from "cors";


//configure env variables
dotenv.config();

//server setup
const app = express();
const PORT = 8000 ;

//middlewares
app.use(express.json());
app.use(cors());

const MONGO_URL = 'mongodb+srv://sanofer:guvi1234@cluster0.htinaip.mongodb.net/?retryWrites=true&w=majori';


//database connection
// dataBaseConnection();

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

//routes
app.use("/api/user",userRouter);

//listen the server
app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
  });