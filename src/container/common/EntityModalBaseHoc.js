import {connect} from 'react-redux';
import React, { Component } from 'react';
import {configEntityModal} from '../../action/Action';
import PropTypes from 'prop-types';

export default function EntityModalBaseHoc(ParaComponent){
    class EntityModalBase extends Component{
        render(){
            return (
              <ParaComponent {...this.state} {...this.props}></ParaComponent>
            );
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

    return connect(mapStateToProps,mapDispatchToProps)(EntityModalBase);
}
