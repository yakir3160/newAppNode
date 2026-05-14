import jwt from "jsonwebtoken"
import { jwtSecret } from "../config/index.js";

export const creatToken = async (payload, options) => {
    try {
        const token = await jwt.sign(payload, jwtSecret, options)     
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

        await jwt.verify(token, jwtSecret)
        next()
    } catch (error) {
        res.status(error.status).send(error.message)
    }


}
