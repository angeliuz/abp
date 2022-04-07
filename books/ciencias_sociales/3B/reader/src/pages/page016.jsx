import React from "react";
import { useState } from "react";
import InputBox from "../components/InputBox";
import Check from "../components/Check";
import ModalRecortable from "../components/ModalRecortable";

import "./page_016.css";

function Page016(props) {
  const pagina = "016";
  var indexInput = 0;
  const etapa = "2";
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma";
  const borderColorTabla = "border-color-buzz";
  const bgc_cajas = "bgc-goku";


  return (
    <div className="wrapper bgc-light">

      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          {/* HEADER */}
          <div className="cabecera-v1 hp-80 bgc-bulma"></div>
          {/* FIN HEADER */}

          <div className="psp-60 pep-60 ptp-30 pbp-40">
            <div className="f-Ubuntu-B color-bulma fsp-18 text-left">
              Todos aportamos en el equipo
            </div>
            <div className="d-flex pbp-20">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left">
                El rol y las tareas que me gustaría asumir en mi equipo es...
              </div>
            </div>
            <div className="bgc-white sombra psp-40 pep-20 ptp-20 pbp-20 position-relative">
              <div className="row">
                {/* <div className="">
                  <img
                    src="/images/page_016/img_002.png"
                    className="tf-anillo-1"
                    alt=""
                  />
                </div> */}
                {/* <div className="">
                  <img
                    src="/images/page_016/img_002.png"
                    className="tf-anillo-2"
                    alt=""
                  />
                </div> */}

                <div className="col-md-6 psp-20 pep-20 ptp-10 pbp-10 border-pidgey">
                  <div className=" py-2 color-pidgey f-pixilate-bold fsp-18">
                    Coordinación
                  </div>
                  <div className="text-left psp-10 pep-20">
                    <div className="flecha-pidgey mep-10 mtp-10"></div>
                    <div className="f-Ubuntu-L py-1 mtp--23 msp-20">
                      Reparte el turno de palabra.
                    </div>
                  </div>
                  <div className="text-left psp-10 pep-20">
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
                  <div className="text-left psp-10 pep-20">
                    <div className="flecha-pikachu mep-10 mtp-10"></div>
                    <div className="f-Ubuntu-L py-1 mtp--23 msp-20">
                      Gestiona el tiempo de las tareas.
                    </div>
                  </div>
                  <div className="text-left psp-10 pep-20">
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
                  <div className="text-left psp-10 pep-20">
                    <div className="flecha-goten mep-10 mtp-10"></div>
                    <div className="f-Ubuntu-L py-1 mtp--23 msp-20">
                      Se comunica con el docente para solicitar ayuda.
                    </div>
                  </div>
                  <div className="text-left psp-10 pep-20">
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
                  <div className="text-left psp-10 pep-20">
                    <div className="flecha-balrog mep-10 mtp-10"></div>
                    <div className="f-Ubuntu-L py-1 mtp--23 msp-20">
                      Gestiona los materiales que se necesitan.
                    </div>
                  </div>
                  <div className="text-left psp-10 pep-20">
                    <div className="flecha-balrog mep-10 mtp-10"></div>
                    <div className="f-Ubuntu-L py-1 mtp--23 msp-20">
                      Comprueba que se mantiene un entorno limpio y ordenado.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bgc-buzz border-top-style-solid border-color-bulma border-2 pbp-120 position-relative">
            <div className="position-absolute top-0 start-100 translate-middle msp--100 mtp-0 visible-768"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-70" alt="" /></div>
            <div className="global-margin block-bottom text-start mtp-30 fsp-18 f-pixilate-bold">
              ¿Cómo voy?
            </div>
            <div className="global-margin  block-bottom  pb-3 psp-15 ptp-10 pep-20 f-Ubuntu-L bgc-white fsp-13 rounded-p-10">
              <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mtp-10">
                <div className="d-flex">
                  <div className="flecha-bulma pep-10 mtp-3"></div>
                  <span className="w-24 f-Ubuntu-L text-start fsp-15">
                    Hoy aprendí...
                  </span>
                </div>
              </div>

              <div className="pt-0 flex-grow-1 mbp-20">
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="fsp-15 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80"
                />
              </div>

              <div className="d-flex flex-wrap w-100 align-items-end titulo-linea">
                <div className="d-flex">
                  <div className="flecha-bulma pep-10 mtp-3"></div>
                  <span className="w-24 f-Ubuntu-L fsp-15">
                    Y lo puedo utilizar para...
                  </span>
                </div>
              </div>
              <div className="pt-0 flex-grow-1">
                <InputBox
                  id={"p" + pagina + "_input" + (indexInput += 1)}
                  className="fsp-15 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80"
                />
              </div>
            </div>



            <div className="global-margin mtp-10 mbp-50 psp-0 pep-0 ptp-10 pbp-10  f-Ubuntu-L fsp-15 rounded-p-10 ">
              <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-0">
                {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/generales/ticket.svg" className="hp-17 mtp--3 msp-5 mep-5" alt=""/>el recuadro que mejor me represente.</span> */}
                <div className="w-100 p-0 pb-3 position-relative">
                  <div className="position-absolute top-0 start-0 msp-10 mtp--5 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo me siento?</div>

                  <table className="w-100">
                    <tbody>
                      <tr>
                        <td> </td>
                        <td className={"color-dark f-colby-compres-bold p-0 m-0 "}>
                          <div className="d-flex w-100 center-center psp-10 pep-10 ptp-0 pbp-0 text-center ">Nunca</div>
                        </td>
                        <td className={"color-dark f-colby-compres-bold p-0 m-0 min-wp-55 "}>
                          <div className="d-flex w-100 center-center psp-5 pep-5 ptp-0 pbp-0 text-center ">A veces</div>
                        </td>
                        <td className={"color-dark f-colby-compres-bold p-0 m-0 "}>
                          <div className="d-flex center-center psp-10 pep-10 ptp-0 pbp-0 text-center ">Generalmente</div>
                        </td>
                        <td className={"color-dark f-colby-compres-bold p-0 m-0 "}>
                          <div className="d-flex center-center psp-5 pep-5 ptp-0 pbp-0 text-center ">Siempre</div>
                        </td>
                      </tr>
                      <tr>
                        <td className={"bgc-white rounded-ts-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 ">
                            <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                            El ambiente de trabajo en mi equipo es agradable.
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white rounded-te-10  min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                        </td>


                      </tr>
                      {/* <tr>
                                                <td className={"f-Ubuntu-L fsp-12 text-start p-0 m-0 "}>
                                                  <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                                                    <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                                    El ambiente de trabajo. El ambiente de trabajo. El ambiente de trabajo. 
                                                  </div> 
                                                </td>
                                                <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                                  <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                                  <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                                  <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                                    </div>
                                                  </div>
                                                </td>
                                                <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                                  <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                                    </div>
                                                  </div>
                                                </td>
                                            </tr> */}
                      <tr>
                        <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-bottom-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                            <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                            Estoy contento de trabajar en este proyecto.
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white rounded-be-10   f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-bottom-hidden border-right-hidden border-2 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>


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
            <div className="bgc-jawa wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>
          <div
            className="row position-absolute caja-flotante2 p-0 m-0 align-items-end"
            style={{ bottom: 0 }}
          >
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_planificacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_investigacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
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

export default Page016;
