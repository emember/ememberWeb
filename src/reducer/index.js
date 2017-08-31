import { combineReducers } from 'redux'
import users from './users'
import members from './members'

import {i18nState} from 'redux-i18n'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    i18nState
    ,form:formReducer
    ,appLangs:(state =[])=>state
    ,menuItems:(state=[]) => state

    ,users:users
    ,members:members
})