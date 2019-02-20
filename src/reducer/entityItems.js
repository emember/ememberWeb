import {USER_LIST_SUCCESS, USER_LIST_FAILURE, MEMBER_LIST_SUCCESS,MEMBER_LIST_FAILURE} from '../action/Action'

export default function entityItems(state=[], action){
    if(action.type && !action.type.includes('redux'))console.log('~~~entityItems reducer success~~', action);
    switch (action.type){
        case USER_LIST_SUCCESS:
            return action.payload;
        case USER_LIST_FAILURE:
            return [];
        case MEMBER_LIST_SUCCESS:
            return action.payload;
        case MEMBER_LIST_FAILURE:
            return [];
        default:
            return state;
    }
}
