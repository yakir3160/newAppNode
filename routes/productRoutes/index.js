import { Router } from "express";
import BabyUrls from "./baby.routes.js"
import menUrls from "./men.routes.js"
import womenUrls from "./women.routes.js"

const router = Router();

router.use("/baby",BabyUrls)

router.use("/men",menUrls)

router.use("/woman",womenUrls)

export default router