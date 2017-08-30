import { combineReducers } from 'redux'
import users from './users'
import members from './members'
import selectedLang from "./selectedLang";

import {i18nState} from 'redux-i18n'

export default combineReducers({
    i18nState
    ,selectedLang:selectedLang
    ,appLangs:(state =[])=>state
    ,menuItems:(state=[]) => state

    ,users:users
    ,members:members
})