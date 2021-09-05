import { Request, Response, NextFunction} from "express"
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string
}


export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization

    if (!authToken){
        return response.status(401).end()
    }

    const [, token] = authToken.split(" ")

    try {
        const { sub } = verify(token, "0d2ee6d4da46bc6db53473efbf421395") as IPayload

        request.user_id = sub.toString()

        return next()
    } catch (err) {
        return response.status(401).end()
    }

    return next()
}