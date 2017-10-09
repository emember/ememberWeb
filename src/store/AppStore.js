import {createStore, applyMiddleware} from 'redux'
import reducer from 'reducer'
import {apiMiddleware} from 'redux-api-middleware'
import thunk from 'redux-thunk'
import * as Action from '../action/Action'

const initState={
    appLangs:[
        {key:'en',value:'English'}
        ,{key:'cn',value:'中文'}
    ]
    ,menuItems:[
         {name:'members',url:'/main', exact:true}
         ,{name:'marketing',url:'/main/marketing', exact:false}
         ,{name:'reports',url:'/main/reports', exact:false}
         ,{name:'company',url:'/main/company', exact:false}
         ,{name:'users',url:'/main/users', exact:false}
         // ,{name:'Logout',url:'/logout'}
     ]
    ,loginUser:{username:'111@222.com', password:'111', verified:false}
    ,users:[]
    ,members:[]
    // ,wipUsers:[]
    // ,memberWip:{}
}

const createStoreWithMiddleware = applyMiddleware()(createStore);

const AppStore = createStoreWithMiddleware(
    reducer,
    initState,
    applyMiddleware(apiMiddleware,thunk)
);

export default AppStore

