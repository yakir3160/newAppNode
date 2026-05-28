import { hashPassword, comparePasswords } from "../utils/encrypt.js"
import { creatToken } from "../utils/token.js"
import { userAuthDal } from "../dal/user.auth.dal.js"
import { cleanFieldsFromObj } from "../utils/dataSnitization.js"
import { v4 as uuid4 } from "uuid"

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

            return {
                status: 200,
                headers: {
                    token: await creatToken({ userId: user.id, role: user.role }, { expiresIn: '35d' })
                },
                data: await cleanFieldsFromObj(["password", "role"], user)
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
            const user = await userAuthDal.registeUser({
                ...userAuthData,
                password: await hashPassword(userAuthData.password),
                id: uuid4()
            })

            return {
                status: 200,
                headers: {
                    token: await creatToken({ id: user.id, role: user.role }, { expiresIn: '35d' })
                },
                data: await cleanFieldsFromObj(["password", "role"], user)
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
