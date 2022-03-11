import axios from 'axios';
const USER_SERVICE_API="http://localhost:8080/admin/users";
class ListUserService  {
    getUsers()
    {
        return axios.post(USER_SERVICE_API);
    }
   
}
export default new ListUserService()