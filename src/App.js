import React from 'react';
import './App.css';
import Users from './components/users/Users'
import Navbar from './components/partials/Navbar'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

function App() {
  
     return (
       <div className="App"> 
         <Navbar />
          <div class="container mt-2">
            < Users />
          </div>
     
        </div>
      );
  
}

export default App;
