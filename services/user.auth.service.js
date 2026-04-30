
export const userAuthService = {
    logUser: async (userAuthData) => {
        try {
            

            return {
                status: 200,
                userAuthData
            }
        } catch (error) {

        }
    },
    registerUser: async (userAuthData) => {
        try {
            return {
                status: 201,
                message:"User is registered",
                userAuthData
            }
        } catch (error) {

        }
    },
    resetUserPassword: async (userAuthData) => {

        try {
           

            return {
                status: 200,
                message:"User password is reseted",
                userAuthData
            }
        } catch (error) {

        }

    },
    updateUserPassword: async (userAuthData) => {

        try {
     

            return {
                status: 200,
                 message:"User password is updated",
                userAuthData
            }
        } catch (error) {

        }
    },
}
