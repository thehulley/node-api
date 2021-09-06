import { Request, Response } from "express"
import { DeleteTagService } from "../services/DeleteTagService"


class DeleteTagController {
    async handle(request: Request, response: Response){
        const { tag_id } = request.body
        const deleteUserService = new DeleteTagService()

        const result = await deleteUserService.execute(tag_id)

        return response.json(result)
    }
}

export { DeleteTagController }