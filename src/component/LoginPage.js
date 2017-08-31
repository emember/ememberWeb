import React,{Component}  from 'react';
import PropTypes from 'prop-types'
import LoginForm from './LoginForm'
import {localize} from 'redux-i18n'


class LoginPage extends Component{
    static propTypes={
        user:PropTypes.object.isRequired
        ,btnLoginClick:PropTypes.func.isRequired
        ,handleChange:PropTypes.func.isRequired
    }

    static defaultProps={
        user:{email:'aaaa@bbb.com', password:'bbbbb'}
        ,btnLoginClick:(param)=>(event)=>{
            console.log('~~~login user~~~~',param);
            // console.log('~~~login user value~~~~', this.getUser());
            event.preventDefault();
        }
        ,handleChange:()=>{console.log('~~onchange~~');}
    }


    render(){
        return (
            <LoginForm onSubmit={this.props.btnLoginClick('111')}/>
        )
    }
}


export default LoginPage