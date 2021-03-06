import React, {useState}  from "react";
import Navigation from "../Navigation/Navigation";
import {
  MainContainer,
  MainContent,
  MainItems,
  MainTitle,
  MainText,
  MainButton
} from './MainStyle'
import Sidebar from "../Sidebar/Sidebar";



const Main = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <MainContainer>
      <Navigation
        toggle={toggle}
      />
       <Sidebar
         isOpen={isOpen}
         toggle={toggle}
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
