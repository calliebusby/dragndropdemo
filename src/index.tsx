import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';
import { BodyWidget } from './components/BodyWidget';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { App } from './App';

export default () => {
    var app = new App();
    return <BodyWidget app={app} />;
};
