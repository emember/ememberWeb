import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Form, FormControl, FormGroup, Col, Button, ControlLabel} from 'react-bootstrap';
import ReduxFormControl from 'component/common/ReduxFormControl'
import {Field, reduxForm} from 'redux-form'
import {localize} from 'redux-i18n'

class UserEditForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            fieldDef:{
                user_account_id:{key:'user_account_id', disabled:true},
                first_name:{key:'first_name', disabled:false},
                last_name:{key:'last_name', disabled:false},
                email:{key:'email', disabled:true}
            }
        }
    }

    render(){
        const {handleSubmit} =this.props;
        return(
            <Form onSubmit={handleSubmit} >
                <FormGroup controlId={this.state.fieldDef.user_account_id.key} key={this.state.fieldDef.user_account_id.key}>
                    <ControlLabel >{this.props.t(this.state.fieldDef.user_account_id.key)}</ControlLabel>
                    <Field name={this.state.fieldDef.user_account_id.key}
                           type="input"
                           disabled={this.state.fieldDef.user_account_id.disabled}
                           placeholder={this.props.t(this.state.fieldDef.user_account_id.key)}
                           component={ReduxFormControl}/>
                </FormGroup>

                <FormGroup controlId={this.state.fieldDef.email.key} key={this.state.fieldDef.email.key}>
                    <ControlLabel >{this.props.t(this.state.fieldDef.email.key)}</ControlLabel>
                    <Field name={this.state.fieldDef.email.key}
                           type="input"
                           disabled={this.state.fieldDef.email.disabled}
                           placeholder={this.props.t(this.state.fieldDef.email.key)}
                           component={ReduxFormControl}/>
                </FormGroup>

                <FormGroup controlId={this.state.fieldDef.first_name.key} key={this.state.fieldDef.first_name.key}>
                    <ControlLabel >{this.props.t(this.state.fieldDef.first_name.key)}</ControlLabel>
                    <Field name={this.state.fieldDef.first_name.key}
                           type="input"
                           disabled={this.state.fieldDef.first_name.disabled}
                           placeholder={this.props.t(this.state.fieldDef.first_name.key)}
                           component={ReduxFormControl}/>
                </FormGroup>

                <FormGroup controlId={this.state.fieldDef.last_name.key} key={this.state.fieldDef.last_name.key}>
                    <ControlLabel >{this.props.t(this.state.fieldDef.last_name.key)}</ControlLabel>
                    <Field name={this.state.fieldDef.last_name.key}
                           type="input"
                           disabled={this.state.fieldDef.last_name.disabled}
                           placeholder={this.props.t(this.state.fieldDef.last_name.key)}
                           component={ReduxFormControl}/>
                </FormGroup>
                <FormGroup>
                    <Button type="button" onClick={this.props.btnCancelClick}>{this.props.t('cancel')}</Button>
                    <Button type="submit">{this.props.t('save')}</Button>
                </FormGroup>
            </Form>
        )
    }
}

UserEditForm = localize()(UserEditForm)
UserEditForm=reduxForm({
    form:'userEditForm'
    ,enableReinitialize:true
})(UserEditForm)


export default UserEditForm