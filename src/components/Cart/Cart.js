import React from 'react';
import {
  CartContainer,
  Icon,
  CloseIcon,
  CartMenu,
  CartLink,
  CartRoute,
  CartWrapButton
} from './CartStyle';


const Cart = ({isOpen, toggleCart}) => {
  return (
    <CartContainer
      isOpen={isOpen}
      onClose={toggleCart}
    >
      <Icon onClick={toggleCart}>
        <CloseIcon />
      </Icon>
      <CartMenu>
        <CartLink to='/'>first</CartLink>
        <CartLink to='/'>second</CartLink>
        <CartLink to='/'>third</CartLink>
      </CartMenu>
      <CartWrapButton>
        <CartRoute to='/'>Order Now</CartRoute>
      </CartWrapButton>
    </CartContainer>
  );
};

export default Cart;
