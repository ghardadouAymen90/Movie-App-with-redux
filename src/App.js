import React, { Component } from 'react'
import Movies from './Components/Movies'
import store from './store'
import { Provider } from 'react-redux'
import './App.css'
import AddMovie from './Components/addMovie'
import NameFilter from './Components/searchByName'
import RateSearch from './Components/searchByRating'
import LoaderHoc from './HOC/LoaderHOC'

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App container-fluid">

          <div className="row searching d-flex justify-content-around fixed-top p-1">

            <div className="col-md-4 col-sm-12 filter">
              {/*search by name */}
              <NameFilter />
            </div>

            <div className="col-md-4 col-sm-12 filter">
              {/*search by rating */}
              <RateSearch />
            </div>

            <div className="col-md-4 col-sm-12 filter">
              {/*search by year */}
            </div>

          </div>


          {/*Display films list */}
          <Movies />


          <div className='adding d-flex justify-content-center flex-column'>
            {/*Add a film */}
            <AddMovie />

          </div>

        </div>
      </Provider>
    );
  }
}

export default LoaderHoc(App);
