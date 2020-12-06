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
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const element = (
  <body>
    <header>
      <div class = "header-image">
        <img src="https://cliparting.com/wp-content/uploads/2018/03/cross-pictures-2018-29.jpg" alt='cross'/>
      </div>
      <div class = "pray">Pray</div>
      <div class = "about-us">About Us</div>
      <div class = "testimony-board">Testimony Board</div>
      <div class = "church">Church</div>
      <div class = "login">Login</div>
    </header>
    <main class = "body-content">
      <div class = "match-button">Start Matching</div>
    </main>  
    <footer>
      <div class = "footer">footer</div>
    </footer>
  </body>
);

ReactDOM.render(
  element, document.getElementById('root')
);