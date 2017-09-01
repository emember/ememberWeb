import React from 'react'
import Menu from '../../component/common/Menu'
import {connect} from 'react-redux'
import {userList, memberList} from '../../action/Action'

const mapStateToProps = state=>{
    return{
        menuItems:state.menuItems
    }
}

const mapDispatchToProps = dispatch =>{
    return {
    }
}

const AppMenu = connect(mapStateToProps, mapDispatchToProps,null,{pure: false})(Menu)

export default AppMenu
