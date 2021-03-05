import React                            from "react";
import {Nav, NavBars, NavIcon, NavLink} from "./NavStyle";

const Navigation = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Uncle`s Po Pizza</NavLink>
        <NavIcon>
          <p>Menu</p>
          <NavBars />
        </NavIcon>
      </Nav>
    </>
  )
}

export default Navigation
