import { User, Auth } from "../model/model.js"

class UserService {
    async create (name, email, password) {
        const date = new Date();
        const user = await User.create({name: name, dateregister: date})
            .then(user=>{
                Auth.create({email: email, password: password})
                    .then(auth=>{
                        user.setAuth(auth).catch(err=>console.log(err));
                    })
            });
        return user;
    }
    async update(id, name, lastname, gender, email) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const user =  await User.update({ name: name, lastname: lastname, gender: gender }, {
            where: {
                id: id
            }
        });
        const idUser = await User.findByPk(id);
        const auth =  await Auth.update({ email: email}, {
            where: {
                id: idUser.authId
            }
        });
        return user;
    }
    async getOne(id) {
        if (!id) {
            throw new Error('не указан ID')
        }
        const user = await User.findByPk(id);
        const auth =  await Auth.findByPk(user.authId)
        user.dataValues.email = auth.email;
        user.dataValues.password = auth.password;
        return user;
    }
}

export default new UserService();
