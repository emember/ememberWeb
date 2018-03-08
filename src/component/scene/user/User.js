import React, { Component } from 'react'
import PropTypes from 'prop-types'
import DataTable from 'component/common/DataTable'
import Pager from 'component/common/Pager'
import {Row, Button,Col} from 'react-bootstrap'
import {localize} from 'redux-i18n'
// import EntityForm from 'component/common/EntityForm'
import EntityModalC from 'container/common/EntityModalC'
import EntityButtonCreateC from 'container/common/EntityButtonCreateC'
import EntityButtonEditC from 'container/common/EntityButtonEditC'
import EntityButtonDeleteC from 'container/common/EntityButtonDeleteC'
import ConfirmModalC from "container/common/ConfirmModalC";
import PageSizeDropDown from "container/common/PageSizeDropDown";

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
        entityData:PropTypes.object.isRequired
        ,fromIdx:PropTypes.number.fromIdx
        ,pageSize:PropTypes.number.isRequired
        ,changePage:PropTypes.number.isRequired
        ,entityUISelector:PropTypes.object.isRequired

        ,wipItems:PropTypes.array.isRequired
        ,fetchEntities:PropTypes.func.isRequired
        ,saveItems:PropTypes.func.isRequired
        ,deleteItems:PropTypes.func.isRequired
        ,toggleItem:PropTypes.func.isRequired
        ,showEntityModal:PropTypes.bool
        ,entityModalMsg:PropTypes.object
    }

    componentWillMount(){
        this.props.fetchEntities();
    }

    render(){
        // console.log('~~test 111~~',this.props.pageSize);
        console.log('~~test 111~~', this.props.entityUISelector);

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
                            items={this.props.entityUISelector.disPlayItems}
                            columns={this.state.columns.map(item=>item.key)}
                            fetchItems={this.props.fetchEntities}
                            toggleSelection={(entity, selected)=>this.props.toggleItem(entity, selected)}
                        />
                    </Row>
                    <Row>
                        <Col><PageSizeDropDown /></Col>
                        <Col>Showing from { this.props.entityUISelector.fromNo} to {this.props.entityUISelector.toIdx} of {this.props.entityData.totalCount} </Col>
                        <Col><Pager
                            activePage={this.props.entityUISelector.pageNo}
                            pageCount={Math.ceil(this.props.entityData.totalCount/ this.props.pageSize)}
                            onSelect={this.props.changePage}
                            />
                        </Col>
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