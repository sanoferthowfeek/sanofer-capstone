import { User } from "../models/user.js"

export function getUserByEmail(request) {
    return User.findOne({
email:request.body.email,
    });
}