import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {localize} from "redux-i18n";
import Dropdown from "./Dropdown";

class EntityFilterForm extends Component {
    static propTypes={
        filterDef:PropTypes.array
        ,show:PropTypes.bool.isRequired
        ,btnCancelClick:PropTypes.func.isRequired
    }

    renderItem=(item, index, arr)=>{
        return(
            <tr>
                <td>{this.props.t(item.field)}</td>
                <td><Dropdown items={item.operator}></Dropdown></td>
                <td><input /></td>
            </tr>
        )
    }

    render(){
        return(
            <table>
                {
                    this.props.filterDef.map(this.renderItem)
                }
            </table>
        )
    }
}

EntityFilterForm = localize()(EntityFilterForm)

export default EntityFilterForm