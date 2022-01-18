import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_026.css";

function Page026(props) {
  const pagina = "026";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-v1 hp-80 bgc-android18"></div>

          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_023/img_005.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo la revista. Luego, planteo una palabra, una idea y una frase
                relacionadas con los temas mencionados.
              </div>
              {/* <img src="images/page_023/img_003.svg" className="cambio hp-50 text-end mtp-0 psp-10 pep-40"  alt=""  /> */}
              <ModalBook
                id={"p" + pagina + "_book" + (indexInput += 1)}
                image="images/page_026/img_002.svg"
                clasesImagen="hp-40 text-center mtp-15 msp-5"
                className="p-0 px-0"
              />
            </div>
          </div>

          <div className="msp-80 mep-80">
            <div className="row  row-container-26-1">
              <div className="col-md-12 col-sm-12 position-relative">
                <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-white border-1 w-100 p-2 f-Ubuntu-R fsp-15 mbp-20 mtp-20 ">
                  <div className="d-flex interior-caja-v1  text-start min-hp-0">
                    <div className="w-100 text-start">Palabra:</div>
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35"
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6 position-relative">
                <div className="position-absolute top-0 start-0 translate-middle wp-100 msp--30 visible-695">
                  <img src="images/page_026/img_001.png" className="" />
                </div>
                <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-white border-1 w-100 p-2 f-Ubuntu-R fsp-15 mbp-20">
                  <div className="d-flex interior-caja-v1  text-start min-hp-0">
                    <div className="w-100 text-start">
                      Idea:
                    </div>
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-white border-1 w-100 p-2 f-Ubuntu-R fsp-15 mbp-20">
                  <div className="d-flex interior-caja-v1  text-start min-hp-0">
                    <div className="w-100 text-start">
                      Frase:
                    </div>
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140"
                  />
                </div>
              </div>
            </div>

            <div className="row  row-container-26-2 ">
              <div className="col-md-12 col-sm-12 position-relative">
                <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-white border-1 w-100 p-2 f-Ubuntu-R fsp-15 mbp-20 mtp-20 ">
                  <div className="d-flex interior-caja-v1  text-start min-hp-0">
                    <div className="w-100 text-start">Palabra:</div>
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35"
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6 position-relative">
                
                <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-white border-1 w-100 p-2 f-Ubuntu-R fsp-15 mbp-20">
                  <div className="d-flex interior-caja-v1  text-start min-hp-0">
                    <div className="w-100 text-start">
                      Idea:
                    </div>
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
              <div className="position-absolute top-50 start-100 translate-middle wp-100 msp--80 visible-695">
                  <img src="images/page_026/img_003.png" className="" />
                </div>
                <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-white border-1 w-100 p-2 f-Ubuntu-R fsp-15 mbp-20">
                  <div className="d-flex interior-caja-v1  text-start min-hp-0">
                    <div className="w-100 text-start">
                      Frase:
                    </div>
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140"
                  />
                </div>
              </div>
            </div>

            <div className="row  row-container-26-3">
              <div className="col-md-12 col-sm-12 position-relative">
                <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-white border-1 w-100 p-2 f-Ubuntu-R fsp-15 mbp-20 mtp-20 ">
                  <div className="d-flex interior-caja-v1  text-start min-hp-0">
                    <div className="w-100 text-start">Palabra:</div>
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35"
                  />
                </div>
              </div>

              <div className="col-md-6 col-sm-6 position-relative">
                <div className="position-absolute top-100 start-0 translate-middle wp-100 mtp--80 visible-695">
                  <img src="images/page_026/img_004.png" className="" />
                </div>
                <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-white border-1 w-100 p-2 f-Ubuntu-R fsp-15 mbp-20">
                  <div className="d-flex interior-caja-v1  text-start min-hp-0">
                    <div className="w-100 text-start">
                      Idea:
                    </div>
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-6">
                <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-white border-1 w-100 p-2 f-Ubuntu-R fsp-15 mbp-20">
                  <div className="d-flex interior-caja-v1  text-start min-hp-0">
                    <div className="w-100 text-start">
                      Frase:
                    </div>
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140"
                  />
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

export default Page026;
