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
    async update(req, res) {
        try {
            const {name, lastname, gender, email} = req.body;
            const id = req.params.id;
            const updateUser = await UserService.update(id, name, lastname, gender, email);
            return res.json(updateUser)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const user = await UserService.getOne(req.params.id)
            return res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getAll(req, res) {
        let {page} = req.query;
        try {
            const users = await UserService.getAll(page);
            return res.json(users)
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new UserController();