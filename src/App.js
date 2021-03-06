import React                       from "react";
import {BrowserRouter as Router}   from "react-router-dom";
import {GlobalStyle}               from "./globalStyles";
import Main                        from "./components/Main/Main";
import Products                    from "./components/Products/Products";
import { PizzaList, DessertsList } from "./utils/data";
import Feature                     from "./components/Feature/Feature";
import Footer                      from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Main />
      <Products
        title='Choose your favorite'
        data={PizzaList}
      />
      <Feature />
      <Products
        title='Sweet Treats for You'
        data={DessertsList}
      />
      <Footer/>
    </Router>
  );
}

export default App;
