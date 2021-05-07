import React from 'react';
import logo from './logo.svg';

import './App.css';
import Welcome from './components/Welcome'
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Welcome/>

          </Route>
          <Route path="/admin">
            <Header/>
            
          </Route>
          
          
          <Route path="/:code">

            <Main/>
          </Route>
          

        </Switch>
      </Router>
      

      
    
    </div>
  );
}
export default App;
