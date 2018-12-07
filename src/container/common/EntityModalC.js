import EntityModal from '../../component/common/EntityModal';
import {configEntityModal} from '../../action/Action'
import {connect} from 'react-redux'

const mapStateToProps = state=>{
    return{
        config:state.entityModalConfig
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        cancelFunc:()=>{
            dispatch(configEntityModal({show:false}))
        }
        // ,updateFunc:PropTypes.func.isRequired
    }
}

const EntityModalC = connect(mapStateToProps, mapDispatchToProps)(EntityModal)

export default EntityModalC