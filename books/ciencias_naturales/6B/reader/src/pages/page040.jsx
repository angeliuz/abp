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

          <div className="d-flex msp-60 mep-60 mtp-80 mbp-10">
            <div className="row p-0 m-0">
              <div className="col-12 col-md-3 position-relative"> </div>
              {/* BEGIN EJERCICIO 1 */}

              <div className="row d-flex mbp-70 w-100 mx-auto position-relative">
                <div className="col-sm-12 col-md-6 mbp-10 position-relative">
                  <div className="text-start w-100 bgc-white rounded-p-10 t-shadow ">
                    <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp--5 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-30" alt="" /></div>
                    <div className="position-absolute top-0 start-100 translate-middle msp--20 mtp-15 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-30" alt="" /></div>
                    <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp--5 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-60" alt="" /></div>
                    <div className="hp-50 pep-20 psp-20 max-wp-260 ptp-30 pbp-10 d-flex justify-content-start align-items-center">
                      Lo que más nos gustó de esta etapa fue:
                    </div>
                    <div className="psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-400" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6 position-relative">
                  <div className="text-start w-100 bgc-white rounded-p-10 border-3 border-style-solid border-color-wagner">
                    <div className="position-absolute top-0 start-0 translate-middle msp-50 mtp--15 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_004.svg"} className="wp-10" alt="" /></div>
                    <div className="position-absolute top-0 start-100 translate-middle msp--50 mtp--15 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_004.svg"} className="wp-10" alt="" /></div>
                    <div className="position-absolute top-0 start-50 translate-middle msp-30 mtp-20 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-30" alt="" /></div>
                    <div className="hp-50 pep-20 psp-20 max-wp-200 ptp-30 pbp-10 d-flex justify-content-start align-items-center">
                      Nos interesa seguir aprendiendo sobre:
                    </div>
                    <div className="psp-15 pep-15">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-400" />
                    </div>
                  </div>
                </div>
              </div>


              {/* BEGIN EJERCICIO 2 */}
              <div className="f-pixilate-bold mtp-50 fsp-18 lh-sm text-start mbp-5 mtp-50">¿Cómo vamos?</div>
              <div className="position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp--60 mtp--40 visible-768"><img src="images/page_040/img_005.png" className="wp-80 " alt="" /></div>
              </div>
              <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                  <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                    <img src="images/generales/flecha_e3.svg" className="mep-5 wp-15" alt="" />
                    <span>Lo que podemos mejorar como equipo es:</span>
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                  <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start position-relative">
                    <div className="position-absolute top-100 start-100 translate-middle msp--45 mtp-40 visible-768"><img src="images/page_040/img_007.png" className="wp-120 " alt="" /></div>
                    <div className="position-absolute top-100 start-0 translate-middle msp-5 mtp-100 visible-768"><img src="images/page_040/img_009.png" className="wp-50 " alt="" /></div>
                    <img src="images/generales/flecha_e3.svg" className="mep-5 wp-15" alt="" />
                    <span>Lo que mejor nos ha resultado en el trabajo en equipo es:</span>
                  </div>
                  <div className="pep-70">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
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

export default Page040;
