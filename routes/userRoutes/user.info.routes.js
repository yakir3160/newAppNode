import { Router } from "express";
import {actionUserInfoById} from "../../controllers/user.info.controller.js"

const router = Router();

router.use("/:id",actionUserInfoById)

export default router