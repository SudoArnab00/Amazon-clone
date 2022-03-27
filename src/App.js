import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
// The main app page

function App() {
  return (
    <Router>
    <div className="app"> 
       <Switch>

         <Route path='/Checkout'>
           <Header />
           <Checkout />
         </Route>

         <Route path='/Login'>
           <Header />
           <Login />
           <Home/>
         </Route>

         {/* Default case */}
         <Route path='/'>
           <Header />
           <Home />
         </Route>

       </Switch>
    </div>
    </Router>
  );
}

export default App;