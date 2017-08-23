import React from 'react'
import Menu from '../component/Menu'
import {connect} from 'react-redux'
import {userList, memberList} from '../action/Action'

const mapStateToProps = state=>{
    return{
        menuItems:state.menuItems
    }
}

const mapDispatchToProps = dispatch =>{
    return {
    }
}

const AppMenu = connect(mapStateToProps, mapDispatchToProps)(Menu)

export default AppMenu
