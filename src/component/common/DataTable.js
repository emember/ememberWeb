import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {localize} from 'redux-i18n'
import {Table, Modal, Button} from 'react-bootstrap'
import EntityModal from './EntityModal'


class DataTable extends Component{
    static propTypes={
        items:PropTypes.array.isRequired
        ,fetchItems:PropTypes.func.isRequired
        ,columns:PropTypes.array.isRequired
        ,rowClick:PropTypes.func.isRequired
        ,showModal:PropTypes.bool.isRequired
        ,closeModal:PropTypes.func.isRequired
    }

    static defaultProps={
        items:[{"firstname":null,"userId":"c1aaa","email":null,"lastname":null},{"firstname":null,"userId":"companyAdminSys","email":"a@b.com","lastname":null},{"firstname":null,"userId":"888","email":null,"lastname":null},{"firstname":null,"userId":"b999","email":null,"lastname":null},{"firstname":null,"userId":null,"email":null,"lastname":null}]
        ,fetchItems:()=>{}
        ,columns:['userId', 'firstname', 'lastname', 'email']
        ,rowClick:(item)=>{console.log('~~row click~~',item)}
        ,showModal:true
        ,closeModal:()=>{console.log('~~close modal click~~');this.props.showModal =false}
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
            <tr key={index} onClick={()=>this.props.rowClick(item)}>{tds}</tr>
        );
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
                <EntityModal showModal={this.props.showModal} closeModal={this.props.closeModal}></EntityModal>
            </div>
        )
    }
}


DataTable = localize()(DataTable)

export default DataTable