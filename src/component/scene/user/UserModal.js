import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, FormGroup, ControlLabel, Field, Form, Alert} from 'react-bootstrap';
import EntityForm from '../../../component/common/EntityForm';
import {localize} from 'redux-i18n';
import {EntityModalBase} from '../../../container/common/EntityModalBase';

class UserModal extends EntityModalBase{
    constructor(props, context){
        super(props, context);
        this.config= this.config.bind(this);
        this.cancelFunc= this.cancelFunc.bind(this);
    }

    static propTypes={
        config:PropTypes.object
        ,cancelFunc:PropTypes.func.isRequired
        ,saveFunc:PropTypes.func.isRequired
    }

    render(){
        console.log('~~~~ssss~',EntityModalBase);
        return(
            <Modal show={this.props.config.show}>
                <Modal.Header>
                    <Modal.Title>{this.props.t(this.props.config.title)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EntityForm
                        show={true}
                        fields={this.props.config.fields}
                        initialValues={this.props.config.entity}
                        btnCancelClick={this.props.cancelFunc}
                        onSubmit={this.props.saveFunc}
                    />
                    <Alert bsStyle={this.props.config.alert.style}>{this.props.config.alert.msg}</Alert>
                </Modal.Body>
            </Modal>
        )
    }
}

UserModal = localize()(UserModal)
export default UserModal