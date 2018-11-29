import {RSAA} from 'redux-api-middleware';
import {batchActions} from 'redux-batched-actions';

const endpoint='http://localhost:8080'

export function apiAction(apiDef, para={}) {
    console.log('~~make api call ~~', apiDef);
    return {
        [RSAA]: {
            endpoint: endpoint
            , method: 'POST'
            , types: apiDef.actions
            , headers: {'Content-Type': 'application/json'}
            , body: JSON.stringify({...{handler: apiDef.handler, func: apiDef.func}, ...para})
        }
    }
}

export const USER_LOGIN_REQUEST ='USER_LOGIN_REQUEST';
export const USER_LOGIN_FAILURE ='USER_LOGIN_FAILURE';
export const USER_LOGIN_SUCCESS ='USER_LOGIN_SUCCESS';
export const USER_LOGIN_API={
    actions:[USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE],
    handler:'user',
    func:'wlogin'
}

export const USER_LIST_REQUEST ='USER_LIST_REQUEST'
export const USER_LIST_FAILURE ='USER_LIST_FAILURE'
export const USER_LIST_SUCCESS ='USER_LIST_SUCCESS';
export const USER_LIST_API={
    actions:[USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAILURE],
    handler:'user',
    func:'list'
}

export const USER_SAVE_REQUEST ='USER_SAVE_REQUEST'
export const USER_SAVE_FAILURE ='USER_SAVE_FAILURE'
export const USER_SAVE_SUCCESS ='USER_SAVE_SUCCESS'
export const USER_SAVE_API={
    actions:[USER_SAVE_REQUEST, USER_SAVE_SUCCESS, USER_SAVE_FAILURE],
    handler:'user',
    func:'save'
}

export function userSave(user) {
    console.log('~~action user save~~~',user);
    return async(dispatch, getState)=>{
        const actionResponse = await dispatch(apiAction(USER_SAVE_API, user));

        if (actionResponse.type === USER_SAVE_SUCCESS)
            return dispatch(batchActions([
                    dispatch(apiAction(USER_LIST_API))
                    ,configEntityModal({show:false})
                ])
            );
        else  return actionResponse;
    }
}




export function userLogin(user) {
    return {
        [RSAA]:{
            endpoint:endpoint
            ,method:'POST'
            ,types:[USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAILURE]
            ,headers: { 'Content-Type': 'application/json' }
            ,body: JSON.stringify({...{handler:'user', func:'wlogin'},...user})
        }
    }
}



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


export const USER_DELETE_REQUEST ='USER_DELETE_REQUEST'
export const USER_DELETE_FAILURE ='USER_DELETE_FAILURE'
export const USER_DELETE_SUCCESS ='USER_DELETE_SUCCESS'

export function userDelete(userIds) {
    return async(dispatch, getState)=>{
        const actionResponse = await dispatch({
            [RSAA]: {
                endpoint: endpoint
                , method: 'POST'
                , types: [USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAILURE]
                , headers: {'Content-Type': 'application/json'}
                , body: JSON.stringify({entity: 'user', func: 'remove', userIds: userIds})
            }
        });

        console.log('~~action user delete ~~',actionResponse);

        if (actionResponse.type === USER_DELETE_SUCCESS)
            return dispatch(batchActions([
                    dispatch(userList())
                    // ,configEntityModal({show:false})
                ])
            );
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
export function configEntityModal(config) {
    return {
        type:CONFIG_ENTITY_MODAL,
        config:config
    }
}

export const CONFIG_CONFIRM_MODAL ='CONFIG_CONFIRM_MODAL'
export function configConfirmModal(config) {
    return {
        type:CONFIG_CONFIRM_MODAL,
        config:config
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