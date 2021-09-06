import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"


class DeleteUserService {
    async execute(user_id: string){
        const usersRepository = getCustomRepository(UsersRepositories)

        await usersRepository.createQueryBuilder().delete().from("users").where("id = :id", { id: user_id }).execute()

        return { message: "Deleted User!" }
    }
}

export { DeleteUserService }