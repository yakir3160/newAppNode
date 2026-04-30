
import {userInfoService} from "../services/user.info.service.js"

export const actionUserInfoById = async (req, res) => {
    try {
        const { id: userId } = req.params
        const {body:userData} = req
        let response
        switch (req.method) {
            case "DELETE":
                response = await userInfoService.deleteUserInfoById(userId);
                break
            case "POST":
                response = await userInfoService.postUserInfoById(userId,userData);
                break
            case "PUT":
                response = await userInfoService.updateUserInfoById(userId,userData);
                break
            default:
                response = await userInfoService.getUserInfoById(userId);
        }
        const  {status,...cleanData} = response
        res.status(response.status || 200).json(cleanData)
    } catch (error) {
        res.status(error.status || 500).send(error.message)
    }

}

