import {connect} from 'react-redux';
import React from 'react'
import Member from 'component/scene/member/Member';

const mapStateToProps = state=>{
    return{
        loginUser:state.loginUser
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        // btnLoginClick:(user)=>{
        //     dispatch(userLogin(user));
        // }
    }
}

const MemberScene = connect(mapStateToProps, mapDispatchToProps)(Member)

export {MemberScene}