import Dropdown from '../../component/common/Dropdown';
import {languageChange} from '../../action/Action'
import {connect} from 'react-redux'
import {setLanguage} from 'redux-i18n'

const mapStateToProps = state=>{
    return{
        items:state.appLangs
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        dpdOnChange:(selected)=>{
            dispatch(setLanguage(selected.target.value))
        }
    }
}

const LanguageDropdown = connect(mapStateToProps, mapDispatchToProps)(Dropdown)

export default LanguageDropdown