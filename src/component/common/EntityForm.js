import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Form, FormControl, FormGroup, Col, Button, ControlLabel} from 'react-bootstrap';
import ReduxFormControl from 'component/common/ReduxFormControl'
import {Field, reduxForm} from 'redux-form'
import {localize} from 'redux-i18n'

class EntityForm extends Component{
    static propTypes={
        fields:PropTypes.array
        ,show:PropTypes.bool.isRequired
        ,btnCancelClick:PropTypes.func.isRequired
    }

    render(){
        if(!this.props.show)return(<div></div>);

        const {handleSubmit} =this.props;
        let formFields=[];

        for(let i in this.props.fields){
            formFields.push(
                <FormGroup controlId={this.props.fields[i].key} key={i}>
                    <ControlLabel >{this.props.t(this.props.fields[i].key)}</ControlLabel>
                    <Field name={this.props.fields[i].key} type="input" placeholder={this.props.t(this.props.fields[i].key)} component={ReduxFormControl}/>
                </FormGroup>
            )
        }

        return(
            <Form onSubmit={handleSubmit} >
                {formFields}
                <FormGroup>
                    <Button key="btnCancelEntityForm" type="button" onClick={this.props.btnCancelClick}>{this.props.t('cancel')}</Button>
                    <Button key="btnSaveEntityForm" type="submit">{this.props.t('save')}</Button>
                </FormGroup>
            </Form>
        )
    }
}

EntityForm = localize()(EntityForm)
EntityForm=reduxForm({
    form:'fmEntity'
    ,enableReinitialize:true
})(EntityForm)


export default EntityForm