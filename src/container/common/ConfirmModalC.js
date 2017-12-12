import ConfirmModal from '../../component/common/ConfirmModal';
import {configConfirmModal} from '../../action/Action'
import {connect} from 'react-redux'

const mapStateToProps = state=>{
    return{
        config:state.confirmModalConfig
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        noFunc:()=>{
            dispatch(configConfirmModal({show:false}))
        }
        // ,saveFunc:PropTypes.func.isRequired
    }
}

const ConfirmModalC = connect(mapStateToProps, mapDispatchToProps)(ConfirmModal)

export default ConfirmModalC