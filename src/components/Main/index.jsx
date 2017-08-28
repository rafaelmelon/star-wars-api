import React from 'react'
import { Switch, Route } from 'react-router-dom'
import InputSearch from '../InputSearch/index.jsx'
import Film from '../Film/index.jsx'

const Main = () => (
  <Switch>
    <Route exact path='/' component={ InputSearch }/>
    <Route path='/:id' component={ Film }/>
  </Switch>
)

export default Main
