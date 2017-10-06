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
            ,entity:{}
            ,defaultEntity:{firstname: null, userId: null, email: null, lastname: null}
            ,bulkEditProps:{aaa:null, bbb:null}
        };
    }

    static propTypes={
        items:PropTypes.array.isRequired
        ,wipItems:PropTypes.array.isRequired
        ,fetchItems:PropTypes.func.isRequired
        ,saveItems:PropTypes.func.isRequired
        ,columns:PropTypes.array.isRequired
        ,toggleItem:PropTypes.func.isRequired
    }

    static defaultProps={
        items:[{"firstname":null,"userId":"c1aaa","email":null,"lastname":null},{"firstname":null,"userId":"companyAdminSys","email":"a@b.com","lastname":null},{"firstname":null,"userId":"888","email":null,"lastname":null},{"firstname":null,"userId":"b999","email":null,"lastname":null},{"firstname":null,"userId":null,"email":null,"lastname":null}]
        ,fetchItems:()=>{}
        ,columns:['userId', 'firstname', 'lastname', 'email']
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
        this.setState({entity: this.props.wipItems.length==1?this.props.wipItems[0]:this.state.bulkEditProps, showEntityModal: true});
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
                        show={this.state.showEntityModal}
                        cancelFunc={()=>this.closeEntityModal()}
                        entity={this.state.entity}
                        saveFunc={this.props.saveItems}
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