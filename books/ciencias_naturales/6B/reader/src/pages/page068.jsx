import React from "react";
import ModalVideo from "../components/ModalVideo";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_068.css";

function Page068(props) {

  const pagina = "068";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const bgc_cajas = "bgc-bobafett";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>

          <div className="psp-80 pep-80 ptp-50">

            <div className="bgc-leono rounded-set-20">
              <div className="f-Ubuntu-B fsp-16 color-white text-center py-2 ">Lo más difícil ha sido...</div>
            </div>
            <div className="bgc-white border-style-solid border-2 border-color-leono psp-20 pep-20 ptp-10 pbp-40 rounded-seb-20 position-relative">
              <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180" />
              <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp--70 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-60" alt="" /></div>
            </div>

            <div className="row ">

              <div className="col-md-6 ptp-20 pbp-20 position-relative">
                <div className="bgc-arlo rounded-set-20">
                  <div className="f-Ubuntu-B fsp-16 color-white text-center py-2 ">Lo que más nos ha gustado ha sido...</div>
                </div>
                <div className="bgc-white border-style-solid border-2 border-color-arlo psp-20 pep-20 ptp-10 pbp-40 rounded-seb-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180" />
                </div>
                <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--90 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-70" alt="" /></div>
              </div>

              <div className="col-md-6 ptp-20 pbp-20 position-relative">
                <div className="bgc-rukia rounded-set-20">
                  <div className="f-Ubuntu-B fsp-16 color-white text-center py-2 ">Podemos mejorar en...</div>
                </div>
                <div className="bgc-white border-style-solid border-2 border-color-rukia psp-20 pep-20 ptp-10 pbp-40 rounded-seb-20">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180" />
                </div>
                <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp--60 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div>
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
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-80" />
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
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-80" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="position-absolute top-50 start-100 translate-middle msp--20 mtp--30 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-140" alt="" /></div>
          </div>

          {/* BEIGN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page068;
