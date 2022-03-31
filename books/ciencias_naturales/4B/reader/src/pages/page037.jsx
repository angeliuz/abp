import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

import "./page_037.css";

function Page037(props) {
  const pagina = "037";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-android18 d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja wp-150 text-center fsp-24 f-IntroRustG-Base color-balrog">
                SESIÓN 8
              </div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                ¿Qué hacemos con todo lo investigado?
              </div>
            </div>

            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90"></div>
          </div>

          <div className="ptp-30 psp-60 pep-60 ">
            <div className="f-Ubuntu-M fsp-20 color-android18 text-start">
              ¿Qué sabemos del desafío?
            </div>
          </div>
          <div className="container-titulo-global mbp-20">
            <div className="d-flex position-relative">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start col-10">
                Con mi equipo, recordamos lo que aprendimos en las sesiones
                anteriores.
              </div>
              <img
                src="images/page_037/img_002.png"
                className="hp-80 position-absolute top-0 start-100 msp--60 mtp--20"
                alt=""
              />
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="d-flex msp-60 mep-60 mbp-140 position-relative">
            <div className="row m-0 p-2 bgc-trunks rounded-p-20 w-100 ">
              <div className="col-md-6 col-12 position-relative">
                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-start">
                      Lo que sabemos sobre los riesgos y desastres naturales es:
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 position-relative">
                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-start">
                      Lo que sabemos sobre las situaciones de emergencia es:
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 position-relative">
                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-start">
                      Lo que sabemos sobre los insumos de seguridad es:
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12 position-relative">
                <div className="d-flex mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-start">
                      Lo que sabemos sobre el plan de seguridad del colegio es:
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 w-100 bgc-white rounded-p-20">
                <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-start">
                  ¿Qué tan preparados estamos para enfrentar una emergencia?
                </div>
                <div className=" p-2 diline-res justify-content-between">
                  <div className="d-flex">
                    <div className="wp-30 hp-30">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="f-Ubuntu-L psp-15 pbp-10 text-start">
                      Muy preparados.
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="wp-30 hp-30">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="f-Ubuntu-L psp-15 pbp-10 text-start">
                      Aún nos falta.
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="wp-30 hp-30">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                    </div>
                    <div className="f-Ubuntu-L psp-15 pbp-10 text-start">
                      Necesitamos ayuda.
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-absolute top-100 start-0">
                <img src="images/page_037/img_003.png" className="hp-80" alt="" />
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
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>
          <div
            className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end"
            style={{ bottom: 0 }}
          >
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_planificacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-7 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_investigacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page037;
