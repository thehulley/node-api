import { Request, Response } from "express"
import { UpdateUserService } from "../services/UpdateUserService"


class UpdateUserController {
    async handle(request: Request, response: Response){
        const { user_id } = request
        const { name, email, password } = request.body
        const updateUserService = new UpdateUserService()
        
        const result = await updateUserService.execute({ user_id, name, email, password})

        return response.json(result)
    }
}

export { UpdateUserController }