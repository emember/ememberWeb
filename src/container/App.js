import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import * as scenes from './scene';


// import Login from 'component/scene/login/Login';
// import Member from 'component/scene/member/Member';
import User from 'component/scene/user/User';
import EntityForm from 'component/common/EntityForm';

const history = createBrowserHistory()

const App =()=>(
    <Router history ={history}>
        <div>
            <Route exact path="/" component={scenes.LoginC}/>
            <Route path="/main" component={scenes.MainScene}/>
        </div>
    </Router>
    )
export default App;
