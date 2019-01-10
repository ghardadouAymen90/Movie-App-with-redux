import React, { Component } from 'react'
import { setTimeout } from 'core-js';
import './Spinner.scss'

const LoaderHoc = (WrappedComponent) => {

    return class LoaderHoc extends Component {
        constructor(props) {
            super(props)
            this.state = { time: false }
        }
        componentDidMount() {
            setTimeout(() => {
                this.setState({ time: true })
            }, 4000
            )
        }

        render() {
            return this.state.time ? <WrappedComponent /> : <div className="wrapper text-center py-2">Please wait...<div className="spinner"></div></div>
        }
    }
}
 
export default LoaderHoc