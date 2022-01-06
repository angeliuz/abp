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


function App() {
  const dokenArray = getUrlParameter("doken").split([',']);
  console.log(dokenArray[2]);

  function pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
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
      <Page005 />
      <Page006 />
      <Page007 />
      <Page008 />
      <Page009 />
      <Page010 />
      <Page011 />
      <Page012 />
      <Page013 />
      <Page014 />
      <Page015 />
    </div>
  );
}

export default App;
