import React, { Component } from 'react'

import Header from '../Header/index.jsx'
import Carousel from '../Carousel/index.jsx'

class App extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div style={{textAlign: 'center'}}>
        <Header />
        <Carousel />
        <h1>Hello World</h1>
      </div>
    )
  }
}

export default App
