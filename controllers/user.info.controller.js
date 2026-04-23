

import {userService} from "../services/user.info.service.js"

export const actionUserInfoById = async (req, res) => {
    try {
        const { id: userId } = req.params
        let response
        switch (req.method) {
            case "DELETE":
                response = await userService.deleteUserInfoById(userId);
            case "POST":
                response = await userService.postUserInfoById(userId);
            case "PUT":
                response = await userService.updateUserInfoById(userId);
            default:
                response = await userService.getUserInfoById(userId);
        }
        res.status(200).json(response)
    } catch (error) {
        res.status(error.status || 500).send(error.message)
    }

}

