import React,{Component} from 'react';
import {Row, Form, FormControl, FormGroup, Col, Button, ControlLabel} from 'react-bootstrap';
import LanguageDropDown from 'container/common/LanguageDropDown'

import {localize} from 'redux-i18n'
import {login}  from 'action/Action'
import ReduxFormControl from 'component/common/ReduxFormControl'
import {Field, reduxForm} from 'redux-form'

class LoginForm extends Component{
    render(){
        const {handleSubmit} =this.props
        return (
            <Row>
                <Col lg={6} className="col-lg-offset-3">
                    <Form horizontal onSubmit={handleSubmit}>
                        <Col lg={12} className="appContentCenter">
                            <h1>Company Logo here</h1>
                        </Col>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} lg={2}>
                                {this.props.t('username')}
                            </Col>
                            <Col lg={10}>
                                <Field name="username" type="email" placeholder={this.props.t('username')} component={ReduxFormControl}/>
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} lg={2}>
                                {this.props.t('password')}
                            </Col>
                            <Col lg={10}>
                                <Field name="password" type="password" placeholder={this.props.t('password')} component={ReduxFormControl}/>
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
}

LoginForm=localize()(LoginForm)
LoginForm=reduxForm({form:'fmLogin'})(LoginForm)


export default LoginForm