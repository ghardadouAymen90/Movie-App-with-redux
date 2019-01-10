import React from 'react'

const Rate = ({rateFactor,rateChanger=()=>{}}) => { // We have to pass rateChanger as a function format that our browser will understand it.
                                                    // This is React child->parent relationship : we pass a function to our 
                                                    // parent element every time we click. This component will be used in the SearchByRating 
                                                    // component and we will pass rateChanger function and rateFactor props to it because we
                                                    // need to change rating filter and to show rating.
                                                    // This component will be used also in the filsLIst component but we well only pass the rateFactor
                                                    // to is because we only need that component to show rating inside films cards(Fixed rating).
    let arr = []
    for (let i = 0; i < 5; i++) {
        if (i < rateFactor) 
        arr.push(<div onClick={() => rateChanger(i+1)}  key={i*100}>★</div>)   // Every click will triger rateChanger function and pass it to it's parent.
        else 
        arr.push(<div onClick={() => rateChanger(i+1)}  key={i*100}>☆</div>)   // React is useful because it will every time render the rate then we will
                                                                                // be able to get the exact i related to the clicked ★ element.
    } 
    return <div className="d-flex">{arr}</div>
}

export default Rate