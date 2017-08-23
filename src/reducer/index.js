import { combineReducers } from 'redux'
import users from './users'
import members from './members'


export default combineReducers({
     users:users
    ,members:members
    ,menuItems:(state = ['Members','Marketing','Reports','Company','Users','Logout']) => state
})