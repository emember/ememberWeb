import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, FormGroup, ControlLabel, Field, Form, Alert} from 'react-bootstrap';
import {localize} from 'redux-i18n';
import EntityModalBaseHoc from '../../../container/common/EntityModalBaseHoc';
import UserEditForm from "./UserEditForm";
import UserCreateForm from "./UserCreatForm";

class UserModal extends Component{
    render(){
        return(
            <Modal show={this.props.config.show}>
                <Modal.Header>
                    <Modal.Title>{this.props.t(this.props.config.title)}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{
                    this.props.config.title==='edit' &&
                    (<UserEditForm
                        initialValues={this.props.config.entity}
                        btnCancelClick={this.props.cancelFunc}
                        onSubmit={this.props.updateFunc}
                    />)
                }
                {
                    this.props.config.title==='create' &&
                    (<UserCreateForm
                        btnCancelClick={this.props.cancelFunc}
                        onSubmit={this.props.createFunc}
                    />)
                }
                    <Alert bsStyle={this.props.config.alert.style}>{this.props.config.alert.msg}</Alert>
                </Modal.Body>
            </Modal>
        )
    }
}

UserModal = localize()(EntityModalBaseHoc(UserModal))
export default UserModal