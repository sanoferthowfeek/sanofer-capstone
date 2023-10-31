import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipeRouter} from "./routes/recipe.js";
import  { isAuthorized} from "./middlewares/auth.js";
import dotenv from "dotenv";
import { dataBaseConnection } from "./db.js";
import cors from "cors";

//configure env variables
dotenv.config();

//server setup
const app = express();
const PORT = process.env.PORT ;

//middlewares
app.use(express.json());
app.use(cors());

//database connection
dataBaseConnection();

//routes
app.use("/api/user",userRouter);
app.use("/api/recipes",isAuthorized,recipeRouter);

//listen the server
app.listen(PORT, () => {
    console.log("Server is running on PORT", PORT);
  });