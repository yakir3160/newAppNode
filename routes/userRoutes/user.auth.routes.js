import { Router } from "express";
import { logUser,registerUser,resetUserPassword,updateUserPassword } from "../../controllers/user.auth.controller.js";
import{verifyToken} from "../../utils/token.js"
const router = Router();


//POST
router.post('/login',logUser)
router.post('/register',registerUser)
router.post("/resetPassword",resetUserPassword) 

//PATCH
router.patch('/:id/updatePassword',verifyToken,updateUserPassword)




export default router