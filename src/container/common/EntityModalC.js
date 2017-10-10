import EntityModal from '../../component/common/EntityModal';
import {toggleEntityModal} from '../../action/Action'
import {connect} from 'react-redux'
import {setLanguage} from 'redux-i18n'

const mapStateToProps = state=>{
    return{
        config:state.entityModalConfig
        // show:state.entityModalShow
        // ,title:state.entityModalTitle
        // ,fields:state.entityModalFields
        // ,entity:state.entityModalEntity
        // ,alert:state.entityModalAlert
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        cancelFunc:()=>{dispatch(toggleEntityModal(false))}
        // ,saveFunc:PropTypes.func.isRequired
    }
}

const EntityModalC = connect(mapStateToProps, null)(EntityModal)

export default EntityModalC