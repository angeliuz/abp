import { isIndexedDBAvailable } from "@firebase/util";
import React from "react";
import InputBox from "../components/InputBox";

import "./page_015.css";

function Page015(props) {
  const pagina = "015";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-bulma d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-bulma fsp-24 f-IntroRustG-Base">
                SESIÓN 1
              </div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                ¿Qué sé y qué necesito saber del desafío?
              </div>
            </div>
          </div>
          {/* END CABECERA */}
          <div className="psp-50 pep-50 ptp-20">
            <div className="row">
              <div className="col-md-6 col-12 bgc-aqua">
                <div className="d-flex text-start">
                  <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma pep-10">
                    1
                  </div>
                  <div className="f-Ubuntu-R fsp-16 ptp-10 psp-10 text-left">
                    Observo situaciones de riesgo y dibujo cómo actuaría como
                    brigadista.
                  </div>
                </div>
                <div className="msp--20 mtp-20">
                  <img src="images/page_015/img_002.jpg" className="" alt="" />
                  <img
                    src="images/page_015/img_004.svg"
                    className="mtp--40"
                    alt=""
                  />
                </div>
                <div className="">
                  <img src="images/page_015/im"
                </div>
              </div>


              <div className="col-md-6 col-12 bgc-red">
                <div className="mtp--20">
                  <img
                    src="images/page_015/img_003.jpg"
                    className="h-85"
                    alt=""
                  />
                  <img
                    src="images/page_015/img_005.svg"
                    className="mtp--50"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page015;
