import { userAuthService } from "../services/user.auth.service.js"



export const logUser = async (req, res) => {
    try {
        const { username , password } = req.body
        const response = await userAuthService.logUser( username , password)
        const { status, ...cleanData } = response
        res.status(response.status || 200).json(cleanData)
    } catch (error) {
        res.status(error.status).json(error)
    }
}

export const registerUser = async (req, res) => {
    try {
        const { body: userAuthData } = req
        const response = await userAuthService.registerUser(userAuthData)
        const { status, ...cleanData } = response

        res.status(response.status || 200).json(cleanData)
    } catch (error) {
        res.status(error.status).json(error)
    }
}
export const resetUserPassword = async (req, res) => {
    try {
        const { body: userAuthData } = req
        const response = await userAuthService.resetUserPassword(userAuthData)
        const { status, ...cleanData } = response
        res.status(response.status || 200).json(cleanData)
    } catch (error) {
        res.status(error.status).json(error)
    }
}
export const updateUserPassword = async (req, res) => {
    try {
        const { body: userAuthData } = req
        const response = await userAuthService.updateUserPassword(userAuthData)
        const { status, ...cleanData } = response
        res.status(response.status || 200).json(cleanData)
    } catch (error) {
        res.status(error.status).json(error)
    }
}