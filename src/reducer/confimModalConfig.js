import {CONFIG_CONFIRM_MODAL} from '../action/Action'

export default function confirmModalConfig(state={show:false, msg:'', alert:{style:'', msg:''}}, action){
    switch (action.type){
        case CONFIG_CONFIRM_MODAL:
            return Object.assign({}, state, action.config);
        default:
            return state;
    }
}
