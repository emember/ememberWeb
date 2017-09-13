import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Nav, NavItem} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'
import {localize} from 'redux-i18n'


class Menu extends Component
{
    static propTypes={
        menuItems:PropTypes.array.isRequired
    }

    render(){
        let items=this.props.menuItems.map((item,index,arr)=>{
            return(
                <LinkContainer to={item.url} key={index} activeHref="active" exact={item.exact}>
                    <NavItem >{this.props.t(item.name)}</NavItem>
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

Menu = localize()(Menu)

export default Menu