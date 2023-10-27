import jwt from "jsonwebtoken";
import { getUserById } from "../controllers/user.js";
const SECRET_KEY = 'asfghjklmno12345asdf';
//custom middleware
 const isAuthorized = async (req, res,  next) => {
    let token;
    if (req.header) {
        try {
            token = await req.headers["x-auth-token"];
            const decode = jwt.verify(token,SECRET_KEY);
            req.user = await getUserById(decode.id);
            next();
        } catch (error) {
            console.log(error);
    res.status(500).json({error:"Internal Server"});
        }
    }
 };

 export { isAuthorized};