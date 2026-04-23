import express from "express"
import cors from "cors"
import "dotenv/config"
import apiUrls from "./routes/index.js"

const app = express()
const port =  process.env.PORT

app.use(express.json())
app.use(cors())


app.use("/api",apiUrls)

app.listen(port,()=>{
    console.log(`Server is running in http://localhost:${port}`);
   
})



