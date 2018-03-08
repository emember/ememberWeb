import {CALCULATE_FROM_IDX} from '../action/Action'

export default function totalCount(state=1, action){
    // console.log('~~~pageCount reducer~~', action);
    switch (action.type){
        case CALCULATE_FROM_IDX:
            return action.totalCount
        default:
            return state;
    }
}
