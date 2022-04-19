import React, { useEffect } from "react";
import "./App.css";
import "./assets/css/colors.css";
import "./assets/css/helpers.css";
import "./assets/css/global.css";
import "./assets/css/fonts.css";
import "./assets/css/panels.css";

import Page001 from "./pages/page001";
import Page002 from "./pages/page002";
import Page003 from "./pages/page003";
import Page004 from "./pages/page004";
import Page005 from "./pages/page005";
import Page006 from "./pages/page006";
import Page007 from "./pages/page007";
import Page008 from "./pages/page008";
import Page009 from "./pages/page009";

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
    <div className="App position-relative">
      <Page001 numeroPagina={clearZeros} />
      <Page002 numeroPagina={clearZeros} />
      <Page003 numeroPagina={clearZeros} />
      <Page004 numeroPagina={clearZeros} />
      <Page005 numeroPagina={clearZeros} />
      <Page006 numeroPagina={clearZeros} />
      <Page007 numeroPagina={clearZeros} />
      <Page008 numeroPagina={clearZeros} />
      <Page009 numeroPagina={clearZeros} />

      <div className="position-fixed top-100 start-0 msp-10 mtp--90 zindex-1">
        <div className="wp-200 hp-80 bgc-white box-shadow-panels rounded-p-50 d-flex align-items-center psp-20 pep-20">
          <div className="bgc-red wp-50 hp-50">
            <div className="w-100 h-100 bgc-blue d-flex center-center rounded-circle f-Ubuntu-B fsp-20 color-white">WR</div>
          </div>
          <div className="bgc-yellow wp-50 hp-50 flex-grow-1"></div>
        </div>
      </div>

    </div>
  );
}

export default App;
