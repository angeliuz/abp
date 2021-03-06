import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";

import "./page_025.css";

function Page025(props) {
  const pagina = "025";
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
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-android18 d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-balrog fsp-24 f-IntroRustG-Base">
                SESIÓN 4
              </div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                ¡Emergencias escolares!
              </div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90"></div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-30 psp-60 pep-60">
            <div className="f-Ubuntu-M fsp-20 color-android18 text-start">
              ¿Qué pasaría sí...?
            </div>
          </div>
          <div className=" container-titulo-global mbp-∫0">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo la revista y me anticipo a una situación de emergencia.
              </div>
              {
                // <ModalVideo
                //   id={"p" + pagina + "_video" + (indexInput += 1)}
                //   image="images/page_025/img_001.svg"
                //   clasesImagen="hp-40 text-center mtp-10 "
                //   className="p-0 px-1"
                // />
              }
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"80"} image="images/page_025/img_001.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>

          <div className="msp-60 mep-60 mbp-100 mtp-30 bgc-azuka rounded-p-20 border-style-solid border-1 border-color-azuka">
            <div className="row w-100 p-0 m-0">

              <div className="col-md-4 position-relative justify-content-center align-items-center ptp-10 pbp-10 ">
                <div className="d-flex justify-content-center w-100 ">
                  <div className="bgc-bulma w-90 rounded-caja ptp-5 pbp-5 color-white fsp-15 f-pixilate-extrabold ">
                    REALIDAD ACTUAL
                  </div>
                </div>
                <div className="position-absolute flecha-p25 translate-middle msp-3 mtp-0 zindex-1 ">
                  <img src="images/page_025/img_003.svg" className="wp-30 giro90-res" alt="" />
                </div>
                <div className="d-flex flex-column center-center mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 d-flex">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-380" />
                  </div>
                </div>
              </div>

              <div className="col-md-4 position-relative justify-content-center align-items-center ptp-10 pbp-10">
                <div className="position-absolute flecha-p25 translate-middle msp-3 mtp-0 zindex-1 ">
                  <img src="images/page_025/img_002.svg" className="wp-30 giro90-res" alt="" />
                </div>
                <div className="d-flex justify-content-center w-100 ">
                  <div className="bgc-android18 w-90 rounded-caja ptp-5 pbp-5 color-white fsp-15 f-pixilate-extrabold ">
                    ¿QUÉ PASARÍA SI...?
                  </div>
                </div>
                <div className="d-flex flex-column mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 d-flex">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-380" />
                  </div>
                </div>
              </div>

              <div className="col-md-4 position-relative ptp-10 pbp-10">
                <div className="position-absolute top-0 start-100 translate-middle msp-3 mtp-20 msp--50 zindex-1 visible-768">
                  <img src="images/page_025/img_004.png" className=" " alt="" />
                </div>
                <div className="d-flex justify-content-center w-100 ">
                  <div className="bgc-pidgey w-90 rounded-caja ptp-5 pbp-5 color-white fsp-15 f-pixilate-extrabold ">
                    CONSECUENCIAS
                  </div>
                </div>
                <div className="d-flex flex-column mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 d-flex">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-380"
                    />
                  </div>
                </div>
              </div>

              {/* <div className="col-md-4 position-relative justify-content-center align-items-center ptp-10 pbp-10">
                <div className="d-flex justify-content-center w-100 invisible-768 ">
                  <div className="bgc-bulma w-90 rounded-caja ptp-5 pbp-5 color-white fsp-15 f-pixilate-extrabold ">
                    REALIDAD ACTUAL
                  </div>
                </div>
                <div className="position-absolute flecha-p25 translate-middle msp-3 mtp-0 zindex-1 ">
                  <img src="images/page_025/img_003.svg" className="wp-30 giro90-res" alt="" />
                </div>
                <div className="d-flex flex-column center-center mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 d-flex">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-180" />
                  </div>
                </div>
              </div>

              <div className="col-md-4 position-relative justify-content-center align-items-center ptp-10 pbp-10">
                <div className="position-absolute flecha-p25 translate-middle msp-3 mtp-0 zindex-1 ">
                  <img src="images/page_025/img_002.svg" className="wp-30 giro90-res" alt="" />
                </div>
                <div className="d-flex justify-content-center w-100 invisible-768 ">
                  <div className="bgc-android18 w-90 rounded-caja ptp-5 pbp-5 color-white fsp-15 f-pixilate-extrabold ">
                    ¿QUÉ PASARÍA SI...?
                  </div>
                </div>
                <div className="d-flex flex-column mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 d-flex">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-180" />
                  </div>
                </div>
              </div>

              <div className="col-md-4 position-relative ptp-10 pbp-10">
                <div className="d-flex justify-content-center w-100 invisible-768 ">
                  <div className="bgc-pidgey w-90 rounded-caja ptp-5 pbp-5 color-white fsp-15 f-pixilate-extrabold ">
                    CONSECUENCIAS
                  </div>
                </div>
                <div className="d-flex flex-column mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 d-flex">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-180"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4 position-relative justify-content-center align-items-center ptp-10 pbp-10">
                <div className="d-flex justify-content-center w-100 invisible-768 ">
                  <div className="bgc-bulma w-90 rounded-caja ptp-5 pbp-5 color-white fsp-15 f-pixilate-extrabold ">
                    REALIDAD ACTUAL
                  </div>
                </div>
                <div className="position-absolute flecha-p25 translate-middle msp-3 mtp-0 zindex-1 ">
                  <img src="images/page_025/img_003.svg" className="wp-30 giro90-res" alt="" />
                </div>
                <div className="d-flex flex-column center-center mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 d-flex">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-180" />
                  </div>
                </div>
              </div>

              <div className="col-md-4 position-relative justify-content-center align-items-center ptp-10 pbp-10">
                <div className="position-absolute flecha-p25 translate-middle msp-3 mtp-0 zindex-1 ">
                  <img src="images/page_025/img_002.svg" className="wp-30 giro90-res" alt="" />
                </div>
                <div className="d-flex justify-content-center w-100 invisible-768 ">
                  <div className="bgc-android18 w-90 rounded-caja ptp-5 pbp-5 color-white fsp-15 f-pixilate-extrabold ">
                    ¿QUÉ PASARÍA SI...?
                  </div>
                </div>
                <div className="d-flex flex-column mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 d-flex">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-180" />
                  </div>
                </div>
              </div>

              <div className="col-md-4 position-relative ptp-10 pbp-10">
                <div className="d-flex justify-content-center w-100 invisible-768 ">
                  <div className="bgc-pidgey w-90 rounded-caja ptp-5 pbp-5 color-white fsp-15 f-pixilate-extrabold ">
                    CONSECUENCIAS
                  </div>
                </div>
                <div className="d-flex flex-column mbp-5 mtp-0 w-100 rounded-p-10 bgc-white border-style-solid border-1 border-color-white">
                  <div className="p-2 w-100 d-flex">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-180"
                    />
                  </div>
                </div>
              </div>*/}
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
            <div className="col-1 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_planificacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-7 position-relative col-md-2 p-0 m-0">
              <img
                src="images/rotulo_investigacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
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
        </div>
      </div>
    </div>
  );
}

export default Page025;
