import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_033.css";

function Page033(props) {
  const pagina = "033";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v1 hp-80 bgc-android18"></div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-30 psp-60 pep-60">
            <div className="f-Ubuntu-M fsp-20 color-android18 text-start">
            La importancia de un plan de seguridad
            </div>
          </div>
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <img src="images/page_033/img_001.svg" className="hp-20 mtp-15 msp--10 pep-10" alt=""/>
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                5
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
              Comparamos el plan de seguridad del colegio con lo leído en la revista. Luego, lo relacionamos con lo que esperamos de la brigada y su misión.
              </div>
              <img src="images/page_033/img_002.svg" className="hp-40 mtp-20" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page033;
