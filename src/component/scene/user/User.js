import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DataTable from 'component/common/DataTable'
import {Row, Button,Col} from 'react-bootstrap'
import {localize} from 'redux-i18n'
// import EntityForm from 'component/common/EntityForm'
import EntityModalC from 'container/common/EntityModalC'
import EntityButtonCreateC from 'container/common/EntityButtonCreateC'
import EntityButtonEditC from 'container/common/EntityButtonEditC'
import EntityButtonDeleteC from 'container/common/EntityButtonDeleteC'
import ConfirmModalC from "container//common/ConfirmModalC";


class User extends Component{
    constructor(props){
        super(props);
        this.state = {
            columns:[
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
        ,deleteItems:PropTypes.func.isRequired
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
                        <EntityButtonCreateC para={this.state.columns}/>
                        <EntityButtonEditC para={{
                            fields:this.props.wipItems.length==1? this.state.columns:this.state.columns.filter(item=>item.bulkEidt==true)
                            ,entity:this.props.wipItems.length==1?this.props.wipItems[0]:{}
                        }} />
                        <EntityButtonDeleteC para={this.props.wipItems.map(item=>{return item['userId']})}/>
                    </Row>
                    <Row>
                        <DataTable
                            items={this.props.items}
                            columns={this.state.columns.map(item=>item.key)}
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

                    <EntityModalC saveFunc={this.props.saveItems} />
                    <ConfirmModalC yesFunc ={()=>this.props.deleteItems(this.props.wipItems.map(item=>{return item['userId']}))}/>
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