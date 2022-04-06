import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

import "./page_054.css";

function Page054(props) {

  const pagina = "054";
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

          <div className="d-flex global-margin mtp-50 mbp-0 psp-0 pep-0 ptp-0 pbp-0 f-Ubuntu-R fsp-15">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 mbp-20 position-relative text-start">
                Lo más difícil de esta etapa fue...
              </div>
              <div className="col-6 p-0 m-0 position-relative text-start">
                <div className="d-flex flex-column w-100 bgc-rain rounded-p-20 psp-20 pep-20 ptp-20 pbp-20 position-relative">
                <div className="position-absolute top-50 start-100 translate-middle msp-10 mtp-0  zindex-1"><img src={"images/page_" + pagina + "/img_002.svg"} className="wp-30" alt="" /></div>
                  <div className="position-relative msp-0 mep-0 mbp-10 psp-30 pep-10 ptp-10 pbp-10 rounded-p-10 border-style-solid border-1 border-color-white bgc-chitara f-Ubuntu-L fsp-14">
                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 zindex-1">
                      <div className="wp-30 hp-30">
                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                    </div>
                    Seleccionar la idea que desarrollaremos en equipo.
                  </div>
                  <div className="position-relative msp-0 mep-0 mbp-10 psp-30 pep-10 ptp-10 pbp-10 rounded-p-10 border-style-solid border-1 border-color-white bgc-chitara f-Ubuntu-L fsp-14">
                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 zindex-1">
                      <div className="wp-30 hp-30">
                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                    </div>
                    Organizar y designar el trabajo que realiza cada uno.
                  </div>
                  <div className="position-relative msp-0 mep-0 mbp-10 psp-30 pep-10 ptp-10 pbp-10 rounded-p-10 border-style-solid border-1 border-color-white bgc-chitara f-Ubuntu-L fsp-14">
                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 zindex-1">
                      <div className="wp-30 hp-30">
                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                    </div>
                    Reconocer los pasos para construir el modelo, la infografía o las decoraciones.
                  </div>
                  <div className="position-relative msp-0 mep-0 mbp-10 psp-30 pep-10 ptp-10 pbp-10 rounded-p-10 border-style-solid border-1 border-color-white bgc-chitara f-Ubuntu-L fsp-14">
                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 zindex-1">
                      <div className="wp-30 hp-30">
                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                    </div>
                    Construir o confeccionar el modelo, la infografía o las decoraciones.
                  </div>
                </div>
              </div>
              <div className="col-6 p-0 m-0 position-relative text-start d-flex center-center">
                <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-30 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-60" alt="" /></div>
                <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp--60 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div>

                <div className="d-flex msp-10 mep-10 mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0 w-100 psp-20">
                  <div className="row p-0 m-0 w-100">
                    <div className="col-12 p-0 m-0 position-relative">
                      <div className="border-style-solid border-2 border-color-rain">
                        <div className="d-flex flex-column bgc-white">
                          <div className="psp-10 pep-10 ptp-10 text-start">
                            Porque...
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-200 max-wp-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column global-margin mtp-30 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-10 w-100">¿Cómo voy?</div>
            <div className="row p-0 m-0 w-100">
              <div className="col-6 p-0 m-0 position-relative">
                <div className="d-flex flex-column  mtp-0 mbp-20 psp-0 pep-10 ptp-0 pbp-0">
                  <div className="d-flex flex-column bgc-white rounded-p-10 psp-10 pep-10 ptp-10 pbp-10 mtp-0 mbp-0 position-relative">
                  <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--20 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-50" alt="" /></div>
                    <div className="row p-0 m-0 w-100">
                      <div className="col-12 p-0 m-0">
                        <div className="d-flex flex-column">
                          <div className="d-flex align-items-start">
                            <div className="mtp-0 pep-5">
                              <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                            </div>
                            <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">Para nosotros, lo más fácil de trabajar en equipo es...</div>
                          </div>
                          <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="w-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-220" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

              </div>
              <div className="col-6 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-40" alt="" /></div>
                <div className="d-flex flex-column  mtp-0 mbp-20 psp-10 pep-0 ptp-0 pbp-0">

                  <div className="d-flex flex-column bgc-white rounded-p-10 psp-10 pep-10 ptp-10 pbp-10 mtp-0 mbp-0">
                    <div className="row p-0 m-0 w-100">
                      <div className="col-12 p-0 m-0">
                        <div className="d-flex flex-column">
                          <div className="d-flex align-items-start">
                            <div className="mtp-0 pep-5">
                              <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                            </div>
                            <div className="f-Ubuntu-L fsp-15 ptp-2 text-start"> Para nosotros, lo más difícil de trabajar en equipo es...</div>
                          </div>
                          <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="w-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-220" />
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <img src={"images/page_" + pagina + "/img_007.png"} className="hp-180" alt="" />
              </div>
            </div>
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

export default Page054;
