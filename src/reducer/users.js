import {USER_LIST_SUCCESS, USER_LIST_FAILURE} from '../action/Action'

export default function users(state=[], action){
    // console.log('~~~user reducer~~', action);
    switch (action.type){
        case USER_LIST_SUCCESS:
            return action.payload;
        case USER_LIST_FAILURE:
            return [ ...state, {id:'m4', firstname:'mmmmm444', lastname:'mmmmm444'}];
        default:
            return state;
    }
}
