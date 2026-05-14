import { HashPassword, comparePasswords } from "../utils/encrypt.js"
import { creatToken } from "../utils/token.js"
export const userAuthService = {
    logUser: async (username, password) => {
        try {
            // להביא משתמש לפי שם המשתמש (כולל הסיסמא שלו )
            // const result = userAuthDal.logUser(username)
            // לשלוח את הסיסמא המוצפנת מבסיס הנתונים עם הסיסמא שקיבלתי ולהשוות בניהן 
            // if (!comparePasswords(password, result.password) || result == {})
            //     throw {
            //         status: 401,
            //         message: "username or password in not correct"
            //     }
            const result = {
                id: "13dc21dsc",
                password: "1sd6cv51sdc"
            }

            // ליצור טוקן התחברות 
            const token = await creatToken({ userId: result.id }, { expiresIn: '35d' })
            
            

            // + טוקן  לנקות את הסיסמא מהאובייקט משתמש ולהחזיר אותו 
            const { password, ...cleanData } = result;


            // 3. מוסיפים את הטוקן לאובייקט הנקי
            cleanData.token = token;

            return {
                status: 200,
                cleanData
            }
        } catch (error) {
            return {
                status: 400,
                message:"loguser error"
            }
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
