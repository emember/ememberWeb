import {Grid, Row, Col} from 'react-bootstrap';
import React, { Component } from 'react';
import logo from '../logo.svg';
import AppMenu from '../container/AppMenu'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MemberPage from "./MemberPage";
import MarketingPage from "./MarketingPage";
import ReportPage from "./ReportPage";
import CompanyPage from "./CompanyPage";
import UserPage from "./UserPage";

import LoginPage from '../component/LoginPage'
import {localize} from 'redux-i18n'

import {Nav, NavItem} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'

const App =()=>(
    <Router>
      <Grid>
          <Route path="/" component={LoginPage}/>
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
