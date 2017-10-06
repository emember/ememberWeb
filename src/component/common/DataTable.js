import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {localize} from 'redux-i18n'
import {Table, Row, Button} from 'react-bootstrap'
import EntityForm from './EntityForm'

class DataTable extends Component{
    static propTypes={
        items:PropTypes.array.isRequired
        ,fetchItems:PropTypes.func.isRequired
        ,columns:PropTypes.array.isRequired
        ,toggleSelection:PropTypes.func
    }

    static defaultProps={
        items:[{"firstname":null,"userId":"c1aaa","email":null,"lastname":null},{"firstname":null,"userId":"companyAdminSys","email":"a@b.com","lastname":null},{"firstname":null,"userId":"888","email":null,"lastname":null},{"firstname":null,"userId":"b999","email":null,"lastname":null},{"firstname":null,"userId":null,"email":null,"lastname":null}]
        ,fetchItems:()=>{}
        ,columns:['userId', 'firstname', 'lastname', 'email']
        ,toggleSelection:(item, e)=>{
            console.log(e, '~~~lalalal~~', item);
        }
    }

    renderHeader(){
        let ths=[]
        ths.push(
            <th key={this.props.columns[0]}><input type='checkbox'/></th>
        );
        for(let idx=1;idx<this.props.columns.length;idx++){
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
            if(idx==0){
                tds.push(
                    <td key={this.props.columns[idx]}><input type='checkbox' value={item[this.props.columns[idx]]} onChange={(e)=>this.props.toggleSelection(item, e.target.checked)}/></td>
                );
            }else {
                tds.push(
                    <td key={this.props.columns[idx]}>{item[this.props.columns[idx]]}</td>
                );
            }
        }

        return (
            <tr key={index}>{tds}</tr>
        );
    }

    componentWillMount(){
        this.props.fetchItems();
    }

    render(){
        if(this.props.items.length==0)return(<div></div>)

        return (
            <Table striped bordered condensed hover>
                <thead>
                    {this.renderHeader()}
                </thead>
                <tbody>
                    {this.props.items.map(this.renderItem)}
                </tbody>
            </Table>
        )
    }
}


DataTable = localize()(DataTable)

export default DataTable