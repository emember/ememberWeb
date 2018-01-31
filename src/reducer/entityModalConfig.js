import {CONFIG_ENTITY_MODAL} from '../action/Action'

export default function entityModalConfig(state={show:false, alert:{style:'', msg:''}}, action){
    console.log('~~entityModalConfig~~~',action);
    switch (action.type){
        case CONFIG_ENTITY_MODAL:
            return Object.assign({}, state, action.config);
        default:
            return state;
    }
}
