import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Form, FormControl, FormGroup, Col, Button, ControlLabel} from 'react-bootstrap';
import ReduxFormControl from 'component/common/ReduxFormControl'
import {Field, reduxForm} from 'redux-form'
import {localize} from 'redux-i18n';
import FormBaseHoc from '../../../container/common/FormBaseHoc';


class UserFilterForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            fieldDef:{
                first_name:{key:'first_name', disabled:false},
                last_name:{key:'last_name', disabled:false},
                email:{key:'email', disabled:false}
            }
        }
    }

    render(){
        const {handleSubmit} =this.props;

        if(!this.props.config.show) return (<div></div>);


        return(
            <Form onSubmit={handleSubmit} >
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
                    <Button type="button" onClick={this.props.cancelFunc}>{this.props.t('cancel')}</Button>
                    <Button type="submit">{this.props.t('apply')}</Button>
                </FormGroup>
            </Form>
        )
    }
}

UserFilterForm = localize()(FormBaseHoc(UserFilterForm))
UserFilterForm=reduxForm({
    form:'UserFilterForm'
    ,enableReinitialize:true
})(UserFilterForm)


export default UserFilterForm