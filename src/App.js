import  './App.css';
import Signup from './components/Auth/Signup/Signup';
import Login from './components/Auth/Login/Login';
import {BrowserRouter as Router  ,Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import UserManagement from './components/Admin/UserManageMent';
import Dashboard from './components/Admin/Dashboard';
import EditUser from './components/Admin/EditUser';
import ViewProduct from './components/Admin/ViewProduct'
import EditProduct from './components/Admin/EditProduct';
import AddProduct from './components/Admin/AddProduct';
import ViewCart from './components/Cart/ViewCart';
import Orders from './components/Orders/Orders';
import AdminOrders from './components/Admin/AdminOrder';

function App() {
  return (
    
    <div className ='App'> 
    <Router >
        <Switch>
        <Route exact path ='/' component ={Login}/>
         <Route path ="/signup" component={Signup}/>
         
         <Route path ="/home" component={Home}/>
         <Route path ="/admin" component={UserManagement}/>
         <Route path ="/admin-home" component={Dashboard}/>
         <Route path ="/admin-edituser/:email" component={EditUser}/>
         <Route path ="/addProduct" component={ViewProduct}/>
         <Route path ="/addProduct-Editproduct/:id" component={EditProduct}/>
         <Route path ="/addProduct-addProduct" component={AddProduct}/>
         <Route path ="/cart" component={ViewCart}/>
         <Route path ="/admin-orders" component={AdminOrders}/>
         <Route path ="/orders" component={Orders}/>
        
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
