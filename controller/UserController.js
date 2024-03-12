import  express  from "express"
import bodyParser from "body-parser"
import { users } from "../model/index.js"
// import { verifyAToken } from "../middleware/UserAuthentication.js"
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
});
// FETCH USER
userRouter.get('/:id', (req, res) => {
    try {
        users.fetchUser(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to Retrieve a User"
        })
    }
});
// ADD A USER
// ENSURE THE DATA BEING SENT IS IN JSON. POST, PUT AND PATCH ALL NEED BODY-PARSER MIDDDLEWARE
userRouter.post('/addUser', bodyParser.json(), (req, res) => {
    try {
        users.createUser(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to Add a New User"
        })
    }
});
userRouter.delete('/deleteUser/:id', bodyParser.json(), (req, res) => {
    try {
        users.deleteUser(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "The User Has Been Deleted"
        })
    }
});
userRouter.patch('/updateUser/:id', bodyParser.json(), (req, res) => {
    try {
        users.updateUser(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "The User Has Been Updated"
        })
    }
})
userRouter.post('/login', bodyParser.json(), (req,res) => {
    try {
        users.login(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "Failed to Log In"
        })
    }
})
export {
    userRouter,
    express
};