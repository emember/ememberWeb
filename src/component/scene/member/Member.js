import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import MemberTable from '../common/MemberTable'

class Member extends  Component{
    static propTypes={
        loginUser:PropTypes.object.isRequired
    }

    static defaultProps={
        loginUser: {email:'aaaa@bbb.com', password:'bbbbb', verified:true}
    }

    render(){
        if(this.props.loginUser.verified){
            return(
                <h1>Member Scene</h1>
            )
        }
        return(
            <p>You must login to view this page</p>
        )
    }
}

export default Member

/*<MemberTable>Members</MemberTable>*/
