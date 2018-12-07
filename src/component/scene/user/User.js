import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DataTable from '../../common/DataTable'
import {Row, Button, Col} from 'react-bootstrap'
import {localize} from 'redux-i18n'
// import EntityForm from 'component/common/EntityForm'
import UserModal from './UserModal';
import EntityButtonCreateC from '../../../container/common/EntityButtonCreateC'
import EntityButtonEditC from '../../../container/common/EntityButtonEditC'
import EntityButtonDeleteC from '../../../container/common/EntityButtonDeleteC'
import ConfirmModalC from "../../../container/common/ConfirmModalC";


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {key: 'user_account_id', disabled: false, bulkEidt: false},
                {key: 'first_name', disabled: true, bulkEidt: false},
                {key: 'last_name', disabled: true, bulkEidt: true},
                {key: 'email', disabled: false, bulkEidt: false}
            ]
        };
    }

    static propTypes = {
        items: PropTypes.array.isRequired
        , wipItems: PropTypes.array.isRequired
        , fetchItems: PropTypes.func.isRequired
        , updateItems: PropTypes.func.isRequired
        , deleteItems: PropTypes.func.isRequired
        , toggleItem: PropTypes.func.isRequired
        , showEntityModal: PropTypes.bool
        , entityModalMsg: PropTypes.object
    }

    render() {
        // console.log('~~test 111~~',this.props.wipItems);

        // if(this.props.loginUser.verified){
        if (true) {
            return (
                <div>
                    <Row>
                        <EntityButtonCreateC para={this.state.columns}/>
                        <EntityButtonEditC para={{
                            entity: this.props.wipItems.length == 1 ? this.props.wipItems[0] : {}
                        }}/>
                        <EntityButtonDeleteC para={this.props.wipItems.map(item => {
                            return item['user_account_id']
                        })}/>
                    </Row>
                    <Row>
                        <DataTable
                            items={this.props.items}
                            columns={this.state.columns.map(item => item.key)}
                            fetchItems={this.props.fetchItems}
                            toggleSelection={(entity, selected) => this.props.toggleItem(entity, selected)}
                        />
                    </Row>
                    <Row>
                        {/*<EntityForm*/}
                        {/*show={this.state.showEntityForm}*/}
                        {/*entity={this.state.entity}*/}
                        {/*btnCancelClick={this.closeEntityForm}*/}
                        {/*initialValues={this.state.entity}/>*/}
                    </Row>

                    <UserModal
                        updateFunc={this.props.updateItems}
                        createFunc={this.props.createItem}
                    />
                    <ConfirmModalC yesFunc={this.props.deleteItems}/>
                </div>
            )
        }

        return (
            <p>You must login to view this page</p>
        )
    }
}

User = localize()(User)

export default User