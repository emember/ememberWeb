import {connect} from 'react-redux';
import React, { Component } from 'react'
import User from 'component/scene/user/User';
import {userList, userSave, userSelect} from '../../action/Action'

const mapStateToProps = state=>{
    return{
        items:state.users
        ,wipItems:state.wipUsers
        ,columns:['userId', 'firstname', 'lastname', 'email']
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        fetchItems:()=>{dispatch(userList())}
        ,saveItems:(entity)=>{
            console.log('~~~save func~~',entity);
            dispatch(userSave(entity))
        }
        ,toggleItem:(item, selected)=>{dispatch(userSelect(item, selected))}
    }
}
const UserScene = connect(mapStateToProps, mapDispatchToProps)(User)

export {UserScene}
