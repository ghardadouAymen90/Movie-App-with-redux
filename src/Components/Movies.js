import React from 'react'
import { connect } from 'react-redux'
import CardMovie from './MovieCARD'

const Movies = (props) => {
    return  <div className="row d-flex justify-content-between filmList">
    <CardMovie films={props.movies} />
    </div>
}

const mapStatetoProps = (state) => {
    return { movies: state.movies.filter(el =>
        el.name.toUpperCase().includes(state.nameFilter.toUpperCase() ) 
        &&
        el.rating >= state.rateFilter  
        )}   // Needed to link the props here to the state in the store!
}

export default connect(mapStatetoProps,null)(Movies)