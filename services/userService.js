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
}

export default new UserService();
