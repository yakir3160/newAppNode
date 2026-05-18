import jwt from "jsonwebtoken"
import { jwtSecret } from "../config/index.js";

export const creatToken = async (payload, options) => {
    try {
        console.log("creatToken started");
        
        const token = await jwt.sign(payload, jwtSecret, options)     
           console.log("creatToken ended " + token);
        return token
    } catch (error) {
        return error
    }
}
export const verifyToken = async (req, res, next) => {
    try {

        if (!req.headers.Authorization)
            throw {
                status: 401,
                message: "Token is requred for this action"
            }
        const token = req.headers.Authorization
        console.log(token, jwtSecret);

      const payload =  await jwt.verify(token, jwtSecret)
        req.Authorization = payload;
        next()
    } catch (error) {
        res.status(error.status).send(error.message)
    }

}

