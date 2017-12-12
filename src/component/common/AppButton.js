import React, { Component } from 'react'
import {localize} from 'redux-i18n'
import {Button} from 'react-bootstrap'
import PropTypes from 'prop-types'

class AppButton extends Button
{
    static propTypes={
        para:PropTypes.object
        ,btnState:PropTypes.bool
    }
    render(){
        return(
            <Button onClick={this.props.onClick} disabled={this.props.btnState}>{this.props.t(this.props.title)}</Button>
        )
    }

}

AppButton = localize()(AppButton)
export default AppButton
