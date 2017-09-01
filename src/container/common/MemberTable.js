import React from 'react'
import DataTable from '../../component/common/DataTable'
import {connect} from 'react-redux'
import {userList, memberList} from '../../action/Action'

const mapStateToProps = state=>{
    return{
        items:state.members
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchItems:()=>{
            dispatch(memberList())
        }
    }
}

const MemberTable = connect(mapStateToProps, mapDispatchToProps)(DataTable)

export default MemberTable