import React from "react";
import "./App.css";
import "./assets/css/colors.css";
import "./assets/css/helpers.css";
import "./assets/css/global.css";
import "./assets/css/fonts.css";

import Page001 from "./pages/page001";

function App() {


  // clear zeros before
  function clearZeros(num) {
    num = num.toString();
    num = num.replace(/^0+/, '');
    return num;
  }

  return (
    <div className="App">
      <Page001 numeroPagina={clearZeros} />
    </div>
  );
}

export default App;
