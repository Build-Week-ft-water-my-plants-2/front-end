import "./App.css"
import React, { useState, useEffect } from 'react'
import { Link, Route, Switch} from 'react-router-dom';
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login'
import styled from "styled-components";

const Bttn = styled.div`
display: flex;
flex-direction: row-reverse;
`


function App() {
  
  
  return(
    <div className= "App">
      <nav> 
         
        <div className= "buttons">
        <Bttn> 
          <Link to="/">
          <button className="home"> Home </button> 
          </Link>
          <Link to="/sign-up">
          <button className="sign-up"> Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="login"> Login </button>
        </Link>
        </Bttn> 
        </div>
        
      </nav>
      <Switch>
        <Route exact path = "/">
          <About/>
        </Route>
        <Route path = "/sign-up">
          <Signup/>
        </Route>
        <Route path = "/login">
          <Login/>
        </Route>
      </Switch>
    </div>
)
}

export default App


