import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
// import  App  from './App';
import { BodyWidget } from './components/BodyWidget';
import  { Diagram }  from './App';

var app = new Diagram(); 

ReactDOM.render(
  <React.StrictMode>
    <BodyWidget app={app}/>
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// import  { Diagram }  from './App';
//
// export default () => {
//     var app = new Diagram();
//     return <BodyWidget app={app} />;
// };
