import React from "react";
import {Nav, NavBars, NavIcon, NavLink} from "./NavStyle";

const Navigation = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Uncle`s Po Pizza</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <NavBars />
        </NavIcon>
      </Nav>
    </>
  )
}

export default Navigation
