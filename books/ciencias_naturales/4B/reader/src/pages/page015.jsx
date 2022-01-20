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
                SESIÓN 2
              </div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                ¿Qué sé y qué necesito saber del desafío?
              </div>
            </div>
          </div>
          {/* END CABECERA */}
          <div className="psp-50 pep-50 ptp-20 pbp-60">
            <div className="row">
              <div className="col-md-6 col-12">
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

                <div className="mtp--10 position-relative">
                  <img
                    src="images/page_015/img_006.svg"
                    className="mxwp-350 w-100"
                    alt=""
                  />
                  <div className="position-absolute top-50 start-50 translate-middle mtp-10 zi1 mxwp-350 w-90">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-350"
                    />
                  </div>
                  <img
                    src="images/page_015/img_008.png"
                    className="position-absolute translate-middle tf-crayones zi2 top-50 start-0 "
                    alt=""
                  />
                </div>
              </div>

              <div className="col-md-6 col-12">
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
                  <img
                    src="images/page_015/img_006.svg"
                    className="mxwp-350 w-100"
                    alt=""
                  />
                  <div className="position-absolute top-50 start-50 translate-middle mtp-10 zi1 mxwp-350 w-90">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-350"
                    />
                  </div>
                  <img
                    src="images/page_015/img_007.png"
                    className="position-absolute translate-middle top-0 start-100 tf-mono-15 zi2"
                    alt=""
                  />
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
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_planificacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_investigacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
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