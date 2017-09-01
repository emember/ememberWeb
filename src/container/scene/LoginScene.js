import React from 'react';
import {connect} from 'react-redux';
import Login from 'component/scene/login/Login';


const mapStateToProps = state=>{
    return{
        loginUser:state.loginUser
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        btnLoginClick:(user)=>{
            console.log('~~~from container component~~~~',user);
            // dispatch(userLogin(user));
        }
    }
}

const LoginScene = connect(mapStateToProps, mapDispatchToProps)(Login)

export default LoginScene