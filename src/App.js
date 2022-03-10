import  './App.css';
import Signup from './components/Auth/Signup/Signup';
import Login from './components/Auth/Login/Login';
import {BrowserRouter as Router  ,Route, Switch} from 'react-router-dom';


function App() {
  return (
    
    <div className ='App'> 
    <Router >
        <Switch>
        <Route exact path ='/' component ={Login}/>
         <Route path ="/sign-up" component={Signup}/>
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
