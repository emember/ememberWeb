import React,{} from 'react';
import {Grid, Row, Form, FormControl, FormGroup, Col, Button, ControlLabel} from 'react-bootstrap';
import LanguageDropDown from '../container/LanguageDropDown'

import PropTypes from 'prop-types'
import {localize} from 'redux-i18n'
import {login}  from '../action/Action'
import ReduxFormControl from '../functional/ReduxFormControl'
import {Field, reduxForm} from 'redux-form'

let LoginForm = props=> {
    const {btnLoginClick, user} =props

    return (
        <Row>
            <Col lg={6} className="col-lg-offset-3">
                <Form horizontal onSubmit={btnLoginClick}>
                    <Col lg={12} className="appContentCenter">
                        <h1>Company Logo here</h1>
                    </Col>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} lg={2}>
                            {this.props.t('username')}
                        </Col>
                        <Col lg={10}>
                            <ReduxFormControl type="email" placeholder={this.props.t('username')} defaultValue={this.props.user.email} component={FormControl}/>
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} lg={2}>
                            {this.props.t('password')}
                        </Col>
                        <Col lg={10}>
                            <FormControl type="password" placeholder={this.props.t('password')} />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col lgOffset={2} lg={10}>
                            <Button type="submit">
                                {this.props.t('login')}
                            </Button>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col componentClass={ControlLabel} lg={2}>
                            {this.props.t('language')}
                        </Col>

                        <Col lg={10}>
                            <LanguageDropDown/>
                        </Col>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    )
}

LoginForm=localize()(LoginForm)
LoginForm=reduxForm({form:'fmLogin'})(LoginForm)


export default LoginForm