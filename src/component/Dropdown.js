import React from 'react'
import {FormControl} from 'react-bootstrap'
import PropTypes from 'prop-types'

class Dropdown extends FormControl {

    static propTypes={
        items:PropTypes.array.isRequired
        ,dpdOnChange:PropTypes.func.isRequired
    }



    render(){
        let options = this.props.items.map((item, index, arr)=>{
            return(
                <option value={item.key}>{item.value}</option>
            )
        })
        return(
            <FormControl componentClass="select" placeholder="select" onChange={this.props.dpdOnChange}>
                {options}
            </FormControl>
        )
    }
}

export default Dropdown