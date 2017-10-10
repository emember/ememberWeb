import {CONFIG_ENTITY_MODAL} from '../action/Action'

export default function entityModalConfig(state={show:true, alert:{style:'', msg:''}}, action){
    // console.log(state, '~~~wip user reducer~~', action);
    switch (action.type){
        case CONFIG_ENTITY_MODAL:
            return Object.assign({}, state, action.config);
        default:
            return state;
    }
}
