import {Grid, Row, Col} from 'react-bootstrap';
import AppMenu from 'container/common/AppMenu';
import logo from 'logo.svg';
import React, { Component } from 'react';
import * as scenes from './index';
import {Route} from 'react-router-dom';
import LanguageDropDown from 'container/common/LanguageDropDown'

class MainScene extends Component{
    render(){
        return(
            <Grid>
                <Row className="appHeader">
                    <Col lg={2}>
                        <h1>MENU</h1>
                    </Col>
                    <Col lg={2}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col lg={6}>
                        <h2>Emember Management Console</h2>
                    </Col>
                    <Col lg={2}>
                        <h5>Welcome, User</h5>
                        <LanguageDropDown/>
                    </Col>
                </Row>

                <Row>
                    <Col lg={2}>
                        <AppMenu></AppMenu>
                    </Col>

                    <Col lg={10}>
                        <Route path="/main/marketing" component={scenes.MarketingScene}/>
                        <Route path="/main/reports" component={scenes.ReportScene}/>
                        <Route path="/main/company" component={scenes.CompanyScene}/>
                        <Route path="/main/users" component={scenes.UserScene}/>
                    </Col>
                </Row>
            </Grid>
        )
    }
}
export  {MainScene}

