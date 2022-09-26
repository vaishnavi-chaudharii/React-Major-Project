import React from 'react'
import {FeatureContainer, FeatureButton} from './FeatureElements'

const Feature = () => {
    return (
        <FeatureContainer>
            <h1>Burger of the day</h1>
            <p>Extra cheesy burger with alot of cheese</p>
            <FeatureButton>Order Now</FeatureButton>
        </FeatureContainer>

    )
}

export default Feature
