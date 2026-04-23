import { Router } from "express";
import futureUrls from "./order.future.routes.js"
import pastUrls from "./order.past.routes.js"
import cancelledUrls from "./order.cancelled.routes.js"

const router = Router();

router.use("/future",futureUrls)

router.use("/past",pastUrls)

router.use("/cancelled",cancelledUrls)

export default router