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
      if (err) console.log(err);
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
      if (err) throw err;
      res.json({
        status: res.statusCode,
        results,
      });
    });
  }
  async createUser(req, res) {
    // PAYLOAD
    let data = req.body;
    data.userPassword = await hash(data?.userPassword, 10);
    let user = {
      userEmail: data.userEmail,
      userPassword: data.userPassword,
    };
    const qry = `
        INSERT INTO Users
        SET ?;
        `;
    db.query(qry, [data], (err) => {
      if (err) {
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
  async deleteUser(req, res) {
    const qry = `
        delete from Users
        WHERE userID = ${req.params.id};
        `;
    db.query(qry, [req.body], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The User has been deleted",
      });
    });
  }
  async updateUser(req, res) {
    const data = req.body;
    if (data?.userPassword) {
      data.userPassword = await hash(data?.userPassword, 10);
    }
    const qry = `
        update Users
        SET ?
        WHERE userID = ${req.params.id}
        `;
    db.query(qry, [data], (err) => {
      if (err) throw err;
      res.json({
        status: res.statusCode,
        msg: "The User's Details Have Been Updated",
      });
    });
  }

  login(req, res) {
    const { userEmail, userPassword } = req.body;
    const qry = `
                SELECT userID, userFirstName, userLastName,
                userEmail, userPassword, userContact,
                userRole
                FROM Users
                WHERE userEmail = '${userEmail}';
        `;
    db.query(qry, async (err, result) => {
      if (err) throw err;
      if (!result?.length) {
        res.json({
          status: statusCode,
          msg: "Wrong Email Address or Password Provided",
        });
      } else {
        const validPass = await compare(userPassword, result[0].userPassword);
        if (validPass) {
          const token = createToken({
            userEmail,
            userPassword,
          });
          res.json({
            status: res.statusCode,
            msg: "You're Logged In",
            token,
            result: result[0],
          });
        } else {
          res.json({
            status: res.statusCode,
            msg: "Please Provide the Correct Password",
          });
        }
      }
    });
  }
}
export { 
    Users 
};
