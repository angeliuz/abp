import React from "react";
import ModalVideo from "../components/ModalVideo";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_070.css";

function Page070(props) {

  const pagina = "070";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const bgc_cajas = "bgc-bobafett";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>

          <div className="psp-50 pep-70 ptp-50">




            <div className="d-flex justify-content-start text-start  msp-30 f-Ubuntu-L fsp-16  mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-0">Con nuestra obra de arte, los asistentes a la exposición podrán experimentar… </div>

            <div className="max-wp-640 mx-auto position-relative mtp-20">
              <div className="position-absolute top-0 start-0 translate-middle  mtp-50 visible-768 zindex-10 msp--10"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-50" alt="" /></div>
              {/* <div className="position-absolute top-100 start-100 translate-middle   msp-0 mtp--0 visible-768 zindex-10 msp-20 mtp--20"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-90" alt="" /></div> */}
              <div className="text-center w-100 border-1 border-style-solid border-color-dark rounded-p-10 pbp-15 ptp-15 bgc-white">
                <div className="psp-10 pep-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-290" />
                </div>
              </div>
            </div>



            <div className="d-flex justify-content-start text-start  msp-30 f-Ubuntu-L fsp-16  mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-0">Las tres frases con las que daríamos a conocer nuestra obra de arte son…</div>

            <div className="max-wp-640 mx-auto position-relative mtp-20">
              <div className="position-absolute top-0 start-100 translate-middle   msp-5 mtp--10 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-90" alt="" /></div>
              <div className="position-absolute top-100 start-0 translate-middle   msp-5 mtp-0 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-120" alt="" /></div>
              <div className="text-center w-100 border-1 border-style-solid border-color-dark rounded-p-10 pbp-15 ptp-15 bgc-white">

                <div className="psp-10 pep-10">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-290" />
                </div>
              </div>
            </div>


          </div>

          <div className="d-flex flex-column global-margin mtp-20 mbp-20 psp-20 pep-70 ptp-0 pbp-60 position-relative">
            <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-10">¿Cómo vamos?</div>
            <div className="d-flex flex-column bgc-white rounded-p-10 psp-10 pep-10 ptp-10 pbp-10 mtp-0 mbp-0">
              <div className="row p-0 m-0 w-100">
                <div className="col-12 p-0 m-0">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-start">
                      <div className="mtp-0 pep-5">
                        <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                      </div>
                      <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">Las fortalezas de nuestro equipo son</div>
                    </div>
                    <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                    </div>
                  </div>
                </div>
                <div className="col-12 p-0 m-0">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-start">
                      <div className="mtp-0 pep-5">
                        <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                      </div>
                      <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">Lo que deberíamos mejorar en nuestro trabajo como equipo es</div>
                    </div>
                    <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-absolute top-50 start-100 translate-middle msp--40 mtp--10 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-80" alt="" /></div>
          </div>

          {/* BEIGN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-misty wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page070;
