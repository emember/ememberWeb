import {connect} from 'react-redux';
import React, { Component } from 'react'
import User from 'component/scene/user/User';
import {userList, userSave, userSelect, configEntityModal, userDelete, calculateFromIdx} from '../../action/Action'
import {entityUISelector} from 'selector';

const mapStateToProps = state=>{
    return{
        entityData:state.entityData
        ,fromIdx:state.fromIdx
        ,pageSize:state.pageSize
        ,wipItems:state.wipItems
        ,entityUISelector:entityUISelector(state)
    }
}

const mapDispatchToProps = (dispatch, ownProps) =>{
    return {
        fetchEntities:(para)=>{dispatch(userList(para))}
        ,saveItems:(entity)=>{
            dispatch(userSave(entity));
        }
        ,deleteItems:(ids)=>{
            dispatch(userDelete(ids))
        }
        ,toggleItem:(item, selected)=>{dispatch(userSelect(item, selected))}
        ,calculateFromIdx:(pageNumber, pageSize)=>{
            dispatch(calculateFromIdx(pageNumber, pageSize));
        }
    }
}

const mergeProps=(stateProps, dispatchProps, ownProps)=>{
    const { pageSize } = stateProps;
    return{
        ...stateProps
        ,...dispatchProps
        ,changePage:(pageNumber)=>{
            dispatchProps.calculateFromIdx(pageNumber, pageSize);
        }
    }
}
const UserC = connect(mapStateToProps, mapDispatchToProps, mergeProps)(User)

export {UserC}
