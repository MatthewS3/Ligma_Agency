import { express } from "express"
import bodyParser from "body-parser"
import { users } from "../model/index.js"
import { verifyAToken } from "../middleware/UserAuthentication.js"
const userRouter = express.Router()
// FETCH USERS
userRouter.get('/', (req, res) => {
    try {
        users.fetchUsers(req, res)
    }catch(e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to Retrieve Users"
        })
    }
})
// FETCH USER
userRouter.get('/:id', (req, res) => {
    try {
        users.fetchUser(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to Retrieve User"
        })
    }
})
// ADD A USER
// ENSURE THE DATA BEING SENT IS IN JSON. POST, PUT AND PATCH ALL NEED BODY-PARSER MIDDDLEWARE
userRouter.post('/register', bodyParser.json(), (req, res) => {
    try {
        users.createUser(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to Add a New user"
        })
    }
})

import bcrypt from 'bcryptjs';
import { DataTypes } from 'sequelize';

const User = (sequelize) => {
    const model = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            unique: true,
            primaryKey: true,
            field: 'id'
        },
        fullname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            },
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [7, 42],
            },
        },
    });

    model.beforeCreate(async (user) => {
        const saltRounds = 10;
        user.password = await bcrypt.hash(user.password, saltRounds);
    });

    model.prototype.validatePassword = async function (password) {
        return await bcrypt.compare(password, this.password);
    };

    return model;
};

export default User;
export {
    userRouter,
    express
}