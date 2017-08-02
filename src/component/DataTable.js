import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DataTable extends Component{
    static PropTypes={
        items:PropTypes.array.isRequired
    }

    renderItem(item){
        let columns=[];
        for(let key in item){
            columns.push(
                <td>{item[key]}</td>
            );
        }

        return (
            <tr>{columns}</tr>
        );
    }

    render(){
        const {
            items=[{a:'1-a',b:'1-b'},{a:'2-a',b:'2-b'}]
        } =this.props

        return (
            <table>
                {items.map(this.renderItem)}
            </table>
        )
    }
}