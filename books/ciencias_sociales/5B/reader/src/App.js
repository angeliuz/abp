import React, { useEffect } from "react";
import "./App.css";
import "./assets/css/colors.css";
import "./assets/css/helpers.css";
import "./assets/css/global.css";
import "./assets/css/fonts.css";

import Page005 from "./pages/page005";
import Page006 from "./pages/page006";
import Page007 from "./pages/page007";
import Page008 from "./pages/page008";
import Page009 from "./pages/page009";
import Page010 from "./pages/page010";
import Page011 from "./pages/page011";
import Page012 from "./pages/page012";
import Page013 from "./pages/page013";
import Page014 from "./pages/page014";
import Page015 from "./pages/page015";
import Page016 from "./pages/page016";
import Page017 from "./pages/page017";
import Page018 from "./pages/page018";
import Page019 from "./pages/page019";
import Page020 from "./pages/page020";
import Page021 from "./pages/page021";
import Page022 from "./pages/page022";
import Page023 from "./pages/page023";
import Page024 from "./pages/page024";


function App() {
  const dokenArray = getUrlParameter("doken").split([',']);
  console.log(dokenArray[2]);

  function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }
  // clear zeros before
  function clearZeros(num) {
      var num = num.toString();
      var num = num.replace(/^0+/, '');
      return num;
  }

  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(window.location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };
  
  function goToPage(){    
    document.getElementById('page_'+pad(dokenArray[2], 3)).scrollIntoView();
  }
  
  useEffect(() => {
    goToPage();
  });
  

  return (
    <div className="App">
      <Page005 numeroPagina={clearZeros} />
      <Page006 numeroPagina={clearZeros} />
      <Page007 numeroPagina={clearZeros} />
      <Page008 numeroPagina={clearZeros} />
      <Page009 numeroPagina={clearZeros} />
      <Page010 numeroPagina={clearZeros} />
      <Page011 numeroPagina={clearZeros} />
      <Page012 numeroPagina={clearZeros} />
      <Page013 numeroPagina={clearZeros} />
      <Page014 numeroPagina={clearZeros} />
      <Page015 numeroPagina={clearZeros} />
      <Page016 numeroPagina={clearZeros} />
      <Page017 numeroPagina={clearZeros} />
      <Page018 numeroPagina={clearZeros} />
      <Page019 numeroPagina={clearZeros} />
      <Page020 numeroPagina={clearZeros} />
      <Page021 numeroPagina={clearZeros} />
      <Page022 numeroPagina={clearZeros} />
      <Page023 numeroPagina={clearZeros} />
      <Page024 numeroPagina={clearZeros} />
    </div>
  );
}

export default App;
