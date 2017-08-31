import {MEMBER_LIST_SUCCESS,MEMBER_LIST_FAILURE} from '../action/Action'

export default function members(state =[], action){
    // console.log('~~~member reducer~~', action);

    switch (action.type){
        case MEMBER_LIST_SUCCESS:
            return action.payload;
        case MEMBER_LIST_FAILURE:
            return [ ...state, {id:'m4', firstname:'mmmmm444', lastname:'mmmmm444'}];
        default:
            return state;
    }
}
