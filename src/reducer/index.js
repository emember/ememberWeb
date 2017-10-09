import { combineReducers } from 'redux'
import users from './users'
import wipUsers from './wipUsers'
import members from './members'
import loginUser from './loginUser'
import showEntityModal from './showEntityModal'

import {i18nState} from 'redux-i18n'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    i18nState
    ,form:formReducer
    ,appLangs:(state =[])=>state
    ,loginUser:loginUser
    ,menuItems:(state=[]) => state

    ,users:users
    ,wipUsers:wipUsers
    ,members:members
    ,showEntityModal:showEntityModal
})