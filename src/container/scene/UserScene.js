import React, { Component } from 'react'
import UserTable from '../common/UserTable'
import {Modal} from 'react-bootstrap'

class UserScene extends  Component{
    render(){
        return(
            <div>
                <UserTable>Users</UserTable>
            </div>
        )
    }
}


export {UserScene}