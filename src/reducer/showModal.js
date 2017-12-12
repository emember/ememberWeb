import {CLOSE_MODAL} from 'action/Action'

export default function showModal(state =true, action){
    switch (action.type){
        case CLOSE_MODAL:
            console.log('~~~close modal ~~~',action);
            return action.showEntityForm;
        default:
            return state;
    }
}
