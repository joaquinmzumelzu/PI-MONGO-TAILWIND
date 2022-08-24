import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css'
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';

function App() {

  return (
    <BrowserRouter>

     <Switch>
       <Route exact path='/'>
        <div className='App2'>
          <Nav/>
          <Home/>
        </div>
       </Route>
     </Switch>

     {/* ----------------------------------------------------------- */} 

   </BrowserRouter>
     
  )
}

export default App
