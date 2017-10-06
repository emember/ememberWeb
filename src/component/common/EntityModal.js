import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button, FormGroup, ControlLabel, Field, Form} from 'react-bootstrap'
import ReduxFormControl from './ReduxFormControl';
import EntityForm from './EntityForm';

class EntityModal extends Component{

    static propTypes={
        show:PropTypes.bool.isRequired
        ,entity:PropTypes.object
        ,cancelFunc:PropTypes.func.isRequired
        ,saveFunc:PropTypes.func.isRequired
    }

    static defaultProps={
        showModal:true
        ,closeModal:()=>{console.log('~~close modal~~')}
    }

    render(){
        return(
            <Modal show={this.props.show}>
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EntityForm
                        show={true}
                        entity={this.props.entity}
                        btnCancelClick={this.props.cancelFunc}
                        initialValues={this.props.entity}
                        onSubmit={this.props.saveFunc}
                    />
                </Modal.Body>
            </Modal>
        )
    }
}

export default EntityModal