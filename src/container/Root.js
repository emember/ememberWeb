import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from  'react-redux';
import App from './App'

import I18n from 'redux-i18n'
import {translations} from '../translations'

const  Root = ({store}) =>(
    <Provider store={store}>
        <I18n translations={translations} initialLang={store.selectedLang}>
            <App/>
        </I18n>
    </Provider>
)

Root.propTypes ={
    store:PropTypes.object.isRequired
}

export default  Root