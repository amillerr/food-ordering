import React from "react";
import {Nav, NavBars, NavIcon, NavLink, CartIcon} from "./NavStyle";

const Navigation = ({toggleMenu, toggleCart}) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Uncle`s Po Pizza</NavLink>
        <NavIcon onClick={toggleMenu}>
          <p>Menu</p>
          <NavBars />
        </NavIcon>
        <CartIcon onClick={toggleCart}/>
      </Nav>
    </>
  )
}

export default Navigation
