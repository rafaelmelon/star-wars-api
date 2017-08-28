import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Autosuggest from 'react-autosuggest'
import axios from 'axios'

import styles from './input-search.css'

const escapeRegexCharacters = str => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

let films = []
const getSuggestions = value => {
  const escapedValue = escapeRegexCharacters(value.trim())
  if (escapedValue === '') {
    return []
  }
  const regex = new RegExp('^' + escapedValue, 'i')
  return films.filter(film => regex.test(film.title))
}

const getSuggestionValue = suggestion => {
  return suggestion.title
}

const renderSuggestion = suggestion => {
  return (
    <Link to={ `/${parseInt(suggestion.url.match(/[0-9]+/)[0], 10)}` }>
      <span>{ suggestion.title }</span>
    </Link>
  )
}

class InputSearch extends Component {
  constructor () {
    super()

    this.state = {
      value: '',
      suggestions: []
    }

    this.onChange = this.onChange.bind(this)
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this)
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this)
  }

  componentWillMount () {
    axios.get('https://swapi.co/api/films/?format=json')
    .then(res => {
      films = res.data.results
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  onChange (event, { newValue, method }) {
    this.setState({
      value: newValue
    })
  };

  onSuggestionsFetchRequested ({ value }) {
    this.setState({
      suggestions: getSuggestions(value)
    })
  };

  onSuggestionsClearRequested () {
    this.setState({
      suggestions: []
    })
  };

  render () {
    const { value, suggestions } = this.state
    const inputProps = {
      placeholder: 'Star Wars Films',
      value,
      onChange: this.onChange
    }

    return (
      <div className={ styles.root }>
        <Autosuggest
          suggestions={ suggestions }
          onSuggestionsFetchRequested={ this.onSuggestionsFetchRequested }
          onSuggestionsClearRequested={ this.onSuggestionsClearRequested }
          getSuggestionValue={ getSuggestionValue }
          renderSuggestion={ renderSuggestion }
          inputProps={ inputProps } />
      </div>
    )
  }
}

export default InputSearch
