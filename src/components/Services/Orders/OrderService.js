import axios from 'axios';
const USER_SERVICE_API="http://localhost:8080/orders";
const USER_SERVICE_API1="http://localhost:8080/admin/orders";

class OrderService  {
   getUserOrders(id)
   {
       return axios.post(USER_SERVICE_API+'/'+id)
   }
   getAdminOrders()
   {
       return axios.get(USER_SERVICE_API1)
   }
}
export default new OrderService()