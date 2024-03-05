import { connection as db } from "../config/index.js";
import { hash } from "bcrypt";
import { createToken } from "../middleware/UserAuthentication.js";

class Users {
    fetchUsers(req, res) {
        const qry = `
        SELECT userID, userFirstName, userLastName,
        userEmail, userPassword, userContact,
        userRole
        FROM Users;
        `;
        db.query(qry, (err, results) => {
            if(err) throw err;
            res.json({
                status: res.statusCode,
                results,
            });
        });
    }
    fetchUser(req, res) {
        const qry = `
        SELECT userID, userFirstName, userLastName,
        userEmail, userPassword, userContact,
        userRole
        FROM Users;
        WHERE userID = ${req.params.id};
        `;
        db.query(qry, (err, results) => {
            if(err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
    async createUser(req, res) {
        // PAYLOAD
        let data = req.body;
        data.userPassword = await hash(data.userPassword, 10);
        let user = {
            userEmail: data.userEmail,
            userPassword: data.userPassword
        };
        const qry = `
        INSERT INTO Users
        SET ?;
        `;
        db.query(qry, [data], (err) => {
            if(err) {
                res.json({
                    status: res.statusCode,
                    msg: "This Email Already Exists",
                });
            } else {
                // CREATE A TOKEN
                let token = createToken(user);
                res.json({
                    status: res.statusCode,
                    token,
                    msg: "You Are Now Registered",
                });
            }
        });
    }
}
export {
    Users
}