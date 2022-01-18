import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_016.css";

function Page016(props) {

  const pagina = "016";
  var indexInput = 0;
  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma"
  const bgc_cajas = "bgc-draco";

  return (

    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
            <div className={"cabecera-v1 hp-80 "+background}>

            </div>

            <div className="ptp-30 container-titulo-global mbp-40">
              <div className={"f-Ubuntu-B fsp-20 psp-40 text-start lhp-20 "+color}>
              Cumplimos roles en nuestro equipo
              </div>
              <div className="d-flex">
                  <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_016/img_001.svg" alt=""  />
                  <div className={"f-ccdigitaldelivery-bold fsp-35 "+color}>2</div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                  Comprendemos los roles y pinto el que asumo.
                  </div>
                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                  {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_007/revista65.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
              </div>
            </div>

            <div className="w-100 m-0 p-0">
                <div className="d-flex w-100 justify-content-center psp-60 pep-60">

                    <div className="row p-0 mbp-10 w-100">
                        <div className="col-12 col-md-6 position-relative d-flex pbp-30">
                            <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-0">
                              <div className="bgc-white border-style-solid border-2 border-color-android18 rounded-p-10 psp-10 pep-10 ptp-5 pbp-5 f-pixilate-bold fsp-21 ">Coordinación</div>
                            </div>
                            <div className="d-flex justify-content-center w-100">
                                <div className="d-flex flex-column psp-10 pep-10 ptp-25 pbp-20 w-100 f-Ubuntu-L border-style-solid border-2 border-color-android18 rounded-p-10 text-start bgc-white">                                
                                        <div className="d-flex align-items-center fsp-15 text-start mbp-5">
                                            <div className="wp-20 hp-20 d-flex center-center">
                                              <div className="bgc-bulma rounded-circle wp-5 hp-5"></div>
                                            </div>
                                            <div className="w-100">
                                            Asignar el turno de la palabra.
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-top fsp-15 text-start mbp-5">
                                            <div className="wp-20 hp-20 d-flex center-center">
                                              <div className="bgc-bulma rounded-circle wp-5 hp-5"></div>
                                            </div>
                                            <div className="w-100">
                                            Asegurar que todos los miembros del equipo participan en la tarea.
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 position-relative d-flex pbp-30">
                            <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-0">
                              <div className="bgc-white border-style-solid border-2 border-color-android18 rounded-p-10 psp-10 pep-10 ptp-5 pbp-5 f-pixilate-bold fsp-21 ">Supervisión</div>
                            </div>
                            <div className="d-flex justify-content-center w-100">
                                <div className="d-flex flex-column psp-10 pep-10 ptp-25 pbp-20 w-100 f-Ubuntu-L border-style-solid border-2 border-color-android18 rounded-p-10 text-start bgc-white">                                
                                        <div className="d-flex align-items-center fsp-15 text-start mbp-5">
                                            <div className="wp-20 hp-20 d-flex center-center">
                                              <div className="bgc-bulma rounded-circle wp-5 hp-5"></div>
                                            </div>
                                            <div className="w-100">
                                            Gestionar el tiempo dedicado a las tareas.
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-top fsp-15 text-start mbp-5">
                                            <div className="wp-20 hp-20 d-flex center-center">
                                              <div className="bgc-bulma rounded-circle wp-5 hp-5"></div>
                                            </div>
                                            <div className="w-100">
                                            Procurar que las tareas se realicen en los plazos establecidos.
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
 
                        <div className="col-12 col-md-6 position-relative d-flex pbp-30">
                            <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-0">
                              <div className="bgc-white border-style-solid border-2 border-color-android18 rounded-p-10 psp-10 pep-10 ptp-5 pbp-5 f-pixilate-bold fsp-21 ">Relaciones públicas</div>
                            </div>
                            <div className="d-flex justify-content-center w-100">
                                <div className="d-flex flex-column psp-10 pep-10 ptp-25 pbp-20 w-100 f-Ubuntu-L border-style-solid border-2 border-color-android18 rounded-p-10 text-start bgc-white">                                
                                        <div className="d-flex align-items-center fsp-15 text-start mbp-5">
                                            <div className="wp-20 hp-20 d-flex center-center">
                                              <div className="bgc-bulma rounded-circle wp-5 hp-5"></div>
                                            </div>
                                            <div className="w-100">
                                            Solicitar ayuda o aclarar dudas con el profesor.
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-top fsp-15 text-start mbp-5">
                                            <div className="wp-20 hp-20 d-flex center-center">
                                              <div className="bgc-bulma rounded-circle wp-5 hp-5"></div>
                                            </div>
                                            <div className="w-100">
                                            Pedir ayuda a otros equipos.
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 position-relative d-flex pbp-30">
                            <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-0">
                              <div className="bgc-white border-style-solid border-2 border-color-android18 rounded-p-10 psp-10 pep-10 ptp-5 pbp-5 f-pixilate-bold fsp-21 ">Intendencia</div>
                            </div>
                            <div className="d-flex justify-content-center w-100">
                                <div className="d-flex flex-column psp-10 pep-10 ptp-25 pbp-20 w-100 f-Ubuntu-L border-style-solid border-2 border-color-android18 rounded-p-10 text-start bgc-white">                                
                                        <div className="d-flex align-items-center fsp-15 text-start mbp-5">
                                            <div className="wp-20 hp-20 d-flex center-center">
                                              <div className="bgc-bulma rounded-circle wp-5 hp-5"></div>
                                            </div>
                                            <div className="w-100">
                                            Gestionar los materiales que el equipo necesita.
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-top fsp-15 text-start mbp-5">
                                            <div className="wp-20 hp-20 d-flex center-center">
                                              <div className="bgc-bulma rounded-circle wp-5 hp-5"></div>
                                            </div>
                                            <div className="w-100">
                                            Comprobar que el equipo mantiene su lugar de trabajo limpio y ordenado.
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>

                <div className={"border-top-style-solid "+borderColor+" border-2 pbp-50 position-relative "+bgc_cajas}>
                    <img src="images/page_008/img_002.png" className="tf-personaje-18" alt="" />
                    <div className="msp-60 mep-60 mtp-30 mbp-5 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo voy?</div>
                    <div className="msp-60 mep-60 mbp-50 psp-20 pep-20 ptp-10 pbp-10  f-Ubuntu-L bgc-white fsp-13 rounded-p-10 ">
                        <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mtp-10">
                            <div className="d-flex">
                              <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 tf-flecha" alt="" />
                              <span className="w-24 f-Ubuntu-L text-start">Hoy he comprendido...</span>
                            </div>
                        </div>
                        <div className="pt-0 flex-grow-1 mbp-20">
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                        </div>
                        <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mtp-10">
                            <div className="d-flex">
                              {/* <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 tf-flecha" alt="" /> */}
                              <span className="w-24 f-Ubuntu-L text-start">y eso me hace sentir</span>
                            </div>
                        </div>
                        <div className="pt-0 flex-grow-1 mbp-20">
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                        </div>

                        <div className="d-flex flex-wrap w-100 align-items-end titulo-linea">
                            <div className="d-flex">
                              <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 tf-flecha" alt="" />
                              <span className="w-24 f-Ubuntu-L">La tarea que más me gusta de mi rol es...</span>
                            </div>
                        </div>
                        <div className="pt-0 flex-grow-1">
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                        </div>

                        <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mtp-10">
                            <div className="d-flex">
                              {/* <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 tf-flecha" alt="" /> */}
                              <span className="w-24 f-Ubuntu-L text-start">porque</span>
                            </div>
                        </div>
                        <div className="pt-0 flex-grow-1 mbp-20">
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                        </div>


                    </div>
                    <div className="msp-60 mep-60 mtp-30 mbp-5 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo me siento?</div>
                    <div className="msp-60 mep-60 mbp-50 psp-20 pep-20 ptp-10 pbp-10  f-Ubuntu-L bgc-white fsp-13 rounded-p-10 ">
                        <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                            <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/page_018/img_005.svg" className="hp-17 mtp--2" alt=""/> el recuadro que mejor me represente.</span>
                            <div className="w-100 p-0 pb-3 bgc-white rounded-p-10">
                              <table className="w-100">
                                    <tbody>
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td className={"color-white border-style-solid border-1 "+borderColor+" f-colby-compres-bold ps-2 pe-2 "+background}>
                                                Nunca</td>
                                            <td className={"color-white border-style-solid border-1 "+borderColor+" f-colby-compres-bold ps-2 pe-2 min-wp-55 "+background}>
                                                A veces</td>
                                            <td className={"color-white border-style-solid border-1 "+borderColor+" f-colby-compres-bold ps-2 pe-2 "+background}>
                                                Generalmente</td>
                                            <td className={"color-white border-style-solid border-1 "+borderColor+" f-colby-compres-bold ps-2 pe-2 "+background}>
                                                Siempre</td>
                                        </tr>
                                        <tr>
                                            <td className={"f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 "+borderColor+" "+bgc_cajas}>El ambiente de trabajo en mi equipo es agradable.</td>
                                            <td className={"border-style-solid border-1 "+borderColor}></td>
                                            <td className={"border-style-solid border-1 "+borderColor}></td>
                                            <td className={"border-style-solid border-1 "+borderColor}></td>
                                            <td className={"border-style-solid border-1 "+borderColor}></td>

                                        </tr>
                                        <tr>
                                            <td className={"f-Ubuntu-L fsp-12 text-start psp-5 border-style-solid border-1 "+borderColor+" "+bgc_cajas}>Estoy contento de trabajar en este proyecto.</td>
                                            <td className={"border-style-solid border-1 "+borderColor}></td>
                                            <td className={"border-style-solid border-1 "+borderColor}></td>
                                            <td className={"border-style-solid border-1 "+borderColor}></td>
                                            <td className={"border-style-solid border-1 "+borderColor}></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            {/*  ENCABEZADO FIN PARTE 3 */}

              {/* PIE DE PAGINA */}
              <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                  <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                    ABP &copy; SM
                  </div>
                  <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
              </div>
                <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end marcador-etapa" style={{bottom:0}}>

                    <div className="col-1 position-relative col-sm-2 p-0 m-0">
                      <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                        <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                        <div className="w-100 hp-25 bgc-goten"></div>
                    </div>
                    <div className="col-7 position-relative col-sm-2 p-0 m-0">
                        <img src="images/rotulo_planificacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                        <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                        <div className="w-100 hp-25 bgc-bulma"></div>
                    </div>
                    <div className="col-1 position-relative col-sm-2 p-0 m-0">
                      <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
                        <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                        <div className="w-100 hp-25 bgc-android18"></div>
                    </div>
                    <div className="col-1 position-relative col-sm-2 p-0 m-0">
                      <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
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
