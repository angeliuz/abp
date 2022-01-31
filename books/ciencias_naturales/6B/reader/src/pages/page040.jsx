import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_040.css";

function Page040(props) {
  const pagina = "040";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const borderColor = "border-color-android18"
  const borderColorTabla = "border-color-azuka"
  const bgc_cajas = "bgc-azuka";
  return (



    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>

          <div className="d-flex msp-80 mep-80 mtp-80 mbp-10">

            <div className="bgc-bach rounded-p-20 w-100">
              <div className="row w-100 position-relative ptp-50 psp-20">

                <div className="col-md-6 col-12 position-relative pbp-30">
                  <div className="bgc-white border-style-solid border-1 px-3 py-2  rounded-p-30">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea mtp-20 lhp-35 min-hp-200" />
                  </div>
                  <div className="position-absolute top-0 start-0 msp-5 mtp--10 bgc-milk py-2 psp-20 pep-20 f-Ubuntu-R rounded-p-10">
                    Cuando hay que hacer una tarea...
                  </div>
                </div>

                <div className="col-md-6 col-12 position-relative pbp-30">
                  <div className="bgc-white border-style-solid border-1 px-3 py-2  rounded-p-30">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea mtp-20 lhp-35 min-hp-200" />
                  </div>
                  <div className="position-absolute top-0 start-0 msp-5 mtp--10 bgc-windu py-2 psp-20 pep-20 f-Ubuntu-R rounded-p-10">
                    Para tomar las decisiones...
                  </div>
                </div>

                <div className="col-md-6 col-12 position-relative pbp-30">
                  <div className="bgc-white border-style-solid border-1 px-3 py-2  rounded-p-30">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea mtp-20 lhp-35 min-hp-200" />
                  </div>
                  <div className="position-absolute top-0 start-0 msp-5 mtp--10 bgc-goro py-2 psp-20 pep-20 f-Ubuntu-R rounded-p-10">
                    Nos gustaría saber más sobre...
                  </div>
                </div>

                <div className="col-md-6 col-12 position-relative pbp-30">
                  <div className="bgc-white border-style-solid border-1 px-3 py-2  rounded-p-30">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea mtp-20 lhp-35 min-hp-200" />
                  </div>
                  <div className="position-absolute top-0 start-0 msp-5 mtp--10 bgc-sonic py-2 psp-20 pep-20 f-Ubuntu-R rounded-p-10">
                    Quisiéramos hacer...
                  </div>
                </div>

                <div class=" position-absolute top-0 start-50 msp--170">
                  <div className="f-Ubuntu-B color-white mtp--20 bgc-debussy psp-20 pep-20 py-2 rounded-p-20 mxwp-a">¿Cómo trabajamos en equipo?</div>
                </div>
                <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-20 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-90" alt="" /></div>
                <div className="position-absolute top-100 start-100 translate-middle msp--10 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-90" alt="" /></div>
                <div className="position-absolute top-100 start-0 translate-middle msp-20 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-40 mtp--20" alt="" /></div>
              </div>
            </div>
          </div>

          <div class="psp-20 pep-20 ptp-30 pbp-50">
            <div className="d-flex flex-column global-margin mtp-0 mbp-20 psp-0 pep-30 ptp-0 pbp-0 position-relative">
              <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-10">¿Cómo vamos?</div>
              <div className="d-flex flex-column bgc-white rounded-p-10 psp-10 pep-10 ptp-10 pbp-10 mtp-0 mbp-0">
                <div className="row p-0 m-0 w-100">
                  <div className="col-12 p-0 m-0">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-start">
                        <div className="mtp-0 pep-5">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                        </div>
                        <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">¿Nos involucramos en la realización de las tareas?</div>
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
                        <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">¿Logramos acuerdos y tomamos decisiones de manera compartida?</div>
                      </div>
                      <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp--110 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-100" alt="" /></div>

            </div>
          </div>

          {/* PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Page040;
