import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import * as scenes from './scene';


// import Login from 'component/scene/login/Login';
// import Member from 'component/scene/member/Member';
import DataTable from 'component/common/DataTable';

const history = createBrowserHistory()

const App =()=>(
    <Router history ={history}>
        <div>
            <Route exact path="/" component={scenes.LoginScene}/>
            <Route path="/main" component={scenes.MainScene}/>
            <Route path="/test" component={DataTable}/>
        </div>
    </Router>
    )
export default App;
