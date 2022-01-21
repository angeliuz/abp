import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_024.css";

function Page024(props) {
  const pagina = "024";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-v1 hp-80 bgc-android18"></div>

          <div className="d-flex psp-60 pep-60">
            <div className="row w-100 p-0 m-0">
              <div className="col-md-4 col-12 p-0 position-relative">
                <div className="ptp-10 mbp-0">
                  <div className="d-flex w-100">
                    <img
                      className="hp-20 align-center mt-3 me-2 mb-2"
                      src="images/page_024/img_001.svg"
                      alt=""
                    />
                    <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                      4
                    </div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                      Construimos un afiche de la institución investigada
                      considerando:
                    </div>
                  </div>

                  <div className="w-100 rounded-p-10 border-style-solid border-2 border-color-dark bgc-azuka text-start psp-10 pep-10 ptp-10 pbp-10 mtp-20 mbp-20">
                    <div className="f-Ubuntu-L fsp-15 ">
                      <ul>
                        <li className="color-android18">
                          <span className="color-dark">
                            Nombre de la institución.
                          </span>
                        </li>
                        <li className="color-android18">
                          <span className="color-dark">
                            Logo de la institución (si corresponde).
                          </span>
                        </li>
                        <li className="color-android18">
                          <span className="color-dark">
                            Misión u objetivos de la institución.
                          </span>
                        </li>
                        <li className="color-android18">
                          <span className="color-dark">
                            Algunas labores que cumple.
                          </span>
                        </li>
                        <li className="color-android18">
                          <span className="color-dark">
                            Otra información que consideren relevante.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp--60 mtp-20">
                  <img src="images/page_024/img_001.png" className=" " alt="" />
                </div>
                <div class="  w-90  p-3 text-left  border-style-solid  border-1 mep-20 msp-20 mtp-10 bgc-white">
                  <div className="pt-0 flex-grow-1">
                    <InputBox
                      id={"p" + pagina + "_input" + (indexInput += 1)}
                      className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bgc-azuka border-top-style-solid border-color-android18 border-2 pbp-140 psp-60 pep-60 position-relative">
            <img
              src="images/page_024/img_004.png"
              className="position-absolute top-0 start-0 translate-middle msp-200 mtp--60 visible-768"
              alt=""
            />
            <div className="block-bottom text-start mtp-30 f-pixilate-bold">
              ¿Cómo voy?
            </div>
            <div className=" block-bottom  pb-3 psp-15 ptp-10 pep-20 f-Ubuntu-L bgc-white fsp-13 rounded-p-10">
              <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mtp-10">
                <div className="d-flex">
                  <div className="flecha-android18 pep-10 mtp-3"></div>
                  <span className="w-24 f-Ubuntu-L text-start">
                    Hoy hice varias tareas y lo que más me ayudó fue…
                  </span>
                </div>
              </div>

              <div className="pt-0 flex-grow-1 mbp-20">
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80"
                />
              </div>

              <div className="d-flex flex-wrap w-100 align-items-end titulo-linea">
                <div className="d-flex">
                  <div className="flecha-android18 pep-10 mtp-3"></div>
                  <span className="w-24 f-Ubuntu-L">
                    ¿Qué podría mejorar para la próxima sesión?
                  </span>
                </div>
              </div>
              <div className="pt-0 flex-grow-1">
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80"
                />
              </div>
            </div>

            <div className="block-bottom">
              <div className="d-flex justify-content-between pep-10">
                <div className="block-bottom text-start mtp-30 f-pixilate-bold">
                  ¿Cómo me siento?
                </div>
                <div className="d-flex flex-row-reverse block-bottom mtp-30">
                  <div className="mnwp-50 f-pixilate-regular fsp-16">Núnca</div>
                  <div className="mnwp-70 f-pixilate-regular fsp-16">
                    A veces
                  </div>
                  <div className="mnwp-70  f-pixilate-regular fsp-16">
                    Generalmente
                  </div>
                  <div className="mnwp-70  f-pixilate-regular fsp-16">
                    Siempre
                  </div>
                </div>
              </div>
              <div className="psp-15 pep-20 ptp-10 pb-3 f-Ubuntu-L bgc-white fsp-13 rounded-set-10 ">
                <div className="d-flex justify-content-between ">
                  <div className="d-flex mnwp-400-r">
                    <div className="flecha-android18 pep-10 mtp-8"></div>
                    <span className="text-left f-Ubuntu-L fsp-15 ptp-5">
                      Me gusta investigar sobre el tema del proyecto.
                    </span>
                  </div>
                  <div className="d-flex flex-row-reverse block-bottom ptp-5">
                    <div className="psp-30">
                      <div className="border-style-solid border-1 wp-30 hp-30">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40">
                      <div className="border-style-solid border-1 wp-30 hp-30">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40">
                      <div className="border-style-solid border-1 wp-30 hp-30">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="border-style-solid border-1 wp-30 hp-30">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ptp-2"></div>
              <div className="psp-15 pep-20 pbp-10 ptp-10 f-Ubuntu-L bgc-white fsp-13 rounded-seb-10 ">
                <div className="d-flex justify-content-between ">
                  <div className="d-flex mnwp-400-r">
                    <div className="flecha-android18 pep-10 mtp-8"></div>
                    <span className="text-left f-Ubuntu-L fsp-15 ptp-5">
                      Tengo ganas de encontrar soluciones al desafío planteado.
                    </span>
                  </div>
                  <div className="d-flex flex-row-reverse block-bottom ptp-5">
                    <div className="psp-30">
                      <div className=" border-style-solid border-1 wp-30 hp-30">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40">
                      <div className="border-style-solid border-1 wp-30 hp-30">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40">
                      <div className="border-style-solid border-1 wp-30 hp-30">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="border-style-solid border-1 wp-30 hp-30">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
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

export default Page024;
