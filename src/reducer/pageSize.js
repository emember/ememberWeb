import {SET_PAGE_SIZE} from '../action/Action'

export default function pageSize(state=2, action){
    // console.log('~~~activePage~~', action);
    switch (action.type){
        case SET_PAGE_SIZE:
            return action.pageSize
        default:
            return state;
    }
}
