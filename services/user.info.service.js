
import { userDal } from "../dal/user.info.dal.js"


export const userInfoService = {
    getUserInfoById: async (userId) => {
        try {
            const response = await userDal.getUserInfoById(userId)

            return {
                status: 200,
                name: response.name,
                email: response.email
            }
        } catch (error) {

        }
    },
    postUserInfoById: async (userId, userData) => {
        try {
            const response = await userDal.postUserInfoById(userId)

            return {
                status: 201,
                message:"User is saved"
            }
        } catch (error) {

        }
    },
    updateUserInfoById: async (userId, userData) => {

        try {
            const response = await userDal.updateUserInfoById(userId)

            return {
                status: 200,
                message:"User is updated"
            }
        } catch (error) {

        }

    },
    deleteUserInfoById: async (userId) => {

        try {
            const response = await userDal.deleteUserInfoById(userId)

            return {
                status: 204,
            }
        } catch (error) {

        }
    },
}
