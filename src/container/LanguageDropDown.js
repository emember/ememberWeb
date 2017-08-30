import Dropdown from '../component/Dropdown';
import {languageChange} from '../action/Action'
import {connect} from 'react-redux'

const mapStateToProps = state=>{
    return{
        items:state.appLangs
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        dpdOnChange:(selected)=>{
            dispatch(languageChange(selected.target.value))
        }
    }
}

const LanguageDropdown = connect(mapStateToProps, mapDispatchToProps)(Dropdown)

export default LanguageDropdown