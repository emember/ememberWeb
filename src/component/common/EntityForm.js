import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Form, FormControl, FormGroup, Col, Button, ControlLabel} from 'react-bootstrap';
import ReduxFormControl from 'component/common/ReduxFormControl'
import {Field, reduxForm} from 'redux-form'
import {localize} from 'redux-i18n'

class EntityForm extends Component{
    static propTypes={
        entity:PropTypes.object.isRequired
        ,show:PropTypes.bool.isRequired
        ,btnCancelClick:PropTypes.func.isRequired
    }

    static defaultProps={
        entity:{"firstname":null,"userId":"c1aaa","email":null,"lastname":null}
        ,show:false
    }

    render(){
        if(!this.props.show)return(<div></div>);

        const {handleSubmit} =this.props;
        let keys= Object.keys(this.props.entity)
        let fields=[];

        for(let i in keys){
            fields.push(
                <FormGroup controlId={keys[i]} key={i}>
                    <ControlLabel >{this.props.t(keys[i])}</ControlLabel>
                    <Field name={keys[i]} type="input" placeholder={this.props.t(keys[i])} component={ReduxFormControl}/>
                </FormGroup>
            )
        }

        return(
            <Form onSubmit={handleSubmit} >
                {fields}
                <FormGroup>
                    <Button type="button" onClick={this.props.btnCancelClick}>{this.props.t('cancel')}</Button>
                    <Button type="submit">{this.props.t('save')}</Button>
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