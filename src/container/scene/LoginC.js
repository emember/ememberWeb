import React from 'react';
import {connect} from 'react-redux';
import Login from 'component/scene/login/Login';
import {apiAction, USER_LOGIN_API} from "../../action/Action";

const mapStateToProps = state=>{
    return{
        loginUser:state.loginUser
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        btnLoginClick:(user)=>{
            dispatch(apiAction(USER_LOGIN_API,user));
        }
    }
}

const LoginC = connect(mapStateToProps, mapDispatchToProps)(Login)

export {LoginC}