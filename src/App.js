import React from 'react'
import './App.css'
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'
import CartContainer from './containers/CardContainer'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
function App(){
  return(
    <div className='App'>
      <Router>
        <HeaderContainer />
        <Switch>
        <Route path='/cart'><CartContainer /></Route>
        <Route exact path ='/'><HomeContainer /></Route>
        <Route path='*'><HomeContainer /></Route>
        </Switch>
      </Router>
    </div>
  )
}
export default App;