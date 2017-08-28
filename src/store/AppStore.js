import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer/index'
import {apiMiddleware} from 'redux-api-middleware'
import thunk from 'redux-thunk'
import * as Action from '../action/Action'

const initState={
     menuItems:[
         {name:'Members',url:'/member'}
         ,{name:'Marketing',url:'/marketing'}
         ,{name:'Reports',url:'/reports'}
         ,{name:'Company',url:'/company'}
         ,{name:'Users',url:'/user'}
         // ,{name:'Logout',url:'/logout'}
     ]
    ,users:[]
    ,members:[]
    // ,userWip:{}
    // ,memberWip:{}
}

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

const AppStore = createStoreWithMiddleware(
    reducer,
    initState,
    applyMiddleware(thunk)
);

export default AppStore

