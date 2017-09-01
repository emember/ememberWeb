import {Grid, Row, Col} from 'react-bootstrap';
import React, { Component } from 'react';
import logo from '../logo.svg';
import AppMenu from './common/AppMenu'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MemberPage from "./scene/MemberPage";
import MarketingPage from "./scene/MarketingPage";
import ReportPage from "./scene/ReportPage";
import CompanyPage from "./scene/CompanyPage";
import UserPage from "./scene/UserPage";

import {localize} from 'redux-i18n'

import {Nav, NavItem} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'

import LoginScene from '../container/scene/LoginScene'

const App =()=>(
    <Router>
      <Grid>
          <Route path="/" component={LoginScene}/>
          {/*<Route path="/" component={MarketingPage}/>*/}

          {/*<LoginPage/>*/}
        {/*<Row className="appHeader">*/}
            {/*<Col lg={2}>*/}
                {/*<h1>MENU</h1>*/}
            {/*</Col>*/}
            {/*<Col lg={2}>*/}
                {/*<img src={logo} alt="logo" />*/}
            {/*</Col>*/}
            {/*<Col lg={6}>*/}
                {/*<h2>Emember Management Console</h2>*/}
            {/*</Col>*/}
            {/*<Col lg={2}>*/}
                {/*<h5>Welcome, User</h5>*/}
            {/*</Col>*/}
        {/*</Row>*/}

        {/*<Row>*/}
            {/*<Col lg={2}>*/}
                {/*<AppMenu></AppMenu>*/}
            {/*</Col>*/}

            {/*<Col lg={10}>*/}
                {/*<Route path="/member" component={MemberPage}/>*/}
                {/*<Route path="/marketing" component={MarketingPage}/>*/}
                {/*<Route path="/reports" component={ReportPage}/>*/}
                {/*<Route path="/company" component={CompanyPage}/>*/}
                {/*<Route path="/user" component={UserPage}/>*/}
            {/*</Col>*/}
        {/*</Row>*/}
      </Grid>
    </Router>
    )
export default App;
