import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ReactScrollableAnchor from './ReactScrollableAnchor';
// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<ReactScrollableAnchor />, document.getElementById('root'));
registerServiceWorker();
