import React,{useState}  from 'react'
import Navbar from '../PizzaNavBar'
import Sidebar from '../PizzaSideBar'
import {HeroContainer,HeroContent,HeroItems,HeroH1,HeroP,HeroBtn} from './HeroElements'



const Hero = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = ()=>{
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle}/>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Craziest Pizza Ever</HeroH1>
                    <HeroP>Pizza Ready in 5 minutes</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
