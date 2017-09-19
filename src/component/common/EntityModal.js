import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Modal, Button} from 'react-bootstrap'

class EntityModal extends Component{

    static propTypes={
        showModal:PropTypes.bool.isRequired
        ,closeModal:PropTypes.func.isRequired
    }

    static defaultProps={
        showModal:true
        ,closeModal:()=>{console.log('~~close modal~~')}
    }

    render(){
        return(
            <Modal show={this.props.showModal}>
                <Modal.Header>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body> Modal body</Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.closeModal}>Cancel</Button>
                    <Button onClick={this.props.closeModal}>Save</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default EntityModal