import {USER_SELECT} from '../action/Action'

export default function wipItems(state=[], action){
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
        default:
            return state;
    }
}
