import {connect} from 'react-redux';
import React, { Component } from 'react'
import User from 'component/scene/user/User';
import {userList, userSave, userSelect, configEntityModal, userDelete} from '../../action/Action'

const mapStateToProps = state=>{
    return{
        items:state.users
        ,wipItems:state.wipItems
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        fetchItems:()=>{dispatch(userList())}
        ,saveItems:(entity)=>{
            dispatch(userSave(entity));
        }
        ,deleteItems:(ids)=>{
            dispatch(userDelete(ids))
        }
        ,toggleItem:(item, selected)=>{dispatch(userSelect(item, selected))}
    }
}
const UserC = connect(mapStateToProps, mapDispatchToProps)(User)

export {UserC}
