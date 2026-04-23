import { Router } from "express";
import prodUrls from "./productRoutes/index.js"
import userUrls from "./userRoutes/index.js"
import orderUrls from "./orderRoutes/index.js"

const router = Router();

router.use("/products",prodUrls)
router.use("/users",userUrls)
router.use('/orders',orderUrls)
export default router