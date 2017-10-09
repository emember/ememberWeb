import {SET_ENTITY_MODAL_MSG} from '../action/Action'

export default function entityModalMsg(state={style:'error', msg:'hahaha'}, action){
    // console.log(state, '~~~wip user reducer~~', action);
    switch (action.type){
        case SET_ENTITY_MODAL_MSG:
            return action.msg;
        default:
            return state;
    }
}
