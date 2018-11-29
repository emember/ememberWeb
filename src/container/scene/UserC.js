import {connect} from 'react-redux';
import React, { Component } from 'react'
import User from '../../component/scene/user/User';
import {
    userList,
    userSave,
    userSelect,
    configEntityModal,
    userDelete,
    apiAction,
    USER_LIST_API,
    USER_SAVE_API
} from '../../action/Action'

const mapStateToProps = state=>{
    return{
        items:state.users
        ,wipItems:state.wipItems
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        fetchItems:()=>{dispatch(apiAction(USER_LIST_API));}
        ,saveItems:(entity)=>{dispatch(userSave(entity));}
        ,deleteItems:()=>{
            dispatch(userDelete(ownProps.wipItems))
        }
        ,toggleItem:(item, selected)=>{dispatch(userSelect(item, selected))}
    }
}
const UserC = connect(mapStateToProps, mapDispatchToProps)(User)

export {UserC}
