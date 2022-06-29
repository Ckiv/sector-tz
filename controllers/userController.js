import UserService from "../services/userService.js";

class UserController{
    async create(req, res) {
        try {
            const {name, email, password} = req.body;
            const user = await UserService.create(name, email, password);
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new UserController();