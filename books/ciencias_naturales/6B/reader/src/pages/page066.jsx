import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_066.css";

function Page066(props) {
  const pagina = "066";
  var indexInput = 0;
  const etapa = "5";
  const background = "bgc-saitama";
  const color = "color-saitama";
  const borderColor = "border-color-saitama";
  const borderColorTabla = "border-color-bobafett";
  const bgc_cajas = "bgc-bobafett";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className={"cabecera-v1 hp-80 " + background}></div>

          <div className="d-flex global-margin h-100  mtp-10 mbp-0 psp-30 pep-0 ptp-0 pbp-0">
            <div className="row p-0 msp-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="d-flex w-100 p-2">
                  <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-saitama fsp-17  fw-700 pbp-5">
                    a.
                  </div>
                  <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 ptp-0 pbp-20 psp-5">
                    Leo la revista y escribo textos llamativos para incluir en
                    las invitaciones
                  </div>
                  <ModalBook
                    id={"p" + pagina + "_book" + (indexInput += 1)}
                    pagina={"95"}
                    image={"images/page_" + pagina + "/img_001.svg"}
                    clasesImagen="hp-40 text-center mtp-10 msp-20"
                    className="p-0 px-0"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-10 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="row">
                  <div className="col-6 m-0 p-2">
                    <div className=" justify-content-center  w-100  p-3">
                      <div className="bgc-shogun wp-320 p-2 sombra-paralela-left  position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle   msp--100 mtp-10 visible-768 zindex-1">
                          <img
                            src={"images/page_" + pagina + "/clip01.svg"}
                            className="wp-20"
                            alt=""
                          />
                        </div>
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 mtp-10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180"
                        />
                      </div>
                    </div>
                    <div className=" justify-content-center  w-100  p-3">
                      <div className="bgc-reptile wp-320 p-2  reptile sombra-paralela-left  position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle   msp--100 mtp-10 visible-768 zindex-1">
                          <img
                            src={"images/page_" + pagina + "/clip03.svg"}
                            className="wp-20"
                            alt=""
                          />
                        </div>
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 mtp-10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180"
                        />
                      </div>
                    </div>
                    <div className=" justify-content-center  w-100  p-3">
                      <div className="bgc-hansolo wp-320 p-2 sombra-paralela-left  position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle   msp--100 mtp-10 visible-768 zindex-1">
                          <img
                            src={"images/page_" + pagina + "/clip05.svg"}
                            className="wp-20"
                            alt=""
                          />
                        </div>
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 mtp-10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-6 m-0 p-2 position-relative">
                    <div className=" justify-content-center  w-100  p-3">
                      <div className="bgc-blanka wp-320 p-2 sombra-paralela-left  position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle   msp--100 mtp-10 visible-768 zindex-1">
                          <img
                            src={"images/page_" + pagina + "/clip02.svg"}
                            className="wp-20"
                            alt=""
                          />
                        </div>
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 mtp-10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180"
                        />
                      </div>
                    </div>
                    <div className=" justify-content-center  w-100  p-3">
                      <div className="bgc-bobafett wp-320 p-2 sombra-paralela-left  position-relative">
                        <div className="position-absolute top-0 start-100 translate-middle zindex-1 mtp-50 msp-10">
                          <img
                            src={"images/page_" + pagina + "/img_007.png"}
                            className="wp-40"
                            alt=""
                          />
                        </div>
                        <div className="position-absolute top-0 start-50 translate-middle   msp--100 mtp-10 visible-768 zindex-1">
                          <img
                            src={"images/page_" + pagina + "/clip04.svg"}
                            className="wp-20"
                            alt=""
                          />
                        </div>
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 mtp-10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180"
                        />
                      </div>
                    </div>
                    <div className=" justify-content-center  w-100  p-3">
                      <div className="bgc-urien wp-320 p-2 sombra-paralela-left  position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle   msp--100 mtp-10 visible-768 zindex-1">
                          <img
                            src={"images/page_" + pagina + "/clip06.svg"}
                            className="wp-20"
                            alt=""
                          />
                        </div>
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 mtp-10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex global-margin mtp-20 mbp-80 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="row">
                  <div className="col-12">
                    <div className="d-flex justify-content-center">
                      <div className=" position-relative  d-flex justify-content-end wp-350 hp-135  border-style-solid border-1 border-color-dark ptp-15 pep-10 psp-0 rounded-p-10 ">
                        <div className="position-absolute top-50 start-0 translate-middle    msp--65 mtp-0 visible-768  zindex-1">
                          <img
                            src={"images/page_" + pagina + "/img_005.png"}
                            className="wp-80"
                            alt=""
                          />
                        </div>
                        <div className="position-absolute top-0 end-0                        mep-10 mtp--10 visible-768 zindex-1">
                          <img
                            src={"images/page_" + pagina + "/img_006.png"}
                            className="wp-30"
                            alt=""
                          />
                        </div>
                        <div className="position-absolute top-50 start-100 translate-middle  mep-10 mtp--10 visible-768 zindex-1">
                          <img
                            src={"images/page_" + pagina + "/img_007.png"}
                            className="wp-20"
                            alt=""
                          />
                        </div>
                        <div className="d-flex justify-content-start mep-5">
                          <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-saitama fsp-17  fw-700 pbp-5">
                            b.
                          </div>
                          <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R wp-300 fsp-15 lh-sm ptp-3 psp-5 pbp-35 ">
                            Entre todos revisamos los textos y elaboramos las
                            invitaciones. Luego, las publicamos para que toda la
                            comunidad asista a nuestra presentación.
                          </div>
                        </div>
                      </div>
                    </div>
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
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_investigacion.svg"
                className="oculto"
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
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_creacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
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

export default Page066;
