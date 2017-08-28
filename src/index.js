import React from 'react';
import ReactDOM from 'react-dom';
import Root from './container/Root';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux'
import AppStore from './store/AppStore'


ReactDOM.render(
    <Root store={AppStore}/>,
    document.getElementById('root')
);

registerServiceWorker();
