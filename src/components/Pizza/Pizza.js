import React from 'react'
import Feature from '../PizzaFeature';
import Footer from '../PizzaFooter';
import Hero from '../PizzaHero';
import Products from '../PizzaProducts';
import {pizzaData} from '../PizzaProducts/dataProducts'


const Pizza = () => {
  return (
    <div>
        <Hero />
        <Products heading="BestSellers" data={pizzaData}/>
        <Feature />
        <Footer />
    </div>
  );
}

export default Pizza