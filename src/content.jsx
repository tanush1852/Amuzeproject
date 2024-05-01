import React from 'react'
import logo from './amuze logo.png';
import './App.css';


function Content() {
    return(
    <div className="">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aniket is cool
        </a>
        </div>);
}

export default Content;