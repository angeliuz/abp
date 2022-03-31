import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_032.css";

function Page032(props) {
  const pagina = "032";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v1 hp-80 bgc-android18"></div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-30 psp-60 pep-60">
            <div className="f-Ubuntu-M fsp-20 color-android18 text-start">
              Después de la lectura
            </div>
          </div>
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                4
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Comparo mis respuestas anteriores.
              </div>
            </div>
          </div>
          <div className="ptp-30 psp-80 pep-60 pbp-100">
            <div className="bgc-white border-style-solid border-2 border-color-ash rounded-tbe-20 position-relative text-start ptp-20 psp-20 pep-20">
            <div className="position-absolute top-0 start-100 translate-middle ">
                  <img
                    src="images/page_032/img_001.png"
                    className="wp-"
                    alt=""
                  />
                </div>
              <div className="mtp--35 msp--40 position-absolute">
                <img
                  src="images/page_032/img_003.svg"
                  className=" hp-40"
                  alt=""
                />
                <div className="f-Ubuntu-M psp-20 mtp--35 color-white">
                  ¿Qué significaba el título?
                </div>
              </div>
              <InputBox
                id={"p" + pagina + "_input" + (indexInput += 1)}
                className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120"
              />
            </div>
            <div className="ptp-30"></div>
            <div className="bgc-white border-style-solid border-2 border-color-voldemort rounded-tbe-20 position-relative text-start ptp-20 psp-20 pep-20">
              <div className="mtp--35 msp--40 position-absolute">
                <img
                  src="images/page_032/img_004.svg"
                  className=" hp-45"
                  alt=""
                />
                <div className="f-Ubuntu-M psp-20 mtp--38 color-white">
                  ¿De qué trataba el texto?
                </div>
              </div>
              <InputBox
                id={"p" + pagina + "_input" + (indexInput += 1)}
                className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120"
              />
            </div>
            <div className="ptp-30"></div>
            <div className="bgc-white border-style-solid border-2 border-color-freezer rounded-tbe-20 position-relative text-start ptp-40 psp-20 pep-20">
              <div className="mtp--55 msp--40 position-absolute">
                <img
                  src="images/page_032/img_005.svg"
                  className=" hp-60"
                  alt=""
                />
                <div className="f-Ubuntu-M psp-20 mtp--57 color-white wp-240">
                  ¿Qué información tengo del texto después de leerlo?
                </div>
              </div>
              <InputBox
                id={"p" + pagina + "_input" + (indexInput += 1)}
                className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120"
              />
            </div>
            <div className="ptp-30"></div>
            <div className="bgc-white border-style-solid border-2 border-color-milk rounded-tbe-20 position-relative text-start ptp-25 psp-20 pep-20">
              <div className="mtp--40 msp--40 position-absolute">
                <img
                  src="images/page_032/img_006.svg"
                  className=" hp-50"
                  alt=""
                />
                <div className="f-Ubuntu-M psp-20 mtp--38 color-white">
                  ¿Qué sé ahora?
                </div>
              </div>
              <InputBox
                id={"p" + pagina + "_input" + (indexInput += 1)}
                className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120"
              />
            </div>
            <div className="ptp-30"></div>
            <div className="bgc-white border-style-solid border-2 border-color-pikachu rounded-tbe-20 position-relative text-start ptp-40 psp-20 pep-20">
            <div className="position-absolute top-100 start-0 translate-middle msp--20 mtp--70 ">
                  <img
                    src="images/page_032/img_002.png"
                    className="wp-"
                    alt=""
                  />
                </div>
              <div className="mtp--55 msp--40 position-absolute">
                <img
                  src="images/page_032/img_007.svg"
                  className=" hp-40"
                  alt=""
                />
                <div className="f-Ubuntu-M psp-20 mtp--33 color-white wp-240">
                  ¿Qué más me gustaría saber?
                </div>
              </div>
              <InputBox
                id={"p" + pagina + "_input" + (indexInput += 1)}
                className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120"
              />
            </div>
            <div className="pbp-70"></div>
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
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
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
          {/*FIN PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page032;
