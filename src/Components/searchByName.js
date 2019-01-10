import React from 'react'
import './searchName.css'
import { connect } from 'react-redux'

const Search = (props) => {
    return (
        <div className="container">
            <h5>Search for your favorite movie here!</h5>
            <div className="row">
                <div className="col-12">
                    <div className="input-group">
                        <input className="form-control border-secondary py-2"
                            type="search"
                            placeholder="search"
                            onChange={e => props.searchName(e)}
                        />
                    </div>
                </div>
            </div>
        </div >
    )
}

const mapDispatchToProps = dispatch => {
    return {
        searchName: (e) => {
            const action = { type: 'SEARCH_NAME', searchName: e.target.value }
            dispatch(action)
        }
    }
}


export default connect(null, mapDispatchToProps)(Search)