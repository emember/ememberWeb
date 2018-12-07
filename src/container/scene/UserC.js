import {connect} from 'react-redux';
import React, { Component } from 'react'
import User from '../../component/scene/user/User';
import {
    userUpdate,
    userCreate,
    userSelect,
    userDelete,
    apiAction,
    USER_LIST_API
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
        ,updateItems:(entity)=>{dispatch(userUpdate(entity));}
        ,createItem:(entity)=>{dispatch(userCreate(entity));}
        ,deleteItems:()=>{
            dispatch(userDelete(ownProps.wipItems))
        }
        ,toggleItem:(item, selected)=>{dispatch(userSelect(item, selected))}
    }
}
const UserC = connect(mapStateToProps, mapDispatchToProps)(User)

export {UserC}
