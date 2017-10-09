import EntityModal from '../../component/common/EntityModal';
import {languageChange} from '../../action/Action'
import {connect} from 'react-redux'
import {setLanguage} from 'redux-i18n'

const mapStateToProps = state=>{
    return{
        show:state.showEntityModal
        ,title:state.
        ,fields:PropTypes.array
        ,entity:PropTypes.object
        ,cancelFunc:PropTypes.func.isRequired
        ,saveFunc:PropTypes.func.isRequired
        ,alertStyle:PropTypes.string
        ,alertMsg:PropTypes.string    }
}

const mapDispatchToProps = dispatch =>{
    return {
        }
    }
}

const EntityModalBase = connect(mapStateToProps, mapDispatchToProps)(EntityModal)

export default EntityModalBase