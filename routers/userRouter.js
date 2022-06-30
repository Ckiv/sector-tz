import Router from "express";
import UserController from "../controllers/userController.js";

const router = new Router();

router.post('/user/register', UserController.create);
router.put('/profile/:id', UserController.update);
router.get('/profile/:id', UserController.getOne);
router.get('/profiles', UserController.getAll);
export default router;