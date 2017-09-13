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
         {name:'Members',url:'/main', exact:true}
         ,{name:'Marketing',url:'/main/marketing', exact:false}
         ,{name:'Reports',url:'/main/reports', exact:false}
         ,{name:'Company',url:'/main/company', exact:false}
         ,{name:'Users',url:'/main/user', exact:false}
         // ,{name:'Logout',url:'/logout'}
     ]
    ,loginUser:{username:'111@222.com', password:'111', verified:false}
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

