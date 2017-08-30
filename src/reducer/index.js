import { combineReducers } from 'redux'
import users from './users'
import members from './members'


export default combineReducers({
    selectedLang:(state={}) => state
    ,appLangs:(state =[])=>state
    ,menuItems:(state=[]) => state

    ,users:users
    ,members:members
})