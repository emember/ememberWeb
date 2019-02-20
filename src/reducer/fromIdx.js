import {CALCULATE_FROM_IDX} from '../action/Action'

export default function fromIdx(state=0, action){
    // console.log('~~~activePage~~', action);
    switch (action.type){
        case CALCULATE_FROM_IDX:
            return action.fromIdx
        default:
            return state;
    }
}
