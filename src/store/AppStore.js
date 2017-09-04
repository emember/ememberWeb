import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer/index'
import {apiMiddleware} from 'redux-api-middleware'
import thunk from 'redux-thunk'
import * as Action from '../action/Action'

const initState={
    appLangs:[
        {key:'en',value:'English'}
        ,{key:'cn',value:'中文'}
    ]
    ,menuItems:[
         {name:'Members',url:'/member'}
         ,{name:'Marketing',url:'/marketing'}
         ,{name:'Reports',url:'/reports'}
         ,{name:'Company',url:'/company'}
         ,{name:'Users',url:'/user'}
         // ,{name:'Logout',url:'/logout'}
     ]
    ,loginUser:{username:'111@222.com', password:'111'}
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

