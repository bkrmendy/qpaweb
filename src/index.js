import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import { qpaWeb } from './reducers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
registerServiceWorker();
