import { combineReducers } from 'redux'
import entityItems from './entityItems'
import wipItems from './wipItems'
import members from './members'
import loginUser from './loginUser'
import entityModalConfig from './entityModalConfig'
import confirmModalConfig from './confimModalConfig'
import formConfig from './formConfig'

import {i18nState} from 'redux-i18n'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    i18nState
    ,form:formReducer
    ,appLangs:(state =[])=>state
    ,loginUser:loginUser
    ,menuItems:(state=[]) => state

    ,entityItems:entityItems
    ,wipItems:wipItems
    ,members:members
    ,entityModalConfig:entityModalConfig
    ,confirmModalConfig:confirmModalConfig
    ,formConfig:formConfig
})