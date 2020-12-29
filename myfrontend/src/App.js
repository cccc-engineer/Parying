import React, {Component} from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
import Pray from "./pray";
import Login from "./login";

class App extends Component{
    render(){
        return(
            <HashRouter>
            <body>
            <header>
                <div className = "header-image">
                <img src="https://live.staticflickr.com/65535/50670536037_a252fccce0_t.jpg" alt='cross'/>
                </div>
                <NavLink to="/" className = "pray">Pray</NavLink>
                <a href="/" className = "about-us">About Us</a>
                <a href="/" className = "testimony-board">Testimony Board</a>
                <a href="/" className = "church">Church</a>
                <NavLink to="/login" className = "login">Login</NavLink>
            </header>
            <main className = "body-content">
                <Route exact path="/" component={Pray}/>
                <Route path="/login" component={Login}/>
            </main> 
            </body>
            </HashRouter>
        );
    }
}

export default App;
