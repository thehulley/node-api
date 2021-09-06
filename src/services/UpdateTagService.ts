import { getCustomRepository } from "typeorm"
import { TagsRepositories } from "../repositories/TagsRepositories"
import { classToPlain } from "class-transformer"


class UpdateTagService {
    async execute(tag_id: string, name: string){
        const tagsRepository = getCustomRepository(TagsRepositories)

        const tagExists = await tagsRepository.findOne(tag_id)

        if (!tagExists){
            throw new Error("Incorrect tag_id!")
        }

        await tagsRepository.createQueryBuilder().update("tags").set({ name: name }).where("id = :id", { id: tag_id }).execute()

        const tag = await tagsRepository.findOne(tag_id)

        return classToPlain(tag)
    }
}

export { UpdateTagService }