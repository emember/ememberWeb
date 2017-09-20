import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {localize} from 'redux-i18n'
import {Table, Modal, Button} from 'react-bootstrap'
import {withRouter} from 'react-router'


class DataTable extends Component{
    static propTypes={
        items:PropTypes.array.isRequired
        ,fetchItems:PropTypes.func.isRequired
        ,columns:PropTypes.array.isRequired
        ,toEdit:PropTypes.func.isRequired
    }

    static defaultProps={
        items:[{"firstname":null,"userId":"c1aaa","email":null,"lastname":null},{"firstname":null,"userId":"companyAdminSys","email":"a@b.com","lastname":null},{"firstname":null,"userId":"888","email":null,"lastname":null},{"firstname":null,"userId":"b999","email":null,"lastname":null},{"firstname":null,"userId":null,"email":null,"lastname":null}]
        ,fetchItems:()=>{}
        ,columns:['userId', 'firstname', 'lastname', 'email']
    }

    constructor(){
        super();
        this.state = {showModal:false}
    }

    renderHeader(){
        let ths=[]
        for(let idx in this.props.columns){
            ths.push(
                <th key={this.props.columns[idx]}>{this.props.t(this.props.columns[idx])}</th>
            )
        }
        return(
            <tr>{ths}</tr>
        )
    }

    renderItem = (item, index, arr)=>{
        let tds=[];
        for(let idx in this.props.columns){
            tds.push(
                <td key={this.props.columns[idx]}>{item[this.props.columns[idx]]}</td>
            );
        }
        return (
            <tr key={index} onClick={this.toEdit}>{tds}</tr>
        );
    }

    toEdit=()=>{
        console.log('~~ to edit~~~', this.props);
        this.props.history.push('/main/user/1');
    }

    closeModal(){
        this.setState({showModal: false})
    }

    openModal(item){
        this.setState({showModal: true})

    }

    componentWillMount(){
        this.props.fetchItems();
    }

    render(){
        if(this.props.items.length==0)return(<div></div>)
        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                        {this.renderHeader()}
                    </thead>
                    <tbody>
                        {this.props.items.map(this.renderItem)}
                    </tbody>
                </Table>

                <Modal show={this.state.showModal}>
                    <Modal.Header>
                        <Modal.Title>

                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body> Modal body</Modal.Body>
                    <Modal.Footer>
                        <Button onClick={()=>this.closeModal()}>Cancel</Button>
                        <Button onClick={()=>this.closeModal()}>Save</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}


DataTable = withRouter(localize()(DataTable))

export default DataTable