import axios from "axios";
import { useCookies } from 'vue3-cookies';
const { cookies } = useCookies()

function applyToken() {
    let token = cookies.get('VerifiedUser')
    if(token) {
        axios.defaults.headers = {
            Authorization: `${token}`
        }
    }
}
function getRole() {
    if (cookies.isKey('VerifiedUser')) {
        let token = cookies.get('VerifiedUser');
        let user = JSON.parse( atob( token.split('.')[1] ) )
        return {
            userID: user.userID,
            userRole: user.userRole
        }
    }
}
export {
    applyToken, getRole
}