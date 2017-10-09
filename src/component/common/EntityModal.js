import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, FormGroup, ControlLabel, Field, Form, Alert} from 'react-bootstrap'
import ReduxFormControl from './ReduxFormControl';
import EntityForm from './EntityForm';

class EntityModal extends Component{

    static propTypes={
        show:PropTypes.bool.isRequired
        ,title:PropTypes.object
        ,fields:PropTypes.array
        ,entity:PropTypes.object
        ,cancelFunc:PropTypes.func.isRequired
        ,saveFunc:PropTypes.func.isRequired
        ,alertStyle:PropTypes.string
        ,alertMsg:PropTypes.string
    }

    render(){
        return(
            <Modal show={this.props.show}>
                <Modal.Header>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EntityForm
                        show={true}
                        fields={this.props.fields}
                        btnCancelClick={this.props.cancelFunc}
                        initialValues={this.props.entity}
                        onSubmit={this.props.saveFunc}
                    />
                    <Alert bsStyle={this.props.alertStyle}>{this.props.alertMsg}</Alert>
                </Modal.Body>
            </Modal>
        )
    }
}

export default EntityModal