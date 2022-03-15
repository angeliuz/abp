import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_030.css";

function Page030(props) {
  const pagina = "030";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-v2 bgc-android18 d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja wp-150 text-center fsp-24 f-IntroRustG-Base color-balrog">
                SESIÓN 6
              </div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                El plan de seguridad del colegio!
              </div>
            </div>

            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90"></div>
          </div>

          <div className="ptp-30 psp-60 pep-60">
            <div className="f-Ubuntu-M fsp-20 color-android18 text-start">
              Me anticipo a la lectura
            </div>
          </div>
          <div className="container-titulo-global mbp-20">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo el título del texto que me entregaron y las
                <br /> palabras destacadas. Luego, respondo.
              </div>
              {/* <img src="images/page_023/img_003.svg" className="cambio hp-50 text-end mtp-0 psp-10 pep-40"  alt=""  /> */}
            </div>
          </div>

          <div className="global-margin mtp-30 mbp-100">
            <div className="row mx-4 position-relative">
              <div className="col-sm-12 col-md-6 position-relative mbp-20">
                <div className="position-absolute top-0 start-0 translate-middle  zindex-1 mtp-10 msp-100 ">
                  <img
                    src="images/page_030/img_003.png"
                    className="wp-200"
                    alt=""
                  />
                </div>

                <div className="mbp-20 mtp-10 ">
                  <div className=" position-relative  border-style-solid border-color-saitama border-1 min-hp-300 psp-10 pep-10 ptp-20 pbp-10 rounded-tbe-20">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-270" />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 position-relative mbp-20">
                <div className="position-absolute top-0 start-0 translate-middle  zindex-1 mtp-10 msp-100 ">
                  <img
                    src="images/page_030/img_004.png"
                    className="wp-200"
                    alt=""
                  />
                </div>

                <div className="mbp-20 mtp-10 ">
                  <div className=" position-relative  border-style-solid border-color-bulma border-1 min-hp-300 psp-10 pep-10 ptp-20 pbp-10 rounded-tbe-20 ">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-270"
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 position-relative mbp-20">
                <div className="position-absolute top-0 start-0 translate-middle  zindex-1 mtp-15 msp-100 ">
                  <img
                    src="images/page_030/img_006.png"
                    className="wp-200"
                    alt=""
                  />
                </div>

                <div className="mbp-20 mtp-10 ">
                  <div className=" position-relative  border-style-solid border-color-pidgey border-1 min-hp-300 psp-10 pep-10 ptp-30 pbp-10 rounded-tbe-20 ">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-270"
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 position-relative mbp-20">
                <div className="position-absolute top-0 start-0 translate-middle  zindex-1 mtp-10 msp-90 ">
                  <img
                    src="images/page_030/img_007.png"
                    className="wp-170"
                    alt=""
                  />
                </div>

                <div className="mbp-20 mtp-10 ">
                  <div className=" position-relative  border-style-solid border-color-pikachu border-1 min-hp-300 psp-10 pep-10 ptp-30 pbp-10 rounded-tbe-20  ">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-270"
                    />
                  </div>
                </div>
              </div>
            </div>
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
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>
  );
}

export default Page030;
