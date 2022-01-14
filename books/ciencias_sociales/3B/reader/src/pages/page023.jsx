import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_023.css";

function Page023(props) {
  const pagina = "023";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-10">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-23 bgc-android18 d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-balrog fsp-24 f-IntroRustG-Base">
                SESIÓN 5
              </div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                Navegando por la web
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-30 psp-60 ">
            <div className="f-Ubuntu-M fsp-20 color-android18 text-start">
              Garantizando nuestros derechos
            </div>
          </div>

          <div className="ptp-5 psp-60 ">
            <div className="f-Ubuntu-R fsp-16  text-start">
              Reflexiono sobre la diversidad.
            </div>
          </div>

          <div className="ptp-10 container-titulo-global mbp-0">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo la revista y comprendo.
              </div>
              <ModalBook
                id={"p" + pagina + "_book" + (indexInput += 1)}
                image="images/page_023/img_002.svg"
                clasesImagen="hp-40 text-center mtp-15 msp--10"
                className="p-0 px-0"
              />
            </div>
          </div>

          <div className="d-flex msp-60 mep-60 position-relative mtp-30">
            <div className="position-absolute dibujo">
              <img
                src="images/page_023/img_001.png"
                className="  msp-180 mbp-90"
                alt=""
              />
            </div>
            <div className="borde-23 p-3 hp-300 w-100 ">
              <div>
                <img
                  src="images/page_023/img_004.png"
                  className="position-absolute top-50 start-0 translate-middle wp-40"
                  alt=""
                ></img>
              </div>
              <div className="f-Ubuntu-L text-start fsp-16 lh-sm msp-20 mbp-30">
                La Subsecretaría de la Niñez es importante porque…
              </div>

              <InputBox
                id={"p" + pagina + "_input" + (indexInput += 1)}
                className="p-4 fsp-12 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-190"
              />
            </div>
          </div>

          <div className="ptp-30 psp-60 ">
            <div className="f-Ubuntu-M fsp-20 color-android18 text-start">
              Investigamos en la web
            </div>
          </div>

          <div className="ptp-10 psp-100 pep-100 mbp-0 contenedor-pagina position-relative">
            <div className="position-absolute top-0 end-0 zindex-2 clip">
              <img
                src="images/page_023/clip.png"
                className="wp-30 mep-110 mtp-5"
                alt=""
              />
            </div>
            <div className="row">
              <div className="col-md-5 col-12 psp-20 pep-20 pbp-20">
                <div className="d-flex">
                  <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                    2
                  </div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left">
                    La institución que vamos a escoger para investigar es…
                  </div>
                </div>
              </div>

              <div className="col-md-7 position-relative pbp-20 ptp-15 rota-23">
                <div className="bloque-respuesta-23 w-100 p-3 text-left bgc-draco rota">
                  <div className="d-flex align-items-center pbp-10">
                    <div className="pep-10">
                      <img
                        src="images/page_023/cuadro.svg"
                        className="hp-30"
                        alt=""
                      />
                    </div>
                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">
                      Unesco es.unesco.org
                    </div>
                  </div>
                  <div className="d-flex align-items-center pbp-10">
                    <div className="pep-10">
                      <img
                        src="images/page_023/cuadro.svg"
                        className="hp-30"
                        alt=""
                      />
                    </div>
                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">
                      Unicef www.unicef.cl
                    </div>
                  </div>
                  <div className="d-flex align-items-center pbp-10">
                    <div className="pep-10">
                      <img
                        src="images/page_023/cuadro.svg"
                        className="hp-30"
                        alt=""
                      />
                    </div>
                    <div className="f-Ubuntu-L fsp-15 lh-sm pep-5">
                      Defensoría de la Niñez www.defensorianinez.cl
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ptp-10 psp-60 mbp-0 contenedor-pagina">
            <div className="d-flex">
              <img
                className="hp-20 align-center mt-3 me-2 mb-2"
                src="images/page_023/img_005.svg"
                alt=""
              />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                3
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">
                Antes de investigar, proponemos nuestras preguntas de
                investigación.
              </div>
            </div>
          </div>

          <div className="row container-row m-0 psp-60 pep-60">
          <div className="col-sm-12 col-md-4 position-relative">
              <div className="d-flex margen-21 mbp-60 mtp-10 w-100 ">
                <div className="p-2  w-100 borde-23-1  rounded-tbe-20 ">
                  <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-start">
                    Durante la investigación queremos profundizar sobre…
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-30 min-hp-200"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 position-relative">
              <div className="d-flex margen-21 mbp-60 mtp-10 w-100 ">
                <div className="p-2  w-100 borde-23-2  rounded-tbe-20 ">
                  <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-start">
                    Durante la investigación queremos profundizar sobre…
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-30 min-hp-200"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 position-relative">
              <div className="d-flex  mbp-60 mtp-10 w-100 ">
                <div className="p-2 min-hp-100 w-100  borde-23-3  rounded-tbe-20 ">
                  <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-start">
                    Al terminar, lo que quisiéramos saber sobre esta
                    institución…
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-30 min-hp-200"
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
        </div>
      </div>
    </div>
  );
}

export default Page023;
