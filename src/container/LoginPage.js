import React,{Component} from 'react';
import {Grid, Row, Form, FormControl, FormGroup, Col, Button, ControlLabel} from 'react-bootstrap';
import LanguageDropDown from './LanguageDropDown'

class LoginPage extends Component{
    render(){
        return (
            <Row>
                <Col lg={6} className="col-lg-offset-3">
                    <Form horizontal >
                        <Col lg={12} className="appContentCenter">
                            <h1>Compnay Logo here</h1>
                        </Col>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} lg={2}>
                                Email
                            </Col>
                            <Col lg={10}>
                                <FormControl type="email" placeholder="Email" />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} lg={2}>
                                Password
                            </Col>
                            <Col lg={10}>
                                <FormControl type="password" placeholder="Password" />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col lgOffset={2} lg={10}>
                                <Button type="submit">
                                    Sign in
                                </Button>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col componentClass={ControlLabel} lg={2}>
                                Language
                            </Col>

                            <Col lg={10}>
                                <LanguageDropDown/>
                                {/*<FormControl componentClass="select" placeholder="select" onChange={this.dpdLangOnChange}>*/}
                                    {/*<option value="en">English</option>*/}
                                    {/*<option value="cn">中文</option>*/}
                                {/*</FormControl>*/}
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
            </Row>
        )
    }
}


export default LoginPage