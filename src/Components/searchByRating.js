import React from 'react'
import Rate from './rateRendering'
import {connect} from 'react-redux'

const Search = ({ratefactor,onChange}) =>   // React child-parent relationship : we pass the onChange function to the movieApp component
                                            // onChange(rateFactor) will pass that rateFactor to the parent that will set our 
                                            // minimumRatingFilter accordingly.
                                            // So, our minimumRatingFilter will always be the rateFactor created in the rateRandering component.

{
    return <div className="container d-flex justify-content-center flex-column">
                <h5>Select your minimun rating here!</h5>
                <div className="row">
                    <div className="col-12 text-white rating">
                        <Rate rateFactor={ratefactor} rateChanger={ (rateFactor) => onChange(rateFactor) } />
                    </div>
                </div>
           </div>
}
const mapStateToProps = state => {
    return {
        ratefactor: state.rateFilter
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onChange: (rate)=>
        {const action={type:'FILTER_RATE',rate} ;
        dispatch(action)
    }}
}


export default connect( mapStateToProps ,mapDispatchToProps )(Search)