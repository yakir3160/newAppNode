import { hashPassword, comparePasswords } from "../utils/encrypt.js"
import { creatToken } from "../utils/token.js"
import { userAuthDal } from "../dal/user.auth.dal.js"
export const userAuthService = {
    logUser: async (username, rawPassword) => {
        try {
            const user = await userAuthDal.getUserByUsername(username, true)
            console.log(user);
            if (! await comparePasswords(rawPassword, user.password) || !user)
                throw {
                    status: 400,
                    message: "username or password incorrect"
                }
            console.log("comparePasswords success");


            const token = await creatToken({ userId: user.id, role: user.role }, { expiresIn: '35d' })
            const { password, role, ...cleanData } = user;

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
            if (!userAuthData.password)
                throw {
                    status: 400,
                    message: "Password is reqired"
                }
            const hashedPassword = await hashPassword(userAuthData.password)
            
            const user = await userAuthDal.registerNewUser({ ...userAuthData, password: hashedPassword })

            const token = await creatToken({ userId: user.id, role: user.role }, { expiresIn: '35d' })
            const { password, role, ...cleanData } = user;

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
