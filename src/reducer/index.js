import { combineReducers } from 'redux'
import entityData from './entityData'
import pageSize from './pageSize'
import wipItems from './wipItems'
import members from './members'
import loginUser from './loginUser'
import entityModalConfig from './entityModalConfig'
import confirmModalConfig from './confimModalConfig'
import fromIdx from './fromIdx'
import {i18nState} from 'redux-i18n'
import {reducer as formReducer} from 'redux-form'

export default combineReducers({
    i18nState
    ,form:formReducer
    ,appLangs:(state =[])=>state
    ,pageSizeOptions:(state =[])=>state
    ,loginUser:loginUser
    ,menuItems:(state=[]) => state

    ,entityData:entityData
    ,pageSize:pageSize
    ,fromIdx:fromIdx

    ,wipItems:wipItems
    ,members:members
    ,entityModalConfig:entityModalConfig
    ,confirmModalConfig:confirmModalConfig
})