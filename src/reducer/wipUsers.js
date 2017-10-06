import {USER_SAVE_SUCCESS, USER_SAVE_FAILURE, USER_SELECT} from '../action/Action'

export default function wipUsers(state=[], action){
    // console.log(state, '~~~wip user reducer~~', action);
    switch (action.type){
        case USER_SELECT:
            let copy=[...state];
            if(action.selected){
                copy.push(action.user);
            }else{
                let index =copy.indexOf(action.user);
                copy.splice(index,1);
            }
            return copy;
        case USER_SAVE_SUCCESS:
            return action.payload;
        case USER_SAVE_FAILURE:
            return [ ...state, {id:'m4', firstname:'mmmmm444', lastname:'mmmmm444'}];
        default:
            return state;
    }
}
