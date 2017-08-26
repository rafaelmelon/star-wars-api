import React, { Component } from 'react';

import Slider from 'react-slick'
import styles from './carousel.css'

class Carousel extends Component {
  constructor (props) {
    super(props)
    this.state = { loading: false, people: [] }
  }

  componentWillMount () {
    const URL = 'https://swapi.co/api/people/?format=json'
    fetch(URL).then(res => res.json())
    .then(data => {
      let peopleArray = []
      data.results.forEach(item => {
        peopleArray.push(item.name)
      })
      this.setState({ loading: false, people: peopleArray })
    })
    .catch((error) => console.log(error))
  }

  render () {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    const peopleList = this.state.people.map(function (slide) {
      return <div key={slide}><h3>{slide}</h3></div>
    })

    return (
      <div className={ styles.root }>
        { this.state.people.length > 0 ? <Slider {...settings}>{ peopleList }</Slider> : null }
      </div>
    )
  }

}

export default Carousel
