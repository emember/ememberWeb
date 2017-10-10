import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, FormGroup, ControlLabel, Field, Form, Alert} from 'react-bootstrap'
import ReduxFormControl from './ReduxFormControl';
import EntityForm from './EntityForm';

class EntityModal extends Component{

    static propTypes={
        config:PropTypes.object
        // show:PropTypes.bool.isRequired
        // ,title:PropTypes.object
        // ,fields:PropTypes.array
        // ,entity:PropTypes.object
        // ,alert:PropTypes.object
        ,cancelFunc:PropTypes.func.isRequired
        ,saveFunc:PropTypes.func.isRequired
    }

    render(){
        console.log();
        return(
            <Modal show={this.props.config.show}>
                <Modal.Header>
                    <Modal.Title>{this.props.config.title}</Modal.Title>
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

export default EntityModal