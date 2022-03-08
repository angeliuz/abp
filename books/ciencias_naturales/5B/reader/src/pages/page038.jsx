import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_038.css";

function Page038(props) {
  const pagina = "038";
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

            <div className="w-100">
              <div className="row w-100 position-relative ptp-10 psp-20">

                <div className="col-md-6 col-12 position-relative pbp-30">
                <div className="position-absolute top-50 start-0 translate-middle zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-60" alt="" /></div>
                <div className="bgc-white border-style-solid border-1 px-3 py-2  rounded-p-30 f-Ubuntu-B fsp-15">
                  <div className="d-flex flex-column position-relative w-100 text-start ">
                  Podemos mejorar en…
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="f-Ubuntu-L p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                  </div>
                  </div>
                 
                </div>

                <div className="col-md-6 col-12 position-relative pbp-30">
                <div className="position-absolute top-50 start-100 translate-middle mtp--30 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-50" alt="" /></div>
                  <div className="bgc-white border-style-solid border-1 px-3 py-2  rounded-p-30 f-Ubuntu-B fsp-15">
                  <div className="d-flex flex-column position-relative w-100 text-start ">
                  Hasta ahora nos ha encantado…
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="f-Ubuntu-L p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                  </div>
                  </div>
                 
                </div>

                <div className="col-md-6 col-12 position-relative pbp-30">
                <div className="position-absolute top-0 start-0 translate-middle mtp-40 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-40 mtp--20" alt="" /></div>
                <div className="bgc-white border-style-solid border-1 px-3 py-2  rounded-p-30 f-Ubuntu-B fsp-15">
                  <div className="d-flex flex-column position-relative w-100 text-start ">
                  Nos gustaría saber más sobre…
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="f-Ubuntu-L p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                  </div>
                  </div>
                  
                </div>

                <div className="col-md-6 col-12 position-relative pbp-30">
                <div className="position-absolute top-100 start-100 translate-middle mtp--20 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-80" alt="" /></div>
                <div className="bgc-white border-style-solid border-1 px-3 py-2  rounded-p-30 f-Ubuntu-B fsp-15">
                  <div className="d-flex flex-column position-relative w-100 text-start ">
                  Quisiéramos hacer…
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="f-Ubuntu-L p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                  </div>
                  </div>
                  
                </div>

                
                
                
                
              </div>
            </div>
          </div>

          <div class="psp-20 pep-20 ptp-30 pbp-50">
            <div className="d-flex flex-column global-margin mtp-0 mbp-80 psp-0 pep-30 ptp-0 pbp-0 position-relative">
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
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-570 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 p-0 m-0 position-relative">
                  <div className="position-absolute top-100 start-100 translate-middle mtp-50 msp--90 zindex-1"><img src={"images/page_" + pagina + "/img_008.png"} className="" alt="" /></div>
                  <div className="position-absolute top-100 start-0 translate-middle mtp--20 msp--20 zindex-1"><img src={"images/page_" + pagina + "/img_007.png"} className="wp-50" alt="" /></div>
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-start">
                        <div className="mtp-0 pep-5">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                        </div>
                        <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">¿Llegamos a acuerdos y a decisiones compartidas?</div>
                      </div>
                      <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-570 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              

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

export default Page038;
