import {connect} from 'react-redux';
import React from 'react'
import Member from 'component/scene/member/Member';
import {apiAction, MEMBER_LIST_API,
    // memberCreate,
    // memberDelete,
    // memberSelect,
    // memberUpdate
} from "../../action/Action";

const mapStateToProps = state=>{
    return{
        items:state.entityItems
        ,wipItems:state.wipItems
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchItems:()=>{dispatch(apiAction(MEMBER_LIST_API));}
        // ,updateItems:(entity)=>{dispatch(memberUpdate(entity));}
        // ,createItem:(entity)=>{dispatch(memberCreate(entity));}
        // ,deleteItems:(items)=>{
        //     dispatch(memberDelete(items))
        // }
        // ,toggleItem:(item, selected)=>{dispatch(memberSelect(item, selected))}
    }
}

const MemberC = connect(mapStateToProps, mapDispatchToProps)(Member)

export {MemberC}