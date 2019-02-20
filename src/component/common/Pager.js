import {Pagination} from 'react-bootstrap'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Dropdown from './Dropdown'

class Pager extends Component{
    static propTypes={
        activePage:PropTypes.number.isRequired,
        onSelect:PropTypes.func.isRequired,
        pageCount:PropTypes.number.isRequired
    }

    render(){
        return(
            <Pagination
                first
                last
                prev
                next
                ellipsis
                onSelect ={this.props.onSelect}
                items={this.props.pageCount}
                activePage={this.props.activePage}
                maxButtons={10}
                // boundaryLinks
            >
                {/*<Pagination.First />*/}
                {/*<Pagination.Prev />*/}
                {/*<Pagination.Item>{1}</Pagination.Item>*/}
                {/*<Pagination.Ellipsis />*/}
                {/*<Pagination.Item>{10}</Pagination.Item>*/}
                {/*<Pagination.Item>{11}</Pagination.Item>*/}
                {/*<Pagination.Item active>{12}</Pagination.Item>*/}
                {/*<Pagination.Item>{13}</Pagination.Item>*/}
                {/*<Pagination.Item disabled>{14}</Pagination.Item>*/}

                {/*<Pagination.Ellipsis />*/}
                {/*<Pagination.Item>{20}</Pagination.Item>*/}
                {/*<Pagination.Next />*/}
                {/*<Pagination.Last />*/}
            </Pagination>
        )
    }
}

export default Pager