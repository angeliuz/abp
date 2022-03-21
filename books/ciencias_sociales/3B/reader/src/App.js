import React, { useEffect, Suspense, lazy } from "react";
import VisibilitySensor from "react-visibility-sensor";

import "./App.css";
import "./assets/css/colors.css";
import "./assets/css/helpers.css";
import "./assets/css/global.css";
import "./assets/css/fonts.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// const Page005 = lazy(() => import("./pages/page005"));
// const Page006 = lazy(() => import("./pages/page006"));
// const Page007 = lazy(() => import("./pages/page007"));
// const Page008 = lazy(() => import("./pages/page008"));
// const Page009 = lazy(() => import("./pages/page009"));
// const Page010 = lazy(() => import("./pages/page010"));
// const Page011 = lazy(() => import("./pages/page011"));
// const Page012 = lazy(() => import("./pages/page012"));
// const Page013 = lazy(() => import("./pages/page013"));
// const Page014 = lazy(() => import("./pages/page014"));
// const Page015 = lazy(() => import("./pages/page015"));
// const Page016 = lazy(() => import("./pages/page016"));
// const Page017 = lazy(() => import("./pages/page017"));
// const Page018 = lazy(() => import("./pages/page018"));
// const Page019 = lazy(() => import("./pages/page019"));
// const Page020 = lazy(() => import("./pages/page020"));
// const Page021 = lazy(() => import("./pages/page021"));
// const Page022 = lazy(() => import("./pages/page022"));
// const Page023 = lazy(() => import("./pages/page023"));
// const Page024 = lazy(() => import("./pages/page024"));
// const Page025 = lazy(() => import("./pages/page025"));
// const Page026 = lazy(() => import("./pages/page026"));
// const Page027 = lazy(() => import("./pages/page027"));
// const Page028 = lazy(() => import("./pages/page028"));
// const Page029 = lazy(() => import("./pages/page029"));
// const Page030 = lazy(() => import("./pages/page030"));
// const Page031 = lazy(() => import("./pages/page031"));
// const Page032 = lazy(() => import("./pages/page032"));
// const Page033 = lazy(() => import("./pages/page033"));
// const Page034 = lazy(() => import("./pages/page034"));
// const Page035 = lazy(() => import("./pages/page035"));
// const Page036 = lazy(() => import("./pages/page036"));
// const Page037 = lazy(() => import("./pages/page037"));
// const Page038 = lazy(() => import("./pages/page038"));
// const Page039 = lazy(() => import("./pages/page039"));
// const Page040 = lazy(() => import("./pages/page040"));
// const Page041 = lazy(() => import("./pages/page041"));
// const Page042 = lazy(() => import("./pages/page042"));
// const Page043 = lazy(() => import("./pages/page043"));
// const Page044 = lazy(() => import("./pages/page044"));
// const Page045 = lazy(() => import("./pages/page045"));
// const Page046 = lazy(() => import("./pages/page046"));
// const Page047 = lazy(() => import("./pages/page047"));
// const Page048 = lazy(() => import("./pages/page048"));
// const Page049 = lazy(() => import("./pages/page049"));
// const Page050 = lazy(() => import("./pages/page050"));
// const Page051 = lazy(() => import("./pages/page051"));
// const Page052 = lazy(() => import("./pages/page052"));
// const Page053 = lazy(() => import("./pages/page053"));
// const Page054 = lazy(() => import("./pages/page054"));
// const Page055 = lazy(() => import("./pages/page055"));
// const Page056 = lazy(() => import("./pages/page056"));
// const Page057 = lazy(() => import("./pages/page057"));
// const Page058 = lazy(() => import("./pages/page058"));
// const Page059 = lazy(() => import("./pages/page059"));
// const Page060 = lazy(() => import("./pages/page060"));




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
import Page039 from "./pages/page039";
import Page040 from "./pages/page040";
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
import Page054 from "./pages/page054";
import Page055 from "./pages/page055";
import Page056 from "./pages/page056";
import Page057 from "./pages/page057";
import Page058 from "./pages/page058";
import Page059 from "./pages/page059";
import Page060 from "./pages/page060";

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

  function cargando() {
    return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-10">
          <div className="page position-relative bgc-white">
            Cargando...
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    goToPage();
  });

  function cargador() {
    return (<div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-10">
        <div className="page position-relative bgc-white">
          Cargando...
        </div>
      </div>
    </div>)
  }

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
      <Page039 numeroPagina={clearZeros} />
      <Page040 numeroPagina={clearZeros} />
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
      <Page054 numeroPagina={clearZeros} />
      <Page055 numeroPagina={clearZeros} />
      <Page056 numeroPagina={clearZeros} />
      <Page057 numeroPagina={clearZeros} />
      <Page058 numeroPagina={clearZeros} />
      <Page059 numeroPagina={clearZeros} />
      <Page060 numeroPagina={clearZeros} />

    </div >
  );
}

export default App;
