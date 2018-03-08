import Pager from '../../component/common/Pager';
import {calculateFromIdx} from '../../action/Action'
import {connect} from 'react-redux'

const mapStateToProps = state=>{
    return{
        activePage:state.activePage
        // pageCount:state.pageCount
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        // onSelect:(pageNo)=>{
        //     dispatch(calculateFromIdx(pageNo))
        // }
    }
}

const PagerC = connect(mapStateToProps, mapDispatchToProps)(Pager)

export default PagerC