import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"


class DeleteTagService {
    async execute(tag_id: string){
        const tagsRepository = getCustomRepository(TagsRepositories)
        const tag = await tagsRepository.findOne(tag_id)

        if (!tag){
            throw new Error("Incorrect tag_id!")
        }

        await tagsRepository.createQueryBuilder().delete().from("tags").where("id = :id", { id: tag_id }).execute()

        return { message: "Deleted Tag!" }
    }
}

export { DeleteTagService }