import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";

import "./page_068.css";

function Page068(props) {

  const pagina = "068";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const borderColor = "border-color-saitama"
  const borderColorTabla = "border-color-bobafett"
  const bgc_cajas = "bgc-bobafett";
  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>

          <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                {/* contenido DE PAGINA */}
                <div className="border-style-solid border-color-trunks rounded-p-10 w-100 cb-600 mx-auto bgc-white text-center ptp-10 psp-20 pep-10 mtp-90 position-relative">
                  <img src="images/page_068/img_001.svg" className="position-absolute wp-10 cb-union-a-p68" alt="" />
                  <img src="images/page_068/img_001.svg" className="position-absolute wp-10 cb-union-b-p68" alt="" />
                  <img src="images/page_068/img_002.png" className="position-absolute wp-80 cb-camara-p68 zindex-1" alt="" />
                  <span className="f-Ubuntu-L fsp-15 fw-700">Las tres frases que identifican nuestra brigada son:</span>
                  <div className="d-flex">
                    <div className="justify-content-between h-100 ptp-20">
                    </div>
                    <div className="psp-35 w-100 position-relative">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      <div className="position-absolute top-50 start-0 mtp-10 translate-middle">
                        <div className="hp-20 wp-20 bgc-ken justify-content-center align-items-center d-flex color-white fw-700 fsp-15 mbp-50">
                          1
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-content-between h-100 ptp-20">
                    <div className="psp-35 w-100 position-relative">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      <div className="position-absolute top-50 start-0 mtp-10 translate-middle">
                        <div className="hp-20 wp-20 bgc-ken justify-content-center align-items-center d-flex color-white fw-700 fsp-15 mbp-50">
                          2
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="justify-content-between h-100 ptp-20">
                    <div className="psp-35 w-100 position-relative">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      <div className="position-absolute top-50 start-0 mtp-10 translate-middle">
                        <div className="hp-20 wp-20 bgc-ken justify-content-center align-items-center d-flex color-white fw-700 fsp-15 mbp-50">
                          3
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-style-solid border-color-voldemort rounded-p-10 bgc-white w-100 cb-600 text-start  ms-auto mtp-20 pep-10 psp-10 ptp-10 ptp-20 position-relative">
                  <img src="images/page_068/img_001.svg" className="position-absolute wp-10 cb-union-a-p68" alt="" />
                  <img src="images/page_068/img_001.svg" className="position-absolute wp-10 cb-union-b-p68" alt="" />
                  <img src="images/page_068/img_004.png" className="position-absolute wp-70 cb-calendario-p68" alt="" />
                  <img src="images/page_068/img_003.png" className="position-absolute wp-60 cb-celular-p68" alt="" />
                  <span className="f-Ubuntu-L fsp-15 psp-20 fw-700">Nuestras expectativas antes dar a conocer la brigada son:</span>
                  <div className="text-start psp-10 pep-10" >
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                  </div>
                </div>

                <div className="d-flex flex-column mtp-30 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
                  <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-10">¿Cómo vamos?</div>
                  <div className="d-flex flex-column bgc-white rounded-p-10 psp-10 pep-10 ptp-10 pbp-10 mtp-0 mbp-0">
                    <div className="row p-0 m-0 w-80">
                      <div className="col-12 p-0 m-0 position-relative">
                        <div className="position-absolute top-100 start-100 translate-middle msp-70 mtp-30 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-120" alt="" /></div>
                        <div className="d-flex flex-column">
                          <div className="d-flex align-items-start">
                            <div className="mtp-0 pep-5">
                              <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                            </div>
                            <div className="f-Ubuntu-L fsp-15 ptp-2 text-start"> Las fortalezas de nuestro equipo son:</div>
                          </div>
                          <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea w-100 lhp-35 min-hp-80" />
                          </div>
                        </div>
                      </div>
                      <div className="col-12 p-0 m-0">
                        <div className="d-flex flex-column">
                          <div className="d-flex align-items-start">
                            <div className="mtp-0 pep-5">
                              <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                            </div>
                            <div className="f-Ubuntu-L fsp-15 ptp-2 text-start"> Lo que deberíamos mejorar de nuestro trabajo en equipo es:</div>
                          </div>
                          <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea w-100 lhp-35 min-hp-140" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>


          {/* BEIGN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "white" }}>ABP &copy; SM</div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>






  );
}

export default Page068;
