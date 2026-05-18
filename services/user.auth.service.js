import {hashPassword, comparePasswords } from "../utils/encrypt.js"
import { creatToken } from "../utils/token.js"
import { userAuthDal } from "../dal/user.auth.dal.js"
export const userAuthService = {
    logUser: async (username,rawPassword) => {
        try {
            const user = await userAuthDal.getUSerByUsername(username, true)
            console.log(user);        
            if (! await comparePasswords(rawPassword, user.password) || !user)
                throw {
                    status: 400,
                    message: "username or password incorrect"
                }
           console.log("comparePasswords success");
           
            
            const token = await creatToken({ userId: user.id, role: user.role }, { expiresIn: '35d' })
            const { password,role, ...cleanData } = user;

            return {
                status: 200,
                headers: {
                    token: token
                },
                data: cleanData
            }

        } catch (error) {
            return error 
            
        }
    },
    registerUser: async (userAuthData) => {
        try {
            return {
                status: 201,
                message: "User is registered",
                userAuthData
            }
        } catch (error) {

        }
    },
    resetUserPassword: async (userAuthData) => {

        try {


            return {
                status: 200,
                message: "User password is reseted",
                userAuthData
            }
        } catch (error) {

        }

    },
    updateUserPassword: async (userAuthData) => {

        try {


            return {
                status: 200,
                message: "User password is updated",
                userAuthData
            }
        } catch (error) {

        }
    },
}
