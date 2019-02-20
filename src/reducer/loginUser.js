import {USER_LOGIN_REQUEST,USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS} from 'action/Action'

export default function loginUser(state ={}, action){
    switch (action.type){
        case USER_LOGIN_REQUEST:
            return state;
        case USER_LOGIN_SUCCESS:
            return {username:'111@222.com', password:'111', verified:true};
        case USER_LOGIN_FAILURE:
            return state;
        default:
            return state;
    }
}
