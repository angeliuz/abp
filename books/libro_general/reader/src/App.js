import React, { useEffect } from "react";
import "./App.css";
import "./assets/css/colors.css";
import "./assets/css/helpers.css";
import "./assets/css/global.css";
import "./assets/css/fonts.css";

import Page001 from "./pages/page001";
import Page002 from "./pages/page002";

function App() {
  const dokenArray = getUrlParameter("doken").split([',']);
  console.log(dokenArray[2]);

  function pad(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  }
  // clear zeros before
  function clearZeros(num) {
    num = num.toString();
    num = num.replace(/^0+/, '');
    return num;
  }



  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };

  function goToPage() {
    document.getElementById('page_' + pad(dokenArray[2], 3)).scrollIntoView();
  }

  useEffect(() => {
    goToPage();
  });


  return (
    <div className="App">
      <Page001 numeroPagina={clearZeros} />
      <Page002 numeroPagina={clearZeros} />

    </div>
  );
}

export default App;
