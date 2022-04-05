import React from "react";
import InputBox from "../components/InputBox";
import Check from "../components/Check";
import ModalBook from "../components/ModalBook";

import "./page_024.css";

function Page024(props) {
  const pagina = "024";
  var indexInput = 0;
  const etapa = "3";
  const background = "bgc-android18";
  const color = "color-android18";
  const colorSesion = "color-primary";
  const borderColor = "border-color-android18";
  const borderColorTabla = "border-color-azuka";
  const bgc_cajas = "bgc-azuka";


  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina} >
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

                  <div className="position-relative w-100 rounded-p-10 border-style-solid border-1 border-color-dark bgc-urien text-start psp-10 pep-10 ptp-10 pbp-10 mtp-20 mbp-20">
                  <div className="position-absolute top-0 start-100 translate-middle mtp-10">
                  <img src="images/page_024/clip.png" className="wp-35 " alt="" />
                </div>
                    <div className="f-Ubuntu-R fsp-15 ">
                      <ul>
                        <li className="color-android18 mtp-10">
                          <span className="color-hardDark">
                            Nombre de la institución.
                          </span>
                        </li>
                        <li className="color-android18">
                          <span className="color-hardDark">
                            Logo de la institución (si corresponde).
                          </span>
                        </li>
                        <li className="color-android18">
                          <span className="color-hardDark">
                            Misión u objetivos de la institución.
                          </span>
                        </li>
                        <li className="color-android18">
                          <span className="color-hardDark">
                            Algunas labores que cumple.
                          </span>
                        </li>
                        <li className="color-android18">
                          <span className="color-hardDark">
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
                <div className="  w-90  p-3 text-left   box-shadow-simple border-1 mep-20 msp-20 mtp-10 bgc-white">
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
          <div className="bgc-azuka border-top-style-solid border-color-android18 border-2 pbp-140 psp-0 pep-0 position-relative">
            <div className="global-margin mbp-50 psp-0 pep-0 ptp-10 pbp-10  f-Ubuntu-L fsp-13 rounded-p-10 ">
                <img src="images/page_024/img_004.png" className="position-absolute top-0 start-0 translate-middle msp-200 mtp--60 visible-768" alt=""/>
                <div className="text-start mtp-30 fsp-18 f-pixilate-bold">
                  ¿Cómo voy?
                </div>
                <div className="pb-3 psp-15 ptp-10 pep-20 f-Ubuntu-L bgc-white fsp-13 rounded-p-10">
                  <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mtp-10">
                    <div className="d-flex">
                      <div className="flecha-android18 pep-10 mtp-3"></div>
                      <span className="w-24 f-Ubuntu-L text-start fsp-15">
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
                      <span className="w-24 f-Ubuntu-L fsp-15">
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
          </div>
        

          {/* BEGIN TABLA */}
          <div className="global-margin mbp-10 psp-0 pep-0 ptp-10 pbp-10  f-Ubuntu-L fsp-15 rounded-p-10 ">
                        <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-0">
                            {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/generales/ticket.svg" className="hp-17 mtp--3 msp-5 mep-5" alt=""/>el recuadro que mejor me represente.</span> */}
                            <div className="w-100 p-0 pb-3 position-relative">
                              <div className="position-absolute top-0 start-0 msp-10 mtp--5 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo me siento?</div>
                              <table className="w-100">
                                    <tbody>
                                        <tr>
                                            <td>&nbsp;</td>
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
                                            <td className={"bgc-white rounded-ts-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                              <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 fsp-14">
                                              <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                              Me gusta investigar sobre el tema del proyecto.
                                              </div> 
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                              <div className="d-flex center-center">
                                                <div className="wp-30 hp-30 bgc-white rounded-1">
                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                </div>
                                              </div>
                                            </td>
                                            <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                              <div className="d-flex center-center">
                                                <div className="wp-30 hp-30 bgc-white rounded-1">
                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                </div>
                                              </div>
                                            </td>
                                            <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                              <div className="d-flex center-center">
                                                <div className="wp-30 hp-30 bgc-white rounded-1">
                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                </div>
                                              </div>
                                            </td>
                                            <td className={"bgc-white rounded-te-10  min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                              <div className="d-flex center-center">
                                                <div className="wp-30 hp-30 bgc-white  rounded-1">
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
                                            <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-bottom-hidden border-left-hidden border-right-hidden border-2 "+borderColorTabla}>
                                              <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 fsp-14">
                                                <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                                Tengo ganas de encontrar soluciones al desafío planteado.
                                              </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 "+borderColorTabla}>
                                              <div className="d-flex center-center">
                                                <div className="wp-30 hp-30 bgc-white rounded-1">
                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                </div>
                                              </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 "+borderColorTabla}>
                                              <div className="d-flex center-center">
                                                <div className="wp-30 hp-30 bgc-white rounded-1">
                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                </div>
                                              </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 "+borderColorTabla}>
                                              <div className="d-flex center-center">
                                                <div className="wp-30 hp-30 bgc-white rounded-1">
                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                </div>
                                              </div>
                                            </td>
                                            <td className={"bgc-white rounded-be-10   f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-bottom-hidden border-right-hidden border-2 "+borderColorTabla}>
                                              <div className="d-flex center-center">
                                                <div className="wp-30 hp-30 bgc-white rounded-1">
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
                    {/* END TABLA */}
          
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
