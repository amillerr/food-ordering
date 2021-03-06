import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureStyle';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Pizza of the Day</h1>
      <h2>Barbeque Pork Pizza</h2>
      <p>Pulled Pork, Red Onions, Tomato, Scallions & Sweet Baby Rays BBQ Sauce</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
