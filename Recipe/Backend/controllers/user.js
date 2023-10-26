import { User } from "../models/user.js"
import jwt from "jsonwebtoken";
const SECRET_KEY = 'asfghjklmno12345asdf';

export function getUserByEmail(request) {
    return User.findOne({
email:request.body.email,
    });
}



export function generateToken(id){
    return jwt.sign({id},SECRET_KEY);
}
