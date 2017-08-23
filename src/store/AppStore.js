import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer/index'
import {apiMiddleware} from 'redux-api-middleware'
import thunk from 'redux-thunk'
import * as Action from '../action/Action'

const initState={
     menuItems:['Members','Marketing','Reports','Company','Users','Logout']
    ,users:[{id:'u1',firstname:'uuu',lastname:'uuu'}]
    ,members:[ {id:'m1',firstname:'mmm',lastname:'mmm'}]
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

