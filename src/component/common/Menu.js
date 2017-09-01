import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Nav, NavItem} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'

class Menu extends Component
{
    static propTypes={
        menuItems:PropTypes.array.isRequired
    }

    render(){
        let items=this.props.menuItems.map((item,index,arr)=>{
            return(
                <LinkContainer to={item.url} key={index} activeHref="active">
                    <NavItem >{item.name}</NavItem>
                </LinkContainer>
            )
        })

        return(
            <Nav bsStyle="pills" stacked>
                {items}
            </Nav>
        )
    }
}

export default Menu