import { combineReducers } from 'redux'
import users from './users'
import wipItems from './wipItems'
import members from './members'
import loginUser from './loginUser'
import entityModalConfig from './entityModalConfig'

import {i18nState} from 'redux-i18n'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    i18nState
    ,form:formReducer
    ,appLangs:(state =[])=>state
    ,loginUser:loginUser
    ,menuItems:(state=[]) => state

    ,users:users
    ,wipItems:wipItems
    ,members:members
    ,entityModalConfig:entityModalConfig
})