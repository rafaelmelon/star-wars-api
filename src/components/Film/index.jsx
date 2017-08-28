import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import styles from './film.css'

class Film extends Component {
  constructor (props) {
    super(props)

    this.state = {
      item: {}
    }
  }

  componentDidMount () {
    axios.get(`https://swapi.co/api/films/${this.props.match.params.id}`)
    .then(res => {
      const item = res.data
      this.setState({ item })
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render () {
    return (
      <div className={ styles.root }>
        <h3>{ this.state.item.title }</h3>
        <h4>{ this.state.item.director }</h4>
        <p>{ this.state.item.opening_crawl }</p>
        <Link to='/'>Back</Link>
      </div>
    )
  }
}

export default Film
