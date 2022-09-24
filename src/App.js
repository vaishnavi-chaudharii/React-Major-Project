import React from 'react';
import Hero from './components/BurgerHero';
import Products from './components/BurgerProducts';
import { GlobalStyle } from './globalStyles';
import {burgerData, dessertData} from './components/BurgerProducts/dataProducts'
import Feature from './components/BurgerFeature';
import Footer from './components/BurgerFooter';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Burger from './components/Burger/Burger';
import Pizza from './components/Pizza/Pizza';
import Menucontainer from './components/Menu/Menucontainer';

function App() {
  return (
    <Router>
    <div className="App">
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={Menucontainer}/>
        <Route path="/burger" component={Burger}/>
        <Route path="/pizza" component={Pizza}/>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
