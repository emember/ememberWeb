import {USER_LIST_SUCCESS, USER_LIST_FAILURE} from '../action/Action'

export default function users(state=[], action){
    switch (action.type){
        case USER_LIST_SUCCESS:
            console.log('~~~users reducer success~~', action);
            return action.payload;
        case USER_LIST_FAILURE:
            console.log('~~~users reducer fail~~', action);
            return [ ...state, {id:'m4', firstname:'mmmmm444', lastname:'mmmmm444'}];
        default:
            return state;
    }
}
