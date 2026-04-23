import { Router } from "express";


const router = Router();

router.get("/suits",(req,res) =>{
    res.send("Suitup")
})


export default router