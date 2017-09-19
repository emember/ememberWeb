import {RSAA} from 'redux-api-middleware'

let endpoint='http://10.1.11.12:8000'

export const USER_LIST_REQUEST ='USER_LIST_REQUEST'
export const USER_LIST_FAILURE ='USER_LIST_FAILURE'
export const USER_LIST_SUCCESS ='USER_LIST_SUCCESS'

export function userList() {
    return {
        [RSAA]:{
            endpoint:endpoint
            ,method:'POST'
            ,types:[USER_LIST_REQUEST,USER_LIST_SUCCESS,USER_LIST_FAILURE]
            ,headers: { 'Content-Type': 'application/json' }
            ,body: JSON.stringify({entity:'user', func:'list'})
        }
    }
}

export const USER_LOGIN_REQUEST ='USER_LOGIN_REQUEST'
export const USER_LOGIN_FAILURE ='USER_LOGIN_FAILURE'
export const USER_LOGIN_SUCCESS ='USER_LOGIN_SUCCESS'

export function userLogin(user) {
    return {
        [RSAA]:{
            endpoint:endpoint
            ,method:'POST'
            ,types:[USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAILURE]
            ,headers: { 'Content-Type': 'application/json' }
            ,body: JSON.stringify({...{entity:'user', func:'wlogin'},...user})
        }
    }
}

export const MEMBER_LIST_REQUEST ='MEMBER_LIST_REQUEST'
export const MEMBER_LIST_FAILURE ='MEMBER_LIST_FAILURE'
export const MEMBER_LIST_SUCCESS ='MEMBER_LIST_SUCCESS'

export function memberList() {
    return {
        [RSAA]:{
            endpoint:endpoint
            ,method:'POST'
            ,types:[MEMBER_LIST_REQUEST,MEMBER_LIST_SUCCESS,MEMBER_LIST_FAILURE]
            ,headers: { 'Content-Type': 'application/json' }
            ,body: JSON.stringify({entity:'member', func:'list'})
        }
    }
}

export const CLOSE_MODAL ='CLOSE_MODAL'
export function closeModal() {
    return {
        type:CLOSE_MODAL,
        showModal:false
    }
}