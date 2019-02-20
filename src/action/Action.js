import {RSAA} from 'redux-api-middleware';
import {batchActions} from 'redux-batched-actions';

const endpoint='http://10.51.30.70:8080'

export function apiAction(apiDef, para={}) {
    console.log('~~api def ~~', apiDef, '~~para ~~',para);
    return {
        [RSAA]: {
            endpoint: endpoint
            , method: 'POST'
            , types: apiDef.actions
            , headers: {'Content-Type': 'application/json'}
            , body: JSON.stringify({
                handler: apiDef.handler,
                func: apiDef.func,
                para:para
            })
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

export const USER_UPDATE_REQUEST ='USER_UPDATE_REQUEST'
export const USER_UPDATE_FAILURE ='USER_UPDATE_FAILURE'
export const USER_UPDATE_SUCCESS ='USER_UPDATE_SUCCESS'
export const USER_UPDATE_API={
    actions:[USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAILURE],
    handler:'user',
    func:'update'
}

export function userUpdate(user) {
    return async(dispatch, getState)=>{
        const actionResponse = await dispatch(apiAction(USER_UPDATE_API, [user]));

        if (actionResponse.type === USER_UPDATE_SUCCESS)
            return dispatch(batchActions([
                    dispatch(apiAction(USER_LIST_API))
                    ,configEntityModal({show:false})
                ])
            );
        else  return actionResponse;
    }
}

export const USER_CREATE_REQUEST ='USER_CREATE_REQUEST'
export const USER_CREATE_FAILURE ='USER_CREATE_FAILURE'
export const USER_CREATE_SUCCESS ='USER_CREATE_SUCCESS'
export const USER_CREATE_API={
    actions:[USER_CREATE_REQUEST, USER_CREATE_SUCCESS, USER_CREATE_FAILURE],
    handler:'user',
    func:'create'
}

export function userCreate(user) {
    return async(dispatch, getState)=>{
        const actionResponse = await dispatch(apiAction(USER_CREATE_API, user));

        if (actionResponse.type === USER_CREATE_SUCCESS)
            return dispatch(batchActions([
                    dispatch(apiAction(USER_LIST_API))
                    ,configEntityModal({show:false})
                ])
            );
        else  return actionResponse;
    }
}

export const USER_DELETE_REQUEST ='USER_DELETE_REQUEST'
export const USER_DELETE_FAILURE ='USER_DELETE_FAILURE'
export const USER_DELETE_SUCCESS ='USER_DELETE_SUCCESS'
export const USER_DELETE_API={
    actions:[USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAILURE],
    handler:'user',
    func:'remove'
}
export function userDelete(userIds) {
    return async(dispatch, getState)=>{
        const actionResponse = await dispatch(apiAction(USER_DELETE_API, userIds));

        if (actionResponse.type === USER_DELETE_SUCCESS)
            return dispatch(batchActions([
                dispatch(apiAction(USER_LIST_API))
                ,configConfirmModal({show:false})
                ])
            );
        else  return actionResponse;
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

export const CONFIG_FORM ='CONFIG_FORM'
export function configForm(config) {
    return {
        type:CONFIG_FORM,
        config:config
    }
}


export const MEMBER_LIST_REQUEST ='MEMBER_LIST_REQUEST'
export const MEMBER_LIST_FAILURE ='MEMBER_LIST_FAILURE'
export const MEMBER_LIST_SUCCESS ='MEMBER_LIST_SUCCESS';
export const MEMBER_LIST_API={
    actions:[MEMBER_LIST_REQUEST, MEMBER_LIST_SUCCESS, MEMBER_LIST_FAILURE],
    handler:'member',
    func:'list'
}



/***************old code*************/

export const USER_SELECT ='USER_SELECT'
export function userSelect(user, selected) {
    return {
        type:USER_SELECT,
        user:user,
        selected:selected
    }
}