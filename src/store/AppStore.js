import {createStore, applyMiddleware} from 'redux'
import reducer from 'reducer'
import {apiMiddleware} from 'redux-api-middleware'
import {enableBatching} from 'redux-batched-actions';

import thunk from 'redux-thunk'
import * as Action from '../action/Action'

const initState={
    appLangs:[
        {key:'en',value:'English'}
        ,{key:'cn',value:'中文'}
    ]
    ,menuItems:[
         {name:'members',url:'/main/members', exact:true}
         ,{name:'marketing',url:'/main/marketing', exact:false}
         ,{name:'reports',url:'/main/reports', exact:false}
         ,{name:'company',url:'/main/company', exact:false}
         ,{name:'users',url:'/main/users', exact:false}
         // ,{name:'Logout',url:'/logout'}
     ]
    ,loginUser:{username:'111@222.com', password:'111', verified:false}
    ,pageSizeOptions:[
        {key:2,value:2}
        ,{key:3,value:3}
        ,{key:5,value:5}
        // {key:'10',value:'10'}
        // ,{key:'25',value:'25'}
        // ,{key:'50',value:'50'}
        // ,{key:'100',value:'100'}
    ]
    // ,wipItems:[]
    // ,memberWip:{}
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

const AppStore = createStoreWithMiddleware(
    enableBatching(reducer),
    initState,
    applyMiddleware(apiMiddleware,thunk)
);

export default AppStore

