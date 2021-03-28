import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom';
import {FaPizzaSlice} from 'react-icons/fa';
import {HiShoppingCart} from 'react-icons/hi';


export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 600;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: clamp(1rem, 5vw, 3rem);
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  padding-top: 10px;
  
  @media screen and (max-width: 410px) {
    padding-top: 8px;
    position: absolute;
    top: 10px;
    left: 25px;
  }

  @media screen and (max-width: 565px) {
    padding-top: 8px;
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  
  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
    font-size: 1.5rem;
    
    @media screen and (max-width: 400px) {
      font-size: 1em;
    }
  }
`;

export const NavBars = styled(FaPizzaSlice)`
  font-size: 2.5rem;
  transform: translate(-50%, -15%);
  
  @media screen and (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

export const CartIcon = styled(HiShoppingCart)`
  font-size: 2.5rem;
  transform: translate(-50%, -15%);
  color: #fff;
  display: block;
  position: fixed;
  top: 100px;
  right: 22px;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    font-size: 1.8em;
    transform: translate(-25%,-100%);
  }
`;
