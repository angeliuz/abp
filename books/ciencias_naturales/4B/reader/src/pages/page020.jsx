import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import "./page_020.css";

function Page020(props) {
  const pagina = "020";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="cb-page19 page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-v1 hp-80 bgc-bulma"></div>
          <div className="psp-60 pep-60 ptp-30 pbp-40">
            <div className="f-Ubuntu-B color-bulma fsp-18 text-start">
            Mi rol en el equipo
            </div>
            <div className="d-flex pbp-20">
            <img
                src="images/page_020/img_001.svg"
                className="msp--30"
                alt=""
              />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">
              Determinamos los roles y funciones de cada integrante del equipo.
              </div>
            </div>
            <div className="bgc-white sombra psp-40 pep-20 ptp-20 pbp-20 position-relative">
              <div className="row">
                <div className="col-md-6 psp-20 pep-20 ptp-10 pbp-10 border-pidgey">
                  <div className=" py-2 color-pidgey f-pixilate-bold fsp-18">
                    Coordinación
                  </div>
                  <div className="text-start psp-10 pep-20">
                    <div className="flecha-pidgey mep-10 mtp-10"></div>
                    <div className="f-Ubuntu-L py-1 mtp--23 msp-20">
                    Reparte el turno de la palabra.
                    </div>
                  </div>
                  <div className="text-start psp-10 pep-20">
                    <div className="flecha-pidgey mep-10 mtp-10"></div>
                    <div className="f-Ubuntu-L py-1 mtp--23 msp-20">
                      Se asegura de que todos participen.
                    </div>
                  </div>
                </div>
                <div className="col-md-6 psp-20 pep-20 ptp-10 pbp-10 border-pikachu">
                  <div className=" py-2 color-pikachu f-pixilate-bold fsp-18 ">
                    Supervisión
                  </div>
                  <div className="text-start psp-10 pep-20">
                    <div className="flecha-pikachu mep-10 mtp-10"></div>
                    <div className="f-Ubuntu-L py-1 mtp--23 msp-20">
                      Gestiona el tiempo de las tareas.
                    </div>
                  </div>
                  <div className="text-start psp-10 pep-20">
                    <div className="flecha-pikachu mep-10 mtp-10"></div>
                    <div className="f-Ubuntu-L py-1 mtp--23 msp-20">
                      Se asegura de que todos cumplan las tareas en el plazo
                      asignado.
                    </div>
                  </div>
                </div>

                <div className="col-md-6 psp-20 pep-20 ptp-10 pbp-10 border-goten">
                  <div className="linea-goten"></div>
                  <div className=" py-2 color-goten f-pixilate-bold fsp-18 ">
                    Relaciones públicas
                  </div>
                  <div className="text-start psp-10 pep-20">
                    <div className="flecha-goten mep-10 mtp-10"></div>
                    <div className="f-Ubuntu-L py-1 mtp--23 msp-20">
                      Se comunica con el docente para solicitar ayuda.
                    </div>
                  </div>
                  <div className="text-start psp-10 pep-20">
                    <div className="flecha-goten mep-10 mtp-10"></div>
                    <div className="f-Ubuntu-L py-1 mtp--23 msp-20">
                      Pide ayuda a otros equipos.
                    </div>
                  </div>
                </div>
                <div className="col-md-6 psp-20 pep-20 ptp-10 pbp-10 border-balrog">
                  <div className=" py-2 color-balrog f-pixilate-bold fsp-18 ">
                    Intendencia
                  </div>
                  <div className="text-start psp-10 pep-20">
                    <div className="flecha-balrog mep-10 mtp-10"></div>
                    <div className="f-Ubuntu-L py-1 mtp--23 msp-20">
                      Gestiona los materiales que se necesitan.
                    </div>
                  </div>
                  <div className="text-start psp-10 pep-20">
                    <div className="flecha-balrog mep-10 mtp-10"></div>
                    <div className="f-Ubuntu-L py-1 mtp--23 msp-20">
                      Comprueba que se mantiene un entorno limpio y ordenado.
                    </div>
                  </div>
                </div>
                <div className="position-absolute translate-middle top-50 start-0">
                <img
                    src="/images/page_020/img_001.png"
                    className="wp-40-res"
                    alt=""
                  />
                  </div>
              </div>
            </div>
          </div>
          <div className="bgc-buzz border-top border-color-bulma border-2 pbp-120">
            <img
              src="images/page_020/img_000.png"
              className="hp-60 tf-nube"
              alt=""
            />
            <div className="block-bottom text-start mtp-30 f-pixilate-bold">
              ¿Cómo voy?
            </div>
            <div className=" block-bottom  pb-3 psp-15 ptp-10 pep-20 f-Ubuntu-L bgc-white fsp-13 rounded-p-10">
              <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mtp-10">
                <div className="d-flex">
                  <div className="flecha-bulma pep-10 mtp-3"></div>
                  <span className="w-24 f-Ubuntu-L text-start">
                    Hoy aprendí...
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
                  <div className="flecha-bulma pep-10 mtp-3"></div>
                  <span className="w-24 f-Ubuntu-L">
                    Y lo puedo utilizar para...
                  </span>
                </div>
              </div>
              <div className="pt-0 flex-grow-1">
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="p-0 px-1 text-start flex-grow-1 contenedor-linea min-hp-80"
                />
              </div>
            </div>

            <div className="">
              <div className="cb-contenedor-tabla-p58">
                <div className="d-flex pep-10 justify-content-between">
                  <div className="block-bottom text-start mtp-30 f-pixilate-bold fsp-21">
                    ¿Cómo me sentí?
                  </div>
                  <div className="d-flex flex-row-reverse block-bottom mtp-30">
                    <div className="nunca f-pixilate-regular">Núnca</div>
                    <div className="siempre f-pixilate-regular">A veces</div>
                    <div className="siempre f-pixilate-regular">
                      Generalmente
                    </div>
                    <div className="siempre f-pixilate-regular">Siempre</div>
                  </div>
                </div>
                <div className="psp-15 pep-20 f-Ubuntu-L bgc-white fsp-13 rounded-set-10 ">
                  <div className="d-flex justify-content-between ">
                    <div className="d-flex mnwp-400-r cb-contenedor-tabla-texto">
                      <div className="flecha-bulma pep-10 mtp-8"></div>
                      <span className="text-start f-Ubuntu-L fsp-15 ptp-5">
                        Nos implicamos en la realización de la tarea y nos
                        responsabilizamos del trabajo que tenemos que hacer.
                      </span>
                    </div>
                    <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center">
                      <div className="psp-30-r">
                        <div className="cuadrado borde-cuadrado">
                          <InputBox
                            id={"p" + pagina + "_input" + (indexInput += 1)}
                            className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                          />
                        </div>
                      </div>
                      <div className="psp-40-r">
                        <div className="cuadrado borde-cuadrado">
                          <InputBox
                            id={"p" + pagina + "_input" + (indexInput += 1)}
                            className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                          />
                        </div>
                      </div>
                      <div className="psp-40-r">
                        <div className="cuadrado borde-cuadrado">
                          <InputBox
                            id={"p" + pagina + "_input" + (indexInput += 1)}
                            className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="cuadrado borde-cuadrado">
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
                <div className="psp-15 pep-20 f-Ubuntu-L bgc-white fsp-13 rounded-seb-10">
                  <div className="d-flex justify-content-between ">
                    <div className="d-flex mnwp-400-r cb-contenedor-tabla-texto">
                      <div className="flecha-bulma pep-10 mtp-8"></div>
                      <span className="text-start f-Ubuntu-L fsp-15 ptp-5">
                        Ante una petición de apoyo de alguien del grupo,
                        intentamos ayudar antes de preguntarle al profesor.
                      </span>
                    </div>
                    <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center">
                      <div className="psp-30-r">
                        <div className="cuadrado borde-cuadrado">
                          <InputBox
                            id={"p" + pagina + "_input" + (indexInput += 1)}
                            className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                          />
                        </div>
                      </div>
                      <div className="psp-40-r">
                        <div className="cuadrado borde-cuadrado">
                          <InputBox
                            id={"p" + pagina + "_input" + (indexInput += 1)}
                            className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                          />
                        </div>
                      </div>
                      <div className="psp-40-r">
                        <div className="cuadrado borde-cuadrado">
                          <InputBox
                            id={"p" + pagina + "_input" + (indexInput += 1)}
                            className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                          />
                        </div>
                      </div>
                      <div className="">
                        <div className="cuadrado borde-cuadrado">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page020;
