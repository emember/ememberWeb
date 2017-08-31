import React from 'react';
import PropTypes from 'prop-types';
import {Provider} from  'react-redux';
import App from './App'

import I18n from 'redux-i18n'
import {translations} from '../translations'

const  Root = ({store}) =>{
    console.log('~~~huhu~~',store.getState());
    return(
        <Provider store={store}>
            <I18n translations={translations} initialLang='en'>
                <App/>
            </I18n>
        </Provider>
    )
}

Root.propTypes ={
    store:PropTypes.object.isRequired
}

export default  Root