import React, { Component } from 'react'

import Header from '../Header/index.jsx'
import Carousel from '../Carousel/index.jsx'

import styles from './app.css'

class App extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className={ styles.root }>
        <Header />
        <Carousel />
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default App
