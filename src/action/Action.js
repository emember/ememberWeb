import {RSAA} from 'redux-api-middleware'

export const USER_LIST ='USER_LIST'
export const USER_EDIT ='USER_EDIT'

export function userList(state) {
    return { type:USER_LIST }

}

export function userEdit(userId) {
    return {type:USER_EDIT , userId}
}

export const MEMBER_LIST_REQUEST ='MEMBER_LIST_REQUEST'
export const MEMBER_LIST_FAILURE ='MEMBER_LIST_FAILURE'
export const MEMBER_LIST_SUCCESS ='MEMBER_LIST_SUCCESS'

export function memberList() {
    return {
        [RSAA]:{
            endpoint:'http://localhost:8000/'
            ,method:'POST'
            ,types:[MEMBER_LIST_REQUEST,MEMBER_LIST_SUCCESS,MEMBER_LIST_FAILURE]
            ,headers: { 'Content-Type': 'application/json' }
            ,body: JSON.stringify({entity:'member', func:'list'})
        }
    }
}

// export function memberEdit(memberId) {
//     return {type:MEMBER_EDIT , memberId}
// }