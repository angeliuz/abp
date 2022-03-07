import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_025.css";

function Page025(props) {
  const pagina = "025";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-25 bgc-android18 d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-balrog fsp-24 f-IntroRustG-Base">
                SESIÓN 6
              </div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">
                Los derechos también defienden la diversidad
              </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className="ptp-30 psp-80 pep-50 pbp-60">
            <div className="f-Ubuntu-M fsp-20 color-android18 text-start">
              Nos ponemos en lugar de otros
            </div>

            <div className="d-flex msp--40 pbp-20">
              <img
                className="hp-20 align-center mt-3 me-2 mb-2"
                src="images/page_025/img_002.svg"
                alt=""
              />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Leo la revista y completo.
              </div>
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} pagina={"67"} image={"images/page_" + pagina + "/img_005.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
            <div className="p-2 border-style-solid border-1 border-color-dark rounded-p-10">
              <div className="f-pixilate-regular fsp-18">Situación</div>
              <InputBox
                id={"p" + pagina + "_input" + (indexInput += 1)}
                className="p-0 px-1 flex-grow-1 contenedor-linea text-start lhp-35 min-hp-80"
              />
            </div>
            <div className="row ptp-15">
              <div className="col-md-6 col-12 pbp-15">
                <div className=" p-2 border-style-solid border-1 border-color-goten bgc-genos rounded-p-10 pbp-15 ">
                  <div className="bgc-white mxwp-a d-flex border-style-solid border-1 border-color-goten rounded-p-10 p-1 text-left centrar-horizontal">
                    <div className="f-pixilate-regular fsp-18 color-goten pep-20">
                      Personaje 1
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="max-wp-150 p-0 px-1 flex-grow-1 contenedor-linea text-start  lhp-35 min-hp-40"
                    />
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 contenedor-linea text-start lhp-35 min-hp-140 mtp-10"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 pbp-15">
                <div className="p-2 border-style-solid border-1 border-color-bulma bgc-draco rounded-p-10 pbp-15 ">
                  <div className="bgc-white mxwp-a d-flex border-style-solid border-1 border-color-bulma rounded-p-10 p-1 text-left centrar-horizontal">
                    <div className="f-pixilate-regular fsp-18 color-bulma pep-20">
                      Personaje 2
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="max-wp-150 p-0 px-1 flex-grow-1 contenedor-linea text-start lhp-35 min-hp-40"
                    />
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 contenedor-linea text-start lhp-35 min-hp-140 mtp-10"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12 pbp-15">
                <div className="p-2 border-style-solid border-1 border-color-ken bgc-zangief rounded-p-10 pbp-15 ">
                  <div className="bgc-white mxwp-a d-flex border-style-solid border-1 border-color-ken rounded-p-10 p-1 text-left centrar-horizontal">
                    <div className="f-pixilate-regular fsp-18 color-ken pep-20">
                      Personaje 3
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="max-wp-150 p-0 px-1 flex-grow-1 contenedor-linea text-start lhp-35 min-hp-40"
                    />
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 contenedor-linea text-start lhp-35 min-hp-140 mtp-10"
                  />
                </div>
              </div>
              <div className="col-md-6 col-12 pbp-15">
                <div className="p-2 border-style-solid border-1 border-color-saitama bgc-windu rounded-p-10 pbp-15 ">
                  <div className="bgc-white mxwp-a d-flex border-style-solid border-1 border-color-saitama rounded-p-10 p-1 text-left centrar-horizontal">
                    <div className="f-pixilate-regular fsp-18 color-saitama pep-20">
                      Personaje 4
                    </div>
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="max-wp-150 p-0 px-1 flex-grow-1 contenedor-linea text-start lhp-35 min-hp-40"
                    />
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 flex-grow-1 contenedor-linea text-start lhp-35 min-hp-140 mtp-10"
                  />
                </div>
              </div>
            </div>
            <div className="bgc-hansolo p-3 text-left hp-240 position-relative">
              <div className="f-Ubuntu-L"> Nosotros opinamos que en este caso...</div>
              <InputBox
                id={"p" + pagina + "_input" + (indexInput += 1)}
                className="p-0 px-1 flex-grow-1 contenedor-linea text-start lhp-35 min-hp-180"
              />
              <img src="images/page_025/img_004.png" className="position-absolute start-0 top-0 translate-middle mtp-35 msp--5" alt="" />
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

export default Page025;
