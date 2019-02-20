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
        items:state.entityItems
        ,wipItems:state.wipItems
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        fetchItems:(para)=>{console.log('~~~~ggg~~');
            dispatch(apiAction(USER_LIST_API,para));}
        ,updateItems:(entity)=>{dispatch(userUpdate(entity));}
        ,createItem:(entity)=>{dispatch(userCreate(entity));}
        ,deleteItems:(items)=>{
            dispatch(userDelete(items))
        }
        ,toggleItem:(item, selected)=>{
            dispatch(userSelect(item, selected))
        }
    }
}

const mergeProps =(stateProps, dispatchProps, ownProps)=>{
    return{
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
        deleteItemsMerged:()=>{
            dispatchProps.deleteItems(stateProps.wipItems)
        }
    }
}

const UserC = connect(mapStateToProps, mapDispatchToProps, mergeProps)(User)

export {UserC}
