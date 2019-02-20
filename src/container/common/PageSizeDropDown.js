import Dropdown from '../../component/common/Dropdown';
import {setPageSize} from '../../action/Action'
import {connect} from 'react-redux'
import {setLanguage} from 'redux-i18n'

const mapStateToProps = state=>{
    return{
        items:state.pageSizeOptions
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        dpdOnChange:(selected)=>{
            dispatch(setPageSize(selected.target.value))
        }
    }
}

const PageSizeDropDown = connect(mapStateToProps, mapDispatchToProps)(Dropdown)

export default PageSizeDropDown