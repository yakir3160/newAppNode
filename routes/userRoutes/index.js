import { Router } from "express";
import userAuthUrls from "./user.auth.routes.js"
import  userInfoUrls from './user.info.routes.js'
import { verifyToken } from "../../utils/token.js";

const router = Router();

router.use("/auth",userAuthUrls)
router.use("/info",userInfoUrls)
export default router