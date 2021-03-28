import React, {useState} from "react";
import Navigation        from "../Navigation/Navigation";
import {
  MainContainer,
  MainContent,
  MainItems,
  MainTitle,
  MainText,
  MainButton
}                        from './MainStyle'
import Sidebar           from "../Sidebar/Sidebar";
import Cart              from "../Cart/Cart";
import { PizzaList } from "../../utils/data";

const Main = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  }
  const toggleCart = () => {
    setIsOpenCart(!isOpenCart);
  }

  return (
    <MainContainer>
      <Navigation
        toggleMenu={toggleMenu}
        toggleCart={toggleCart}
      />
       <Sidebar
         isOpen={isOpenMenu}
         toggleMenu={toggleMenu}
       />
       <Cart
         data={PizzaList}
         isOpen={isOpenCart}
         toggleCart={toggleCart}
       />
         <MainContent>
           <MainItems>
             <MainTitle>Greatest Pizza Ever</MainTitle>
              <MainText>Ready in 15 minutes</MainText>
                <MainButton>Place Order</MainButton>
           </MainItems>
         </MainContent>
    </MainContainer>
  )
}

export default Main
