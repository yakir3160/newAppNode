import { Router } from "express";
import { logUser,registerUser,resetUserPassword,updateUserPassword } from "../../controllers/user.auth.controller.js";

const router = Router();


//POST
router.post('/login',logUser)
router.post('/register',registerUser)
router.post("resetPassword",resetUserPassword) 

//PATCH
router.patch('updatePassword',updateUserPassword)




export default router