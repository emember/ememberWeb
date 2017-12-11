import AppButton from '../../component/common/AppButton';
import {configConfirmModal} from '../../action/Action'
import {connect} from 'react-redux'

const mapStateToProps = state=>{
    return{
        title:'delete'
        ,btnState:state.wipItems.length==0
    }
}

const mapDispatchToProps = (dispatch, ownProps )=>{
    return {
        onClick:()=>{
            dispatch(configConfirmModal({
                show:true,
                msg:'deleteConfirm',
            }))
        }
    }
}

const EntityButtonDeleteC = connect(mapStateToProps, mapDispatchToProps)(AppButton)

export default EntityButtonDeleteC