import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_029.css";

function Page029(props) {
  const pagina = "029";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-v1 hp-80 bgc-android18"></div>
          <div className="ptp-10 container-titulo-global mbp-0">
            <div className="d-flex">
              <img
                className="hp-20 align-center mt-3 me-2 mb-2"
                src="images/page_029/img_001.svg"
                alt=""
              />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                5
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Selecciono una situación de riesgo y propongo acciones que
                podría realizar la brigada.
              </div>
            </div>
          </div>

          <div className="row container-row m-0 psp-60 pep-60">
            <div className="">
              <div className="row">
                <div className="col-md-12 col-sm-12 position-relative ">
                <div className="position-absolute top-0 start-100 translate-middle visible-768 zindex-1 msp--10 mtp-50">
                    <img
                      src="images/page_029/img_002.png"
                      className=""
                      alt=""
                    />
                  </div>
                  <div className="bgc-white exterior-caja-v1 border-style-solid bgc-azuka border-color-android18 border-1 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                    <div className="d-flex interior-caja-v1 bgc-white text-start min-hp-0">
                      <div className="w-100 text-start ">
                        Situación de riesgo:
                      </div>
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-50"
                    />
                  </div>
                </div>

                <div className="col-12 col-md-4 p-1 m-0">
                  <div className=" bgc-shogun border-style-solid border-color-bulma border-1">
                    <div className="f-Ubuntu-L fsp-14 p-2 text-start bgc-white w-100 ">
                      Antes de esta situación de riesgo la brigada podría…
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300 mep-10 msp-10"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4 p-1 m-0">
                  <div className=" bgc-kai border-style-solid border-color-bulma border-1">
                    <div className="f-Ubuntu-L fsp-14 p-2 text-start bgc-white w-100 ">
                      Durante esta situación de riesgo la brigada podría…
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300 mep-10 msp-10"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4 p-1 m-0">
                  <div className=" bgc-shogun border-style-solid border-color-bulma border-1">
                    <div className="f-Ubuntu-L fsp-14 p-2 text-start bgc-white w-100 ">
                      Después de esta situación de riesgo, la brigada podría…
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300 mep-10 msp-10"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ptp-10 container-titulo-global mbp-0">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                6
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Comparto mis propuestas con mi equipo y las evaluamos en
                conjunto.
              </div>
            </div>
          </div>

          <div className="d-flex msp-60 mep-60 mbp-50">
            <div className="row m-0 p-1 bgc-sid rounded-p-20   w-100 ">
            
              <div className="col-sm-12 col-md-12 p-2 position-relative">
              <div className="position-absolute top-100 start-100 translate-middle  zindex-1 msp--100 ">
                    <img
                      src="images/page_029/img_005.png"
                      className="wp-280"
                      alt=""
                    />
                  </div>
                <div className="p-1   w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                  <div className="f-Ubuntu-L fsp-16   mep-10 text-start">
                    Aspectos positivos
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100"
                  />
                </div>
              </div>
              <div className="col-sm-12 col-md-12 p-2 position-relative">
              <div className="position-absolute top-0 start-0 translate-middle visible-768 zindex-1 msp--30 mtp-50">
                    <img
                      src="images/page_029/img_003.png"
                      className=""
                      alt=""
                    />
                  </div>
                <div className="p-1   w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                  <div className="f-Ubuntu-L fsp-16   mep-10 text-start">
                    Aspectos por mejorar
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100"
                  />
                </div>
              </div>
            </div>
            {/* <div className="col-sm-12 col-md-4">
              <div className="d-flex flex-column bgc-white border-style-solid border-1 psp-10 pep-10 ptp-20 pbp-30 mbp-30 min-hp-220">
                <div className="d-flex f-Ubuntu-M fsp-20 psp-10 pep-10 text-center">
                  <div className="f-Ubuntu-M fsp-20 color-dark f-Ubuntu-B w-100 ">
                    Criterios de evaluación
                  </div>
                </div>
                <div className="d-flex f-Ubuntu-R fsp-20 psp-10 pep-10 mtp-10 text-start">
                  <div className="color-android18 f-ccdigitaldelivery-bold  fsp-16 mep-5">
                    <div className="wp-25 hp-25 border-style-solid border-1 border-color-dark bgc-white"></div>
                  </div>
                  <div className="f-Ubuntu-R fsp-16 color-dark f-Ubuntu-B w-100 ">
                    Considera la labor educativa de la brigada.
                  </div>
                </div>
                <div className="d-flex f-Ubuntu-R fsp-20 psp-10 pep-10 mtp-10 text-start">
                  <div className="color-android18 f-ccdigitaldelivery-bold  fsp-16 mep-5">
                    <div className="wp-25 hp-25 border-style-solid border-1 border-color-dark bgc-white"></div>
                  </div>
                  <div className="f-Ubuntu-R fsp-16 color-dark f-Ubuntu-B w-100 ">
                    Es posible de ejecutar por la brigada.
                  </div>
                </div>
                <div className="d-flex f-Ubuntu-R fsp-20 psp-10 pep-10 mtp-10 text-start">
                  <div className="color-android18 f-ccdigitaldelivery-bold  fsp-16 mep-5">
                    <div className="wp-25 hp-25 border-style-solid border-1 border-color-dark bgc-white"></div>
                  </div>
                  <div className="f-Ubuntu-R fsp-16 color-dark f-Ubuntu-B w-100 ">
                    Entrega una asistencia rápida.
                  </div>
                </div>
                <div className="d-flex f-Ubuntu-R fsp-20 psp-10 pep-10 mtp-10 text-start">
                  <div className="color-android18 f-ccdigitaldelivery-bold  fsp-16 mep-5">
                    <div className="wp-25 hp-25 border-style-solid border-1 border-color-dark bgc-white"></div>
                  </div>
                  <div className="f-Ubuntu-R fsp-16 color-dark f-Ubuntu-B ">
                    Otro:
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"
                  />
                </div>
              </div>
            </div> */}
          </div>
          {/* BEGIN PIE DE PAGINA */}
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
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_planificacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_investigacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page029;
