import {USER_LIST} from '../action/Action'

export default function users(state=[], action){
    switch (action.type){
        case USER_LIST:
            return [ ...state, {id:'u2', firstname:'u2222', lastname:'u222'}];
        default:
            return state;
    }
}
