import React,{Component}  from 'react';
import PropTypes from 'prop-types'
import LoginForm from './LoginForm'
import {Redirect} from 'react-router-dom'
import {Grid} from 'react-bootstrap'

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
            <Grid>
                <LoginForm onSubmit={this.props.btnLoginClick} initialValues={this.props.loginUser}/>
                { this.props.loginUser.verified && (<Redirect to="/main" />)}
            </Grid>
        )
    }
}


export default Login