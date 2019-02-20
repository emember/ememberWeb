import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, FormGroup, ControlLabel, Field, Form, Alert} from 'react-bootstrap'
import ReduxFormControl from './ReduxFormControl';
import EntityForm from './EntityForm';
import {localize} from 'redux-i18n';

class ConfirmModal extends Component{

    static propTypes={
        config:PropTypes.object
        ,yesFunc:PropTypes.func.isRequired
        ,noFunc:PropTypes.func.isRequired
    }

    render(){
        return(
            <Modal show={this.props.config.show}>
                <Modal.Body>{ this.props.t(this.props.config.msg)}</Modal.Body>
                <Modal.Footer>
                    <Button type="button" onClick={this.props.yesFunc}>{this.props.t('yes')}</Button>
                    <Button type="button" onClick={this.props.noFunc}>{this.props.t('no')}</Button>
                </Modal.Footer>
                <Alert bsStyle={this.props.config.alert.style}>{this.props.config.alert.msg}</Alert>
            </Modal>
        )
    }
}

ConfirmModal = localize()(ConfirmModal)
export default ConfirmModal