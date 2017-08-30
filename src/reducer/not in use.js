import {MEMBER_LIST_SUCCESS,MEMBER_LIST_FAILURE} from '../action/Action'

export default function menuItems(state =[], action){
    console.log('~~~function called to here~~', action);

    switch (action.type){
        case MEMBER_LIST_SUCCESS:
            return action.payload;
        case MEMBER_LIST_FAILURE:
            return [ ...state, {id:'m4', firstname:'mmmmm444', lastname:'mmmmm444'}];
        default:
            return state;
    }
}
