import { connection as db } from "../config/index.js"
import { config } from "dotenv";

config();

class Cart {
    fetchCart(req, res) {
        try {
            const qry = `
            SELECT c.agentImage, c.orderID, a.agentID, a.agentRole,
            FROM Cart c
            LEFT JOIN Agents a ON a.agentID
            WHERE userID = ?
            group by a.agentID
            `;
            db.query(qry, [req.body.userID], (err, result) => {
                if (err) throw err;
                res.json ({
                    status: res.statusCode,
                    result,
                });
            });
        } catch (e) {
            res.json ({
                status: res.statusCode,
                msg: "There was an ERROR when fetching your cart. Please try again later.",
            });
        }
    }
    async deleteAgent(req, res) {
        const qry = `
        DELETE FROM Cart
        WHERE orderID = ${req.params.id};
        `;
        db.query(qry, [req.body], (err) => {
            if (err) throw err;
            res.json ({
                status: res.statusCode,
                msg: "This Agent was Deleted",
            });
        });
    }
    async clearCart(req, res) {
        const qry = `
        DELETE FROM Cart
        WHERE userID = ?;
        `
        db.query(qry, [req.body.userID], (err) => {
            if (err) throw err;
            res.json({
                status: statusCode,
                msg: "You Have Cleared the Cart",
            });
        });
    }
    async addToCart(req, res) {
        const qry = `
        INSERT INTO Cart
        SET ?
        `;
        db.query(qry, [req.body], (err) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                msg: "Added To Cart"
            });
        });
    }
}
export {
    Cart
};