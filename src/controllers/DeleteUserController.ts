import { Request, Response } from "express"
import { DeleteUserService } from "../services/DeleteUserService"


class DeleteUserController {
    async handle(request: Request, response: Response){
        const { user_id } = request
        const deleteUserService = new DeleteUserService()

        const result = await deleteUserService.execute(user_id)

        return response.json(result)
    }
}

export { DeleteUserController }