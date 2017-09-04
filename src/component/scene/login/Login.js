import React,{Component}  from 'react';
import PropTypes from 'prop-types'
import LoginForm from './LoginForm'


class Login extends Component{
    static propTypes={
        loginUser:PropTypes.object.isRequired
        ,btnLoginClick:PropTypes.func.isRequired
    }

    static defaultProps={
        loginUser:{email:'aaaa@bbb.com', password:'bbbbb'}
        ,btnLoginClick:(values)=>{
            console.log('~~~login user~~~~',values);
        }
    }

    render(){
        return (
            <LoginForm onSubmit={this.props.btnLoginClick} initialValues={this.props.loginUser}/>
        )
    }
}


export default Login