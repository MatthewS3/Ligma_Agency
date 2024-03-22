import  express  from "express";
import bodyParser from "body-parser";
import { Cart } from "../model/Cart.js";
import { verifyAToken } from "../middleware/UserAuthentication.js";

const cartRouter = express.Router()

cartRouter.get('/', verifyAToken, (req, res) => {
    try {
        Cart.fetchCart(req, res)
    } catch (e) {
        res.json ({
            status: res.statusCode,
            msg: "An ERROR Occured When Attempting to Fetch Your Cart"
        })
    }
})
cartRouter.delete('/delete/:id', bodyParser.json(), verifyAToken, (req, res) => {
    try {
        Cart.deleteAgent(req, res)
    } catch (e) {
       res.json({
        status: res.statusCode,
        msg: "An ERROR occured when trying to remove this item from the cart"
       })
    }
})
cartRouter.delete('/delete', bodyParser.json(), verifyAToken ,(req, res) => {
    try {
        Cart.clearCart(req, res)
    } catch (e) {
        res.json ({
            status: res.statusCode,
            msg: "Could Not Clear Cart"
        })
    }
})
cartRouter.post('/add',  bodyParser.json(), verifyAToken, (req, res) => {
    try {
        Cart.addToCart(req, res)
    } catch (e) {
        res.json({
            status: res.statusCode,
            msg: "An ERROR occured when adding this Agent to cart"
        })
    }
})
export {
    cartRouter,
    express
}