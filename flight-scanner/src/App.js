import React from 'react';

import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Trip from './components/Trip'

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
function App() {

 
  


  return (
    <div className="App">
      <Router>
      <nav>
        <h1>Vacation Planning</h1>
        <div>
          <NavLink exact to='/trip'>Plan your Trip</NavLink>
          <NavLink exact to='/'>Home</NavLink>
        </div>
      </nav>

      <Route exact path ='/' component={Home}/>
      <Route exact path ='/trip' render={props => <Trip/> }/>
      </Router>
    </div>
  );
}




export default App;
