import AppButton from '../../component/common/AppButton';
import {configEntityModal} from '../../action/Action'
import {connect} from 'react-redux'

const mapStateToProps = (state,ownProps)=>{
    return{
        title:'create'
    }
}

const mapDispatchToProps = (dispatch, ownProps )=>{
    return {
        onClick:()=>{
            dispatch(configEntityModal({title:'create',show:true, fields:ownProps.para}))
        }
    }
}

const EntityButtonCreateC = connect(mapStateToProps, mapDispatchToProps)(AppButton)

export default EntityButtonCreateC