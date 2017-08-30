import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DataTable extends Component{
    static propTypes={
        items:PropTypes.array.isRequired
        ,fetchItems:PropTypes.func.isRequired
    }

    renderHeader(item){
        let keys= Object.keys(item)
        let ths=[]
        for(let i in keys){
            ths.push(
                <th key={i}>{keys[i]}</th>
            )
        }
        return(
            <tr>{ths}</tr>
        )
    }

    renderItem(item, index, arr){
        // let tds=[];
        //
        // for(let key in item){
        //     tds.push(
        //         <td key={key}>{item[key]}</td>
        //     );
        // }
        // console.log('~~tds~',tds.length)
        // return (
        //     <tr key={item.id}>{tds}</tr>
        // );
        /*****/
        let tds=[];
        for(let key in item){
            tds.push(
                <td key={key}>{item[key]}</td>
            );
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
            <table>
                <thead>
                    {this.renderHeader(this.props.items[0])}
                </thead>
                <tbody>
                    {this.props.items.map(this.renderItem)}
                </tbody>
            </table>
        )
    }
}