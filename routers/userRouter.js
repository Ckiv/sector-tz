import Router from "express";
import UserController from "../controllers/userController.js";

const router = new Router();

router.post('/user/register', UserController.create);
export default router;