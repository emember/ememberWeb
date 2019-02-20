import AppButton from '../../component/common/AppButton';
import {configForm} from '../../action/Action'
import {connect} from 'react-redux'

const mapStateToProps = state=>{
    return{
        title:'filter'
        ,btnState:false
    }
}

const mapDispatchToProps = (dispatch, ownProps )=>{
    return {
        onClick:()=>{
            dispatch(configForm({
                type:'filter',
                show:true
            }))
        }
    }
}

const EntityButtonFilterC = connect(mapStateToProps, mapDispatchToProps)(AppButton)

export default EntityButtonFilterC