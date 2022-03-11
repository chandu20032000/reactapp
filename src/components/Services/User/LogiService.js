import axios from 'axios';
const USER_SERVICE_API="http://localhost:8080/login";
class LoginUser  {
    authUser(user)
    {
        return axios.post(USER_SERVICE_API,user);
    }
   
}
export default new LoginUser()