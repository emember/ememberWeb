import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux'
import AppStore from './store/AppStore'


ReactDOM.render(
    <Provider store={AppStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
