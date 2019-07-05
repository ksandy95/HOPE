import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import logo from './components/images/lotus.jpg'

class App extends Component {
  constructor () {
    super()
    this.state = {
      showSplash: true,
    }
  }


  
  render() {
    return (
      <main className="App">
        <img className="header-logo" alt="vector lotus logo for HOPE" src={logo}/>
        <h1>H.O.P.E.</h1>
        
      </main>
    )
  }

}

export default App;
