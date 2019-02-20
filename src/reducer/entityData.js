import {USER_LIST_SUCCESS, USER_LIST_FAILURE} from '../action/Action'

export default function entityData(state={totalCount:0, items:[]}, action){
    // console.log('~~~entityData reducer ~~', action);
    switch (action.type){
        case USER_LIST_SUCCESS:
            return action.payload[0];
        case USER_LIST_FAILURE:
            return state;
        default:
            return state;
    }
}
