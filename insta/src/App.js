import React from 'react';
import './app.css';
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Signup from './components/signup';
import Login from './components/login';
import EditProfile from "./components/components01/editProfile"
import Confirmation from'./components/confirmation';
import About from './components/components01/about'
function App() {
  return (
    <Router >
    <div className="App">
      
        
        <Switch>
      <Route path="/signup">
     <Signup />
     </Route>
     <Route path="/login">
     <Login />
      </Route>
      <Route path="/confirmation">
     <Confirmation />
      </Route>
      <Route path ="/about">
        <About />
      </Route>
      <Route path ="/editprofile">
        <EditProfile />
      </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
