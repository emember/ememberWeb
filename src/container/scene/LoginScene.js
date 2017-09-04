import React from 'react';
import {connect} from 'react-redux';
import Login from 'component/scene/login/Login';
import {userLogin} from "action/Action"

const mapStateToProps = state=>{
    return{
        loginUser:state.loginUser
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        btnLoginClick:(user)=>{
            dispatch(userLogin(user));
        }
    }
}

const LoginScene = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginScene