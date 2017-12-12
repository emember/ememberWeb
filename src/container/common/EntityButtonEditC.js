import AppButton from '../../component/common/AppButton';
import {configEntityModal} from '../../action/Action'
import {connect} from 'react-redux'

const mapStateToProps = state=>{
    return{
        title:'edit'
        ,btnState:state.wipItems.length==0
    }
}

const mapDispatchToProps = (dispatch, ownProps )=>{
    return {
        onClick:()=>{
            dispatch(configEntityModal({
                title:'edit',show:true,
                fields:ownProps.para.fields,
                entity:ownProps.para.entity
            }))
        }
    }
}

const EntityButtonEditC = connect(mapStateToProps, mapDispatchToProps)(AppButton)

export default EntityButtonEditC