import { Users } from "./Users.js"
import { Agents } from "./Agents.js"
import { Cart } from "./Cart.js"
// CREATE OBJECTS
let users = new Users()
let agents = new Agents()
let  cart = new Cart(users)
export {
    users,
    agents,
    cart
}