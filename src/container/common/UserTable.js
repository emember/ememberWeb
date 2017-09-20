import React from 'react'
import DataTable from '../../component/common/DataTable'
import {connect} from 'react-redux'
import {userList} from '../../action/Action'

const mapStateToProps = state=>{
    return{
        items:state.users
        ,columns:['userId', 'firstname', 'lastname', 'email']
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        fetchItems:()=>{dispatch(userList())}
        ,toEdit:()=>{this.props.history.push('/main/user/1');}
    }
}

const UserTable = connect(mapStateToProps, mapDispatchToProps)(DataTable)

export default UserTable