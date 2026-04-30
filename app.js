import express from "express"
import cors from "cors"

import apiUrls from "./routes/index.js"
import { isReqHasData } from "./utils/userDataValidation.js"
export const app = express()


app.use(express.json())
app.use(cors())


app.use("/api",isReqHasData,apiUrls)





