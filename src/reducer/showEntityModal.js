import {TOGGLE_ENTITY_MODAL} from '../action/Action'

export default function showEntityModal(state=false, action){
    // console.log(state, '~~~wip user reducer~~', action);
    switch (action.type){
        case TOGGLE_ENTITY_MODAL:
            return action.status;
        default:
            return state;
    }
}
