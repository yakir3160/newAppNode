import {userDal} from "../dal/user.info.dal.js"


export const userService = {
    getUserInfoById: async (userId) => {
        try {
            const response = await userDal.getUserInfoById(userId)

            return {
                name: response.name,
                email:response.email
            }
        } catch (error) {

        }
    },
    postUserInfoById: (userId) => { },
    updateUserInfoById: (userId) => { },
    deleteUserInfoById: (userId) => { },
}
