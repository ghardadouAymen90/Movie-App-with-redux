import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const mortalEngines = {
    name: "Mortal Engines",
    img: "https://resizing.flixster.com/uNfaT1KFEFFA-AOWqH_393XOOxQ=/fit-in/200x296.2962962962963/v1.bTsxMjg2NzgxNDtqOzE3OTIzOzEyMDA7MzE1ODs1MDAw",
    rating: 4,
    year: "2018",
    key: 1
}

const onceUpnADeadpool = {
    name: "ONCE UPON A DEADPOOL",
    img: "https://resizing.flixster.com/qGO_SJNwUmqmn28r31MR9XGA9o4=/fit-in/200x296.2962962962963/v1.bTsxMjkzMjQ0MTtqOzE3OTI0OzEyMDA7MzkzOTs1ODM2",
    rating: 3,
    year: "2018",
    key: 2
}

const ralphBreaksTheInternet = {
    name: 'RALPH BREAKS THE INTERNET',
    img: "https://resizing.flixster.com/H7zwP9234B8Mbg08Zrnm5Ab9qFk=/fit-in/200x296.2962962962963/v1.bTsxMjg1NjQ0NDtqOzE3OTIzOzEyMDA7MTAxNDsxNTAw",
    rating: 5,
    year: "2018",
    key: 3
}

const bohemianRhapsody = {
    name: 'BOHEMIAN RHAPSODY',
    img: "https://resizing.flixster.com/WPae9umho_i60MLCT1Fn-s_Zsaw=/fit-in/200x296.2962962962963/v1.bTsxMjc0MjEwMTtqOzE3OTIyOzEyMDA7ODE5OzEwMjQ",
    rating: 2,
    year: "2018",
    key: 4
}

const venom = {
    name: 'venom',
    img: "https://resizing.flixster.com/oJiDW_Fr5RuERc_uOp5NNSUNhbE=/fit-in/200x296.2962962962963/v1.bTsxMjcyMTY5MDtqOzE3OTIyOzEyMDA7NjMyOzk2MA",
    rating: 5,
    year: "2018",
    key: 5
}

const moviesDisplay = [mortalEngines, onceUpnADeadpool, ralphBreaksTheInternet, bohemianRhapsody, venom]

const reducer = (state = moviesDisplay, action) => {
    if ((action.type) === 'ADD_MOVIE') {
        return state.concat(action.movie)
    }
    return state
}

const reducerNameFilter = (state = '', action) => {
    if (action.type === 'SEARCH_NAME')
        return action.searchName
    return state
}

const reducerRatemeFilter = (state = 1, action) => {
    if (action.type === 'FILTER_RATE')
        return action.rate
    return state
}

const reducerAdd = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_NAME': return   Object.assign({}, state, { name: action.name})
        case 'ADD_IMAGE': return  Object.assign({}, state, { img: action.image })
        case 'ADD_RATING': return Object.assign({}, state, { rating: action.text })
        case 'ADD_YEAR': return   Object.assign({}, state, { year: action.text })
        //case 'ADD_MOVIE': return {}
        default: return state
    }
}

const store = createStore(
    combineReducers({ 
        movies: reducer, nameFilter: reducerNameFilter, rateFilter: reducerRatemeFilter,
        add: reducerAdd
    }),
    composeWithDevTools() //to use redux dev tools
)

export default store