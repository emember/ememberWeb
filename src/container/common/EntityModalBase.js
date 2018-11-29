import React,{Component} from 'react';
import {connect} from 'react-redux';
import {configEntityModal} from "../../action/Action";
import PropTypes from 'prop-types';

export class EntityModalBase extends Component{
    static propTypes={
        config:PropTypes.object
        ,cancelFunc:PropTypes.func.isRequired
        ,saveFunc:PropTypes.func.isRequired
    }
}

const mapStateToProps = state=>{
    return{
        config:state.entityModalConfig
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        cancelFunc:()=>{
            dispatch(configEntityModal({show:false}))
        }
    }
}

EntityModalBase = connect(mapStateToProps, mapDispatchToProps)(EntityModalBase);
export default EntityModalBase;