import {Grid} from 'react-bootstrap';
import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import MemberScene from "./scene/MemberScene";


// import Login from 'component/scene/login/Login';
import Member from 'component/scene/member/Member';


import LoginScene from './scene/LoginScene'

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={props => (
//         fakeAuth.isAuthenticated ? (
//             <Component {...props}/>
//         ) : (
//             <Redirect to={{
//                 pathname: '/',
//                 state: { from: props.location }
//             }}/>
//         )
//     )}/>
// )

const App =()=>(
    <Router>
      <Grid>
          <Route exact path="/" component={LoginScene}/>
          <Route path="/member" component={Member}/>

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
