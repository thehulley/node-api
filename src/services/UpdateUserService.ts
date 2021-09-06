import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories"
import { hash } from "bcryptjs"
import { classToPlain } from "class-transformer"

interface IUserUpdate{
    user_id: string
    name?: string
    email?: string
    password?: string
}


class UpdateUserService{
    async execute({ user_id, name, email, password } : IUserUpdate){
        const usersRepository = getCustomRepository(UsersRepositories)
        const update = {}

        if (name){
            update["name"] = name
        }

        if (email){
            update["email"] = email
        }

        if (password){
            update["password"] = await hash(password, 8)
        }

        const emailExists = await usersRepository.findOne({
            where: {
                email: email
            }
        })

        if (emailExists){
            throw new Error("Email in Use!")
        }

        await usersRepository.createQueryBuilder().update("users").set(update).where("id = :id", { id: user_id }).execute()

        const user = usersRepository.findOne(user_id)

        return classToPlain(user)
    }
}

export { UpdateUserService }