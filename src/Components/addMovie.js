import React from 'react'
import { connect } from 'react-redux'


const Add = (props) => {
    return <div className='adding d-flex justify-content-center flex-column'>
        <input type="text" value={props.name} onChange={e => props.nameChange(e.target.value)}></input>
        <input type="text" value={props.img} onChange={e => props.imageChange(e.target.value)}></input>
        <input type="text" value={props.rating} onChange={props.ratingChange}></input>
        <input type="text" value={props.year} onChange={props.yearChange}></input> 
        <input type="button" onClick={props.addMovie} className="btn adder mx-5 my-1 text-white" value="Add a movie to the list" />
    </div>
}
/*
const mapStateToProps = (state) => {
    return {
        name: state.name,
        year: state.year,
        rating: state.rating,
        img: state.img
    }
}
*/

const mapDispatchToProps = (dispatch) => {
    return {
       nameChange(name) {
            dispatch(
                { type: 'ADD_NAME', name }
            )
        }
        ,
        imageChange(image) {
            dispatch(
                { type: 'ADD_IMAGE', image }
            )
        },
        ratingChange: (e) => {
            const action = { type: 'ADD_RATING', text: e.target.value };
            dispatch(action)
        },
        yearChange: (e) => {
            const action = { type: 'ADD_YEAR', text: e.target.value };
            dispatch(action)
        },
        
        addMovie: () => {
            const action = {
                type: 'ADD_MOVIE',
                movie: {
                    id: Math.random(),
                    name: prompt('Enter movie name: '),
                    img:prompt('Enter image src: '),
                    rating: Number(prompt('Rating: ')),
                    year: Number(prompt('Year: '))
                }
            };
            dispatch(action)
        }
    }
}

export default connect(null, mapDispatchToProps)(Add)