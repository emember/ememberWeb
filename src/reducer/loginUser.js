import {USER_LOGIN_REQUEST,USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS} from 'action/Action'

export default function loginUser(state ={}, action){
    switch (action.type){
        case USER_LOGIN_REQUEST:
            console.log('~~~login request~~~',action);
            return state;
        case USER_LOGIN_SUCCESS:
            console.log('~~~login success~~~',action);
            return {username:'111@222.com', password:'111', verified:true};
        case USER_LOGIN_FAILURE:
            console.log('~~~login failed~~~',action);
            return state;
        default:
            return state;
    }
}
