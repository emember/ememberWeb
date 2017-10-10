import {RSAA} from 'redux-api-middleware'

let endpoint='http://10.1.11.75:8000'


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

export const USER_SAVE_REQUEST ='USER_SAVE_REQUEST'
export const USER_SAVE_FAILURE ='USER_SAVE_FAILURE'
export const USER_SAVE_SUCCESS ='USER_SAVE_SUCCESS'

export function userSave(user) {
    return async(dispatch, getState)=>{
        const actionResponse = await dispatch({
            [RSAA]: {
                endpoint: endpoint
                , method: 'POST'
                , types: [USER_SAVE_REQUEST, USER_SAVE_SUCCESS, USER_SAVE_FAILURE]
                , headers: {'Content-Type': 'application/json'}
                , body: JSON.stringify({entity: 'user', func: 'save', user: user})
            }
        });

        if (actionResponse.type === USER_SAVE_SUCCESS)
            return dispatch(userList());
        else  return actionResponse;
    }
}


export const USER_SELECT ='USER_SELECT'
export function userSelect(user, selected) {
    return {
        type:USER_SELECT,
        user:user,
        selected:selected
    }
}

export const CONFIG_ENTITY_MODAL ='CONFIG_ENTITY_MODAL'
export function toggleEntityModal(config) {
    return {
        type:CONFIG_ENTITY_MODAL,
        config:config
    }
}

export const SET_ENTITY_MODAL_MSG ='SET_ENTITY_MODAL_MSG'
export function setEntityModalMsg(msg) {
    return {
        type:SET_ENTITY_MODAL_MSG,
        msg:msg
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