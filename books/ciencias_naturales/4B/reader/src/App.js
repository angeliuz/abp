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
import Page025 from "./pages/page025";
import Page026 from "./pages/page026";
import Page027 from "./pages/page027";
import Page028 from "./pages/page028";
import Page029 from "./pages/page029";
import Page030 from "./pages/page030";
import Page031 from "./pages/page031";
import Page032 from "./pages/page032";
import Page033 from "./pages/page033";
import Page034 from "./pages/page034";
import Page035 from "./pages/page035";
import Page036 from "./pages/page036";
import Page037 from "./pages/page037";
import Page038 from "./pages/page038";
import Page041 from "./pages/page041";
import Page042 from "./pages/page042";
import Page043 from "./pages/page043";
import Page044 from "./pages/page044";
import Page045 from "./pages/page045";
import Page046 from "./pages/page046";
import Page047 from "./pages/page047";
import Page048 from "./pages/page048";
import Page049 from "./pages/page049";
import Page050 from "./pages/page050";
import Page051 from "./pages/page051";
import Page052 from "./pages/page052";
import Page053 from "./pages/page053";
import Page056 from "./pages/page056";
import Page057 from "./pages/page057";
import Page058 from "./pages/page058";
import Page059 from "./pages/page059";
import Page060 from "./pages/page060";
import Page061 from "./pages/page061";
import Page062 from "./pages/page062";
import Page063 from "./pages/page063";
import Page064 from "./pages/page064";
import Page065 from "./pages/page065";
import Page066 from "./pages/page066";
import Page067 from "./pages/page067";
import Page068 from "./pages/page068";
import Page069 from "./pages/page069";
import Page070 from "./pages/page070";
import Page071 from "./pages/page071";
import Page072 from "./pages/page072";
import Page073 from "./pages/page073";
import Page074 from "./pages/page074";
import Page075 from "./pages/page075";
import Page076 from "./pages/page076";


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
      <Page025 numeroPagina={clearZeros} />
      <Page026 numeroPagina={clearZeros} />
      <Page027 numeroPagina={clearZeros} />
      <Page028 numeroPagina={clearZeros} />
      <Page029 numeroPagina={clearZeros} />
      <Page030 numeroPagina={clearZeros} />
      <Page031 numeroPagina={clearZeros} />
      <Page032 numeroPagina={clearZeros} />
      <Page033 numeroPagina={clearZeros} />
      <Page034 numeroPagina={clearZeros} />
      <Page035 numeroPagina={clearZeros} />
      <Page036 numeroPagina={clearZeros} />
      <Page037 numeroPagina={clearZeros} />
      <Page038 numeroPagina={clearZeros} />
      <Page041 numeroPagina={clearZeros} />
      <Page042 numeroPagina={clearZeros} />
      <Page043 numeroPagina={clearZeros} />
      <Page044 numeroPagina={clearZeros} />
      <Page045 numeroPagina={clearZeros} />
      <Page046 numeroPagina={clearZeros} />
      <Page047 numeroPagina={clearZeros} />
      <Page048 numeroPagina={clearZeros} />
      <Page049 numeroPagina={clearZeros} />
      <Page050 numeroPagina={clearZeros} />
      <Page051 numeroPagina={clearZeros} />
      <Page052 numeroPagina={clearZeros} />
      <Page053 numeroPagina={clearZeros} />
      <Page056 numeroPagina={clearZeros} />
      <Page057 numeroPagina={clearZeros} />
      <Page058 numeroPagina={clearZeros} />
      <Page059 numeroPagina={clearZeros} />
      <Page060 numeroPagina={clearZeros} />
      <Page061 numeroPagina={clearZeros} />
      <Page062 numeroPagina={clearZeros} />
      <Page063 numeroPagina={clearZeros} />
      <Page064 numeroPagina={clearZeros} />
      <Page065 numeroPagina={clearZeros} />
      <Page066 numeroPagina={clearZeros} />
      <Page067 numeroPagina={clearZeros} />
      <Page068 numeroPagina={clearZeros} />
      <Page069 numeroPagina={clearZeros} />
      <Page070 numeroPagina={clearZeros} />
      <Page071 numeroPagina={clearZeros} />
      <Page072 numeroPagina={clearZeros} />
      <Page073 numeroPagina={clearZeros} />
      <Page074 numeroPagina={clearZeros} />
      <Page075 numeroPagina={clearZeros} />
      <Page076 numeroPagina={clearZeros} />
    </div>
  );
}

export default App;
