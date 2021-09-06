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
import { DeleteUserController } from "./controllers/DeleteUserController"
import { DeleteTagController } from "./controllers/DeleteTagController"
import { UpdateTagController } from "./controllers/UpdateTagController"
import { UpdateUserController } from "./controllers/UpdateUserController"


const router = Router()

const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listSentComplimentsController = new ListSentComplimentsController()
const listReceivedComplimentsController = new ListReceivedComplimentsController()
const listTagsController = new ListTagsController()
const listUsersController = new ListUsersController()
const deleteUserController = new DeleteUserController()
const deleteTagController = new DeleteTagController()
const updateTagController = new UpdateTagController()
const updateUserController = new UpdateUserController()


router.get("/users/compliments/sent", ensureAuthenticated, listSentComplimentsController.handle)
router.get("/users/compliments/received", ensureAuthenticated, listReceivedComplimentsController.handle)
router.get("/tags", ensureAuthenticated, listTagsController.handle)
router.get("/users", ensureAuthenticated, ensureAdmin, listUsersController.handle)

router.post("/login", authenticateUserController.handle)
router.post("/users", createUserController.handle)
router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post("/compliments", ensureAuthenticated, createComplimentController.handle)

router.put("/tags", ensureAuthenticated, ensureAdmin, updateTagController.handle)
router.put("/users", ensureAuthenticated, updateUserController.handle)

router.delete("/users", ensureAuthenticated, deleteUserController.handle)
router.delete("/tags", ensureAuthenticated, ensureAdmin, deleteTagController.handle)

export { router }