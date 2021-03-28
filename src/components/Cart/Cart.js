import React from 'react';
import {
  CartContainer,
  Icon,
  CloseIcon,
  CartList,
  CartItem,
  CartItemTitle,
  CartItemPrice,
  CartRoute,
  CartWrapButton
} from './CartStyle';


const Cart = ({isOpen, toggleCart, data}) => {
  return (
    <CartContainer
      isOpen={isOpen}
      onClose={toggleCart}
    >
      <Icon onClick={toggleCart}>
        <CloseIcon />
      </Icon>
      <CartList>
          {data.map((product, index) => {
            return (
              <CartItem key={index}>
                <CartItemTitle>{product.name}</CartItemTitle>
                <CartItemPrice>{product.price}</CartItemPrice>
              </CartItem>
            )
          })}

      </CartList>
      <CartWrapButton>
        <CartRoute to='/'>Order Now</CartRoute>
      </CartWrapButton>
    </CartContainer>
  )
}

export default Cart;
