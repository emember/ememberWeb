import EntityModal from '../../component/common/EntityModal';
import {configEntityModal} from '../../action/Action'
import {connect} from 'react-redux'

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
        cancelFunc:()=>{
            dispatch(configEntityModal({show:false}))
        }
        // ,saveFunc:PropTypes.func.isRequired
    }
}

const EntityModalC = connect(mapStateToProps, mapDispatchToProps)(EntityModal)

export default EntityModalC