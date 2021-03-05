import React                     from "react";
import Navigate                  from "./components/Navigation/Navigation";
import {BrowserRouter as Router} from "react-router-dom";
import {GlobalStyle}             from "./components/globalStyles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navigate />
    </Router>
  );
}

export default App;
