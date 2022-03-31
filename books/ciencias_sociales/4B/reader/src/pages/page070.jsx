import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

import "./page_070.css";

function Page070(props) {

  const pagina = "070";
  var indexInput = 0;
  const etapa = "6"
  const background = "bgc-pikachu";
  const color = "color-pikachu";
  const borderColor = "border-color-pikachu"
  const borderColorTabla = "border-color-kokomi"
  const bgc_cajas = "bgc-kokomi";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>

          {/* SECCION COMO VOY */}
          <div className={"d-flex w-100 mtp-50 psp-60 pep-60 ptp-20 mbp-0 border-top-style-solid " + borderColor + " border-2 pbp-80 " + bgc_cajas}>
            <div className="row w-100 p-0 m-0 ">
              <div className="col-12 position-relative mbp-20">
                <div className="position-absolute top-0 start-100 translate-middle msp--30 mtp--60 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-90" alt="" /></div>
                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                      <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                      <span>¿Qué es lo que más me gustó de este proyecto?</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                      <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                      <span>¿Qué aprendizaje me llevo como recuerdo?</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                  </div>
                </div>
              </div>



              {/* BEGIN TABLE */}
              <div className="global-margin max-wp-700 mx-auto mbp-50 psp-0 pep-0 ptp-10 pbp-10  f-Ubuntu-L fsp-13 rounded-p-10 ">
                <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-0">
                  {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/generales/ticket.svg" className="hp-17 mtp--3 msp-5 mep-5" alt=""/>el recuadro que mejor me represente.</span> */}
                  <div className="w-100 p-0 pb-3 position-relative">
                    <div className="position-absolute top-0 start-0 msp-10 mtp--20 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo me siento?</div>
                    <table className="w-100">
                      <tbody>
                        <tr>
                          <td className="text-start psp-15">Marco la alternativa que más me representa </td>
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
                          <td className={"bgc-white rounded-ts-10 f-Ubuntu-L 4 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 ">
                              <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                              El ambiente de trabajo en mi equipo fue agradable.
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
                        <tr>
                          <td className={"f-Ubuntu-L fsp-14 text-start p-0 m-0 "}>
                            <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                              <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                              Estoy contento de haber trabajado en este proyecto.
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                              <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                              Confié en mi capacidad para aprender y me valoré.
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                              <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                              Confié en mis compañeros y me ayudaron cuando lo necesité.
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                              <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                              Me gustó investigar sobre el tema del proyecto.
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                              <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                              Me motivó encontrar soluciones al desafío planteado.
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                              <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                              Estuve tenso y nervioso cuando trabajé con mi equipo.
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                          <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex center-center">
                              <div className="wp-30 hp-30 rounded-1">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-bottom-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                            <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                              <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                              Tuve miedo de no hacer bien el trabajo y recibir críticas.
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
              {/* END TABLE */}
              <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                  <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                    <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                    <span> Comparo mis respuestas con las de otros momentos. ¿Qué cambios puedo mencionar?</span>
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                </div>
              </div>

            </div>
          </div>

          {/* PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_difusion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Page070;
