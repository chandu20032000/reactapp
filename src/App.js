import  './App.css';
import Signup from './components/Auth/Signup/Signup';
import Login from './components/Auth/Login/Login';
import ListUser from './components/Admin/ListUsers';
import {BrowserRouter as Router  ,Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import UserManagement from './components/Admin/UserManageMent';
import Dashboard from './components/Admin/Dashboard';
import EditUser from './components/Admin/EditUser';

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
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
