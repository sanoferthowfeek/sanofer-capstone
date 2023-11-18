import { User } from "../models/user.js"
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import {client} from '../redis.js'
dotenv.config();

export async function getUserByEmail(request) {
try {
    console.log(request.body);
    const user =  await User.findOne({
email:request.body.email,
    });
    console.log(user);
    return user;
} catch (error) {
    console.log(error);
}
}

export function getUserById(id) {
    return User.findById(id).select("_id username email");
}

export function generateToken(id){
    return jwt.sign({id},process.env.SECRET_KEY);
}
