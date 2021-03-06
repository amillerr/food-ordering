import React                     from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {GlobalStyle}             from "./globalStyles";
import Main                      from "./components/Main/Main";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Main />
    </Router>
  );
}

export default App;