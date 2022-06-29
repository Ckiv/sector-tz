import sequelize from "../config/db.js";
import { Sequelize, DataTypes, Model} from "sequelize";

const User = sequelize.define("user", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    lastname: {type: DataTypes.STRING},
    dateregister: {type: DataTypes.DATE},
    gender: {type: DataTypes.STRING},
    idauth: {type: DataTypes.INTEGER}
})

const Auth = sequelize.define("auth", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING}
})
User.belongsTo(Auth);
export {User, Auth}

