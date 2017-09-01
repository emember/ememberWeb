import React from 'react'
import DataTable from '../../component/common/DataTable'
import {connect} from 'react-redux'
import {userList} from '../../action/Action'

const mapStateToProps = state=>{
    return{
        items:state.users
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchItems:()=>{
            dispatch(userList())
        }
    }
}

const UserTable = connect(mapStateToProps, mapDispatchToProps)(DataTable)

export default UserTable