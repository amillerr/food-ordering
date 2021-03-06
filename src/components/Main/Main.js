import React from "react";
import Navigation from "../Navigation/Navigation";
import { MainContainer, MainContent, MainItems, MainTitle, MainText, MainButton } from './MainStyle'
import Sidebar from "../Sidebar/Sidebar";


const Main = () => {
  return (
    <MainContainer>
      <Navigation />
       <Sidebar />
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
