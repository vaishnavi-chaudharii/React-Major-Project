import React from 'react'
import Feature from '../FriesFeature';
import Footer from '../FriesFooter';
import Hero from '../FriesHero';
import Products from '../FriesProducts';
import {FriesData, dessertData} from '../FriesProducts/dataProducts'


const Burger = () => {
  return (
    <div>
        <Hero />
        <Products heading="BestSellers" data={FriesData}/>
        <Feature />
       
        <Footer />
    </div>
  );
}

export default Burger