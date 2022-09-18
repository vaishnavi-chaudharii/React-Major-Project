import React from 'react'
import Feature from '../BurgerFeature';
import Footer from '../BurgerFooter';
import Hero from '../BurgerHero';
import Products from '../BurgerProducts';
import {burgerData, dessertData} from '../BurgerProducts/dataProducts'


const Burger = () => {
  return (
    <div>
        <Hero />
        <Products heading="BestSellers" data={burgerData}/>
        <Feature />
       
        <Footer />
    </div>
  );
}

export default Burger