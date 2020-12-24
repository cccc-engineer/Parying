// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Route from "react-router-dom/Route";
import { BrowserRouter as Router } from "react-router-dom";
import { MatchButton } from "./components/MatchButton";
import Login from "./components/Login";

class Body extends React.Component {
  render() {
    return (
      <Router>
        <body>
          <header>
            <div class="header-image">
              <img
                src="https://cliparting.com/wp-content/uploads/2018/03/cross-pictures-2018-29.jpg"
                alt="cross"
              />
            </div>
            <div class="pray">
              <a href="/">Pray</a>
            </div>
            <div class="about-us">About Us</div>
            <div class="testimony-board">Testimony Board</div>
            <div class="church">Church</div>
            <div class="login">
              <a href="/login">Login</a>
            </div>
          </header>
          <main class="body-content">
            <Route path="/" exact component={MatchButton}></Route>
            <Route path="/login" component={Login}></Route>
          </main>
        </body>
      </Router>
    );
  }
}

// ReactDOM.render(<Body />, document.getElementById("root"));
ReactDOM.render(
  <React.StrictMode>
    <Body />
  </React.StrictMode>,
  document.getElementById("root")
);
