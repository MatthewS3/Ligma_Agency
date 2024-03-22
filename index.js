import { userRouter, express } from "./controller/UserController.js";
import { agentRouter } from "./controller/AgentController.js";
import { cartRouter }  from './controller/CartController.js';
import cookieParser from "cookie-parser";
import { errorHandling } from "./middleware/ErrorHandling.js";
import path from 'path'
import cors from 'cors'
import { config } from "dotenv";
import { cartRouter } from "./controller/CartController.js";
config()

const app = express()
const port = +process.env.PORT || 4000
// MIDDLEWARE
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update later to specific domain
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Acess-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Expose-Header", "Authorization");
    next();
})
app.use (
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieParser(),
    cors()
)
app.get('^/$|/Ligma_Agency', (req, res) => {
    res.status(200).sendFile(path.json(__dirname, './static/index.html'))
})
app.use('/users', userRouter)
app.use('/agents', agentRouter)
app.use('/cart', cartRouter)
app.use(errorHandling)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})