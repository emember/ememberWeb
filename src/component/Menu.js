import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Menu extends Component
{
    static propTypes={
        menuItems:PropTypes.array.isRequired
    }

    render(){
        let liArray=this.props.menuItems.map((item,index,arr)=>{
            return(
                <li className="menu-item" key={index}>{item}</li>
            )
        })
        return(
            <ul className="menu">{liArray}</ul>
        )
    }
}

export default Menu