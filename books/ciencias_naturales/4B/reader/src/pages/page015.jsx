import { isIndexedDBAvailable } from "@firebase/util";
import React from "react";
import InputBox from "../components/InputBox";

import "./page_015.css";

function Page015(props) {
  const pagina = "015";
  var indexInput = 0;
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma";
  const borderColorTabla = "border-color-buzz";
  const bgc_cajas = "bgc-piccolo";

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
                SESIÓN 2
              </div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                ¿Qué sé y qué necesito saber del desafío?
              </div>
            </div>
          </div>
          {/* END CABECERA */}
          <div className="psp-50 pep-50 ptp-20 pbp-120">
            <div className="row">
              <div className="col-md-6 col-9 msp-a mep-a">
                <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                  ¿Qué sé del desafío?
                </div>
                <div className="d-flex text-start">
                  <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma pep-10">
                    1
                  </div>
                  <div className="f-Ubuntu-R fsp-16 ptp-10 psp-10 text-left">
                    Observo situaciones de riesgo y dibujo cómo actuaría como
                    brigadista.
                  </div>
                </div>
                <div className="msp--30 mtp-20 position-relative">
                  <img
                    src="images/page_015/img_002.jpg"
                    className="w-100 mxwp-350"
                    alt=""
                  />

                  <img
                    src="images/page_015/img_004.svg"
                    className="position-absolute zi1 top-100 start-50 mtp--20"
                    alt=""
                  />
                </div>

                <div className="mtp--10 position-relative ptp-50">
                  <div className="w-100 border-style-solid border-1 position-relative rounded-p-20 psp-20 pep-20 ptp-30 pbp-10">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 w-100 min-hp-400" />
                  </div>
                  <img src="images/page_015/anillado.png" className="position-absolute translate-middle zi2 top-0 start-500 msp-0 mtp-50 w-90" alt="" />
                  <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-180 zindex-1"><img src={"images/page_" + pagina + "/img_008.png"} className="wp-60" alt="" /></div>
                </div>
              </div>

              <div className="col-md-6 col-9 msp-a mep-a ptp-20">
                <div className="mtp-30 position-relative">
                  <img
                    src="images/page_015/img_003.jpg"
                    className="w-100 mxwp-350"
                    alt=""
                  />
                  <img
                    src="images/page_015/img_005.svg"
                    className="position-absolute zi1 top-100 start-50 mtp--20"
                    alt=""
                  />
                </div>
                <div className="mtp--10 position-relative">
                  <div className="mtp--10 position-relative ptp-50">
                    <div className="w-100 border-style-solid border-1 position-relative rounded-p-20 psp-20 pep-20 ptp-30 pbp-10">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 w-100 min-hp-400" />
                    </div>
                    <img src="images/page_015/anillado.png" className="position-absolute translate-middle zi2 top-0 start-500 msp-0 mtp-50 w-90" alt="" />
                    <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-80 zindex-1"><img src={"images/page_" + pagina + "/img_007.png"} className="hp-140" alt="" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* PIE DE PAGINA */}
          <div
            className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2"
            style={{ bottom: 70, right: 0 }}
          >
            <div
              className="f-Ubuntu-M fsp-10 position-absolute mbp-60"
              style={{ transform: `rotate(270deg)`, color: "dark" }}
            >
              ABP &copy; SM
            </div>
            <div className="bgc-jawa wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>
          <div
            className="row position-absolute caja-flotante2 p-0 m-0 align-items-end"
            style={{ bottom: 0 }}
          >
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-7 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_planificacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_investigacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>
          {/* FIN PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page015;
