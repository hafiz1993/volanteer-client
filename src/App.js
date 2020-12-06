
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './Components/Layout/LandingPage';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import LogOut from './Components/Login/LogOut';
import Profile from './Components/Profile/Profile';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';


export const UserContext = createContext();





function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div>
       <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <BrowserRouter>
      <Switch>
        <Route  exact path='/'>
      <LandingPage></LandingPage>
      </Route>
      <Route path='/login'>
      <Login></Login>
      </Route>
      <Route path='/logout'> 
     <LogOut/>
      </Route>
      <PrivateRoute path='/register/:id'> 
     <Register></Register>
      </PrivateRoute>

      <PrivateRoute path='/profile'> 
      <Profile /> 
      </PrivateRoute>
      
      </Switch>
      </BrowserRouter>
      </UserContext.Provider>
    </div>

  );
}

export default App;
