import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DataTable from 'component/common/DataTable'
import {Row, Button,Col} from 'react-bootstrap'
import {localize} from 'redux-i18n'
import EntityForm from 'component/common/EntityForm'
import EntityModal from 'component/common/EntityModal'



class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            showEntityForm:false
            ,fields:[]
            ,entityModalTitle:''
            ,columns:[
                {key:'userId', editable:false, bulkEidt:false},
                {key:'firstname', editable:true, bulkEidt:false},
                {key:'lastname', editable:true, bulkEidt:true},
                {key:'email', editable:false, bulkEidt:false}
            ]
        };
    }

    static propTypes={
        items:PropTypes.array.isRequired
        ,wipItems:PropTypes.array.isRequired
        ,fetchItems:PropTypes.func.isRequired
        ,saveItems:PropTypes.func.isRequired
        ,toggleItem:PropTypes.func.isRequired
        ,showEntityModal:PropTypes.bool
        ,entityModalMsg:PropTypes.object
    }

    closeEntityForm(){
        this.setState({showEntityForm: false})
    }

    openEntityForm(entity){
        this.setState({entity: entity, showEntityForm: true});
    }

    closeEntityModal(){
        this.setState({showEntityModal: false})
    }

    openEntityModal(){
        this.setState({
            fields: this.props.wipItems.length==1?this.state.columns:this.state.columns.map(item=>item.bulkEidt==true)
        });
        console.log(this.state.fields);
        this.props.toggleEntityModal(true);
    }
    render(){
        // console.log('~~test 111~~',this.props.wipItems);

        // if(this.props.loginUser.verified){
        if(true){
            return(
                <div >
                    <Row>
                        <Button onClick={()=>this.openEntityModal(this.state.defaultEntity)}>{this.props.t('create')}</Button>
                        <Button disabled={this.props.wipItems.length==0} onClick={()=>this.openEntityModal()} >{this.props.t('edit')}</Button>
                        <Button >{this.props.t('delete')}</Button>
                    </Row>
                    <Row>
                        <DataTable
                            items={this.props.items}
                            columns={this.props.columns}
                            fetchItems={this.props.fetchItems}
                            toggleSelection={(entity, selected)=>this.props.toggleItem(entity, selected)}
                        />
                    </Row>
                    <Row>
                        {/*<EntityForm*/}
                            {/*show={this.state.showEntityForm}*/}
                            {/*entity={this.state.entity}*/}
                            {/*btnCancelClick={this.closeEntityForm}*/}
                            {/*initialValues={this.state.entity}/>*/}
                    </Row>

                    <EntityModal
                        show={this.props.showEntityModal}
                        title={this.state.entityModalTitle}
                        fields={this.state.fields}
                        entity ={this.props.wipItems.length==1?this.props.wipItems[0]:{}}
                        cancelFunc={()=>this.props.toggleEntityModal(false)}
                        saveFunc={this.props.saveItems}
                        alertStyle={this.props.entityModalMsg.style}
                        alertMsg={this.props.entityModalMsg.msg}
                    />
                </div>
            )
        }

        return(
            <p>You must login to view this page</p>
        )
    }
}

User=localize()(User)

export default User