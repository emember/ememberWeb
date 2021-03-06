import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, FormGroup, ControlLabel, Field, Form, Alert} from 'react-bootstrap'
import ReduxFormControl from './ReduxFormControl';
import EntityForm from './EntityForm';
import {localize} from 'redux-i18n';

class EntityModal extends Component{

    static propTypes={
        config:PropTypes.object
        ,cancelFunc:PropTypes.func.isRequired
        ,updateFunc:PropTypes.func.isRequired
    }

    render(){
        console.log();
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
                        onSubmit={this.props.updateFunc}
                    />
                    <Alert bsStyle={this.props.config.alert.style}>{this.props.config.alert.msg}</Alert>
                </Modal.Body>
            </Modal>
        )
    }
}

EntityModal = localize()(EntityModal)
export default EntityModal