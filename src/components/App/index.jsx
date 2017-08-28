import React, { Component } from 'react'

import Header from '../Header/index.jsx'
import Carousel from '../Carousel/index.jsx'
import Main from '../Main/index.jsx'

import styles from './app.css'

class App extends Component {
  render () {
    return (
      <div className={ styles.root }>
        <Header />
        <Carousel />
        <Main />
      </div>
    )
  }
}

export default App
