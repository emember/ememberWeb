import {CONFIG_FORM} from '../action/Action'

export default function formConfig(state={show:false, alert:{style:'', msg:''}}, action){
    if(action.type && action.type.includes('FORM'))console.log('~~reducer~~',action);

    switch (action.type){
        case CONFIG_FORM:
            return Object.assign({}, state, action.config);
        default:
            return state;
    }
}
