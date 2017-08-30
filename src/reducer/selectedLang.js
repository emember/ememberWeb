import {LANGUAGE_CHANGE} from '../action/Action'

export default function selectedLang(state =[], action){
    console.log('~~lang reducer~~',action);
    switch (action.type){
        case LANGUAGE_CHANGE:
            return action.langCode;
        default:
            return state;
    }
}
