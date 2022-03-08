import React from "react";
import InputBox from "../components/InputBox";

import "./page_009.css";

function Page009(props) {

  const pagina = "009";
  var indexInput = 0;

  const etapa = "1"
  const background = "bgc-goten";
  const color = "color-goten";
  const borderColor = "border-color-goten"
  const borderColorTabla = "border-color-genos"
  const bgc_cajas = "bgc-genos";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>


          <div className="d-flex global-margin mtp-30 mbp-0 psp-0 pep-0 ptp-0 pbp-0 f-Ubuntu-R fsp-15">

            <div className="position-relative w-100 mtp-150 mbp-10">
              <div className="psp-20 pep-20 ptp-30 pbp-0 position-relative">
                <div className="fsp-16 f-Ubuntu-R text-start psp-50 pbp-10">Esta página fue completada por:</div>
                <div className={"psp-50 pep-50 ptp-5 pbp-5 bgc-white rounded-p-10 border-style-solid border-1 " + borderColor + " d-flex justify-content-center position-relative"}>
                  <div className="position-absolute top-50 start-100 translate-middle wp-100 msp--30 mtp--10 zindex1"><img src={"images/page_" + pagina + "/img_007.png"} className="w-40" alt="" /></div>
                  <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp--10 zindex1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-80" alt="" /></div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="max-wp-550 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                </div>
              </div>
            </div>
          </div>


          <div className="d-flex global-margin mtp-30 mbp-0 psp-0 pep-0 ptp-0 pbp-0 f-Ubuntu-R fsp-15">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-20 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-80" alt="" /></div>
                <div className="border-style-solid border-2 border-color-white rounded-p-10">
                  <div className="d-flex flex-column bgc-white  rounded-p-10">
                    <div className="psp-10 pep-10 ptp-10 text-center">
                      Nuestro equipo se llama:
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-120" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-30 mbp-0 psp-0 pep-0 ptp-0 pbp-0 f-Ubuntu-R fsp-15">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-0 translate-middle msp-0 mtp-5 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-80" alt="" /></div>
                <div className="border-style-solid border-2 border-color-white rounded-p-10">
                  <div className="d-flex flex-column bgc-white  rounded-p-10">
                    <div className="psp-10 pep-10 ptp-10 text-center">
                      Lo formamos:
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-120" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-30 mbp-0 psp-0 pep-0 ptp-0 pbp-0 f-Ubuntu-R fsp-15">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-80" alt="" /></div>
                <div className="border-style-solid border-2 border-color-white rounded-p-10">
                  <div className="d-flex flex-column bgc-white  rounded-p-10">
                    <div className="psp-10 pep-10 ptp-10 text-center">
                      Nos comprometemos a:
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-120" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-30 mbp-100 psp-0 pep-0 ptp-0 pbp-0 f-Ubuntu-R fsp-15">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-0 translate-middle msp-20 mtp-10 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-50" alt="" /></div>
                <div className="border-style-solid border-2 border-color-white rounded-p-10">
                  <div className="d-flex flex-column bgc-white  rounded-p-10">
                    <div className="psp-10 pep-10 ptp-10 text-center">
                      Reflejamos nuestro compromiso con nuestras firmas:
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-120" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BEIGN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>

  );
}

export default Page009;
