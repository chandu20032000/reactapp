import  './App.css';
import Signup from './components/Auth/Signup/Signup';
import Login from './components/Auth/Login/Login';
import ListUser from './components/Admin/ListUsers';
import {BrowserRouter as Router  ,Route, Switch} from 'react-router-dom';
import Home from './components/Home';


function App() {
  return (
    
    <div className ='App'> 
    <Router >
        <Switch>
        <Route exact path ='/' component ={Login}/>
         <Route path ="/signup" component={Signup}/>
         <Route path ="/admin/listusers" component={ListUser}/>
         <Route path ="/home" component={Home}/>
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
