import {connect} from 'react-redux';
import React, { Component } from 'react';
import {configForm} from '../../action/Action';
import PropTypes from 'prop-types';

export default function FormBaseHoc(ParaComponent){
    class FormBase extends Component{
        render(){
            return (
              <ParaComponent {...this.state} {...this.props}></ParaComponent>
            );
        }
    }

    const mapStateToProps = state=>{
        return{
            config:state.formConfig
        }
    }

    const mapDispatchToProps = dispatch =>{
        return {
            cancelFunc:()=>{
                dispatch(configForm({show:false}))
            }
        }
    }

    return connect(mapStateToProps,mapDispatchToProps)(FormBase);
}
