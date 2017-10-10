import {connect} from 'react-redux';
import React, { Component } from 'react'
import User from 'component/scene/user/User';
import {userList, userSave, userSelect, configEntityModal} from '../../action/Action'

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
            // let func=userSave(entity);
            // console.log('~~~bbbbb~~',func)
            // dispatch(func);

            dispatch(userSave(entity)).then();

        }
        ,toggleItem:(item, selected)=>{dispatch(userSelect(item, selected))}
    }
}
const UserC = connect(mapStateToProps, mapDispatchToProps)(User)

export {UserC}
