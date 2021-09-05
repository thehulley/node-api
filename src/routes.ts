import { Router } from "express"
import { ensureAdmin } from "./middlewares/ensureAdmin"
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated"
import { CreateUserController } from "./controllers/CreateUserController"
import { CreateTagController } from "./controllers/CreateTagController"
import { AuthenticateUserController } from "./controllers/AuthenticateUserController"
import { CreateComplimentController } from "./controllers/CreateComplimentController"
import { ListReceivedComplimentsController } from "./controllers/ListReceivedComplimentsController"
import { ListSentComplimentsController } from "./controllers/ListSentComplimentsController"
import { ListTagsController } from "./controllers/ListTagsController"
import { ListUsersController } from "./controllers/ListUsersController"


const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listSentComplimentsController = new ListSentComplimentsController()
const listReceivedComplimentsController = new ListReceivedComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()


router.post("/login", authenticateUserController.handle)
router.post("/users", createUserController.handle)
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post("/compliments", ensureAuthenticated, createComplimentController.handle)

router.get("/users/compliments/sent", ensureAuthenticated, listSentComplimentsController.handle)
router.get("/users/compliments/received", ensureAuthenticated, listReceivedComplimentsController.handle)
router.get("/tags", ensureAuthenticated, listTagsController.handle)
router.get("/users", ensureAuthenticated, ensureAdmin, listUsersController.handle)


export { router }