import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check"

import "./page_056.css";

function Page056(props) {

  const pagina = "056";
  var indexInput = 0;
  const etapa = "4"
  const background = "bgc-pidgey";
  const color = "color-pidgey";
  const borderColor = "border-color-pidgey"
  const borderColorTabla = "border-color-pantro"
  const bgc_cajas = "bgc-pantro";



  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>

          <div className="d-flex global-margin mtp-40 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="d-flex mtp-30 mbp-0 psp-10 pep-10 ptp-0 pbp-0">
                  <div className="row p-0 m-0 w-100">
                    <div className="col-12 p-0 m-0 position-relative">
                      <div className="position-absolute top-50 start-0 translate-middle msp--20 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-60" alt="" /></div>
                      <div className="position-absolute top-0 start-100 translate-middle msp--10 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-30" alt="" /></div>
                      <div className="border-style-solid border-2 border-color-pidgey rounded-p-10">
                        <div className="d-flex flex-column bgc-white rounded-p-10">
                          <div className="bgc-pantro w-100 f-Ubuntu-R text-start fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                            Lo que hemos hecho en las etapas anteriores y en esta nos sirve para:
                          </div>
                          <div className="psp-10 pep-10">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-190" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-12 col-md-6 p-0 m-0 position-relative">
                <div className="d-flex mtp-30 mbp-50 psp-10 pep-10 ptp-0 pbp-0">
                  <div className="row p-0 m-0 w-100">
                    <div className="col-12 p-0 m-0 position-relative">
                      <div className="position-absolute top-100 start-0 translate-middle msp--20 mtp--60 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div>
                      <div className="border-style-solid border-2 border-color-padme rounded-p-10">
                        <div className="d-flex flex-column bgc-white rounded-p-10">
                          <div className="bgc-jaga w-100 f-Ubuntu-R text-start fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                            Lo más difícil hasta ahora ha sido:
                          </div>
                          <div className="psp-10 pep-10">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-190" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 p-0 m-0 position-relative">
                <div className="d-flex mtp-30 mbp-50 psp-10 pep-10 ptp-0 pbp-0">
                  <div className="row p-0 m-0 w-100">
                    <div className="col-12 p-0 m-0 position-relative">
                      <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp-10 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-60" alt="" /></div>
                      <div className="border-style-solid border-2 border-color-saitama rounded-p-10">
                        <div className="d-flex flex-column bgc-white rounded-p-10">
                          <div className="bgc-bobafett w-100 f-Ubuntu-R text-start fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                            Lo más fácil hasta ahora ha sido:
                          </div>
                          <div className="psp-10 pep-10">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-190" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* BEGIN TABLE */}
          <div className="global-margin mbp-0 psp-0 pep-0 ptp-10 pbp-10  f-Ubuntu-L fsp-13 rounded-p-10 ">
            <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-0">
              {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/generales/ticket.svg" className="hp-17 mtp--3 msp-5 mep-5" alt=""/>el recuadro que mejor me represente.</span> */}
              <div className="w-100 p-0 pb-3 position-relative">
                <div className="position-absolute top-0 start-0 msp-10 mtp--5 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo vamos?</div>
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
                          Nos involucramos en la realización de la tarea y nos responsabilizamos del trabajo que debemos hacer.
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                              <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                        </div>
                      </td>
                      <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                              <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                        </div>
                      </td>
                      <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                              <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                        </div>
                      </td>
                      <td className={"bgc-white rounded-te-10  min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                              <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className={"f-Ubuntu-L fsp-14 text-start p-0 m-0 "}>
                        <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                          Ante una petición de apoyo de alguien del equipo, intentamos ayudar antes de preguntarle al profesor.
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                              <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                              <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                              <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                              <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                          Respetamos el turno de la palabra.
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                              <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                              <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                              <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                              <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-bottom-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                          Llegamos a acuerdos y decisiones compartidas después de que cada uno ofrezca su opinión.
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                              <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                              <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                              <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                        </div>
                      </td>
                      <td className={"bgc-white rounded-be-10   f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-bottom-hidden border-right-hidden border-2 " + borderColorTabla}>
                        <div className="d-flex center-center">
                              <div className="wp-30 hp-30">
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


          <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <img src={"images/page_" + pagina + "/img_005.png"} className="wp-100" alt="" />
              </div>
            </div>
          </div>



          {/* BEIGN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>

    // <div className="wrapper bgc-light">
    //         <div className="d-flex flex-column align-items-center pbp-20">
    //           <div className="page cb-page56 bgc-white overflow-hidden position-relative cb-6" id={"page_"+pagina}>
    //             {/* contenido DE PAGINA */}






    //             <div className="position-relative w-100 ptp-100 psp-10 pep-10">

    //                         <div className="bgc-white border-style-solid border-2 border-color-pidgey rounded-p-10 position-relative">
    //                         <div className="position-absolute top-50 start-100 translate-middle    "><img src="images/page_056/img_001.png" className="hp-90" alt="" /></div>
    //                         <div className="position-absolute top-50 start-0 translate-middle   "><img src="images/page_056/img_002.png" className="hp-65" alt="" /></div>
    //                             <div className="bgc-pantro w-70 text-start mtp--10 msp--10 rounded-p-10">
    //                                 <div className="f-Ubuntu-R psp-20 py-2">Si hubiéramos tenido más tiempo nos hubiese gustado añadir:</div>
    //                             </div>
    //                             <div className="psp-20 pep-20 pbp-20">
    //                                 <div className="linea pbp-20"></div>
    //                                 <div className="linea pbp-20"></div>
    //                                 <div className="linea pbp-20"></div>
    //                                 <div className="linea pbp-20"></div>
    //                                 <div className="linea pbp-20"></div>
    //                                 <div className="linea pbp-20"></div>
    //                             </div>
    //                         </div>
    //             </div>









    //           <div className="d-flex justify-content-center">

    //               <div className="  w-100">
    //                   <div className="msp-10 mep-10   pbp-60">
    //                   <div className="row ptp-20">
    //                           <div className="col-md-6 ">
    //                               <div className="bgc-white mpt-10 border-style-solid border-2 border-color-voldemort rounded-p-10  position-relative">
    //                               <div className="position-absolute top-100 start-0 translate-middle msp--20 mtp--30 "><img src="images/page_056/img_003.png" className="wp-50" alt="" /></div>
    //                                   <div className="bgc-tigro w-90 text-start mtp--10 msp--10 rounded-p-10">
    //                                       <div className="f-Ubuntu-R psp-20 py-2">Lo más difícil hasta ahora ha sido:</div>
    //                                   </div>
    //                                   <div className="psp-20 pep-20 pbp-20">
    //                                       <div className="linea pbp-20"></div>
    //                                       <div className="linea pbp-20"></div>
    //                                       <div className="linea pbp-20"></div>
    //                                       <div className="linea pbp-20"></div>
    //                                       <div className="linea pbp-20"></div>
    //                                       <div className="linea pbp-20"></div>
    //                                   </div>
    //                               </div>
    //                           </div>
    //                           <div className="col-md-6 ">
    //                               <div className="bgc-white mpt-10 border-style-solid border-2 border-color-saitama rounded-p-10  position-relative">
    //                               <div className="position-absolute top-100 start-100 translate-middle   msp-20 mtp--5 visible-768 "><img src="images/page_056/img_004.png" className="wp-60" alt="" /></div>
    //                                   <div className="bgc-bobafett w-90 text-start mtp--10 msp--10 rounded-p-10">
    //                                       <div className="f-Ubuntu-R psp-20 py-2">Lo más fácil hasta ahora ha sido:</div>
    //                                   </div>
    //                                   <div className="psp-20 pep-20 pbp-20 keko">
    //                                       <div className="linea pbp-20"></div>
    //                                       <div className="linea pbp-20"></div>
    //                                       <div className="linea pbp-20"></div>
    //                                       <div className="linea pbp-20"></div>
    //                                       <div className="linea pbp-20"></div>
    //                                       <div className="linea pbp-20"></div>
    //                                   </div>
    //                               </div>
    //                           </div>
    //                       </div>
    //                   </div>
    //               </div>

    //           </div>






    //           <div className="wp-600">


    //                      <div className="block-bottom mtp-30 text-start f-pixilate-bold fsp-18">¿Cómo vamos?</div>

    //                   <div className="f-Ubuntu-L bgc-info fsp-13 rounded-p-10 mbp-50 ">
    //                     <div className="bgc-white rounded-p-10 pep-80 d-flex position-relative ">
    //                       <div className="position-absolute top-50 start-100 translate-middle msp-50  visible-768"><img src="images/page_056/img_005.png" className="wp-100" alt="" /></div>


    //                           <div className=" mbp-30">
    //                             <div className="d-flex pep-10 justify-content-between  wp-600 ">
    //                               <div className="block-bottom text-start mtp-30 f-pixilate-bold fsp-18">

    //                               </div>
    //                               <div className="d-flex flex-row-reverse block-bottom mtp-30">
    //                                 <div className="nunca   f-pixilate-regular">Siempre</div>
    //                                 <div className="siempre  f-pixilate-regular">Generalmente</div>
    //                                 <div className="siempre  f-pixilate-regular">A veces</div>
    //                                 <div className="siempre  f-pixilate-regular">Núnca</div>
    //                               </div>
    //                             </div>
    //                             <div className="psp-15 pep-20 f-Ubuntu-L fsp-13 rounded-set-10 ">
    //                               <div className="d-flex justify-content-between ">
    //                                 <div className="d-flex  cb-contenedor-tabla-texto ">
    //                                   <div className="flecha-pidgey pep-10 mtp-8"></div>
    //                                   <span className="text-start f-Ubuntu-L fsp-15 ptp-5 ">
    //                                       Nos involucramos en la realización de la tarea y nos responsabilizamos del trabajo que debemos hacer.
    //                                   </span>
    //                                 </div>
    //                                 <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center">
    //                                   <div className="psp-30-r">
    //                                     <div className="cuadrado borde-cuadrado">
    //                                       <InputBox
    //                                         id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
    //                                       />
    //                                     </div>
    //                                   </div>
    //                                   <div className="psp-40-r">
    //                                     <div className="cuadrado borde-cuadrado">
    //                                       <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
    //                                       />
    //                                     </div>
    //                                   </div>
    //                                   <div className="psp-40-r">
    //                                     <div className="cuadrado borde-cuadrado">
    //                                       <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
    //                                       />
    //                                     </div>
    //                                   </div>
    //                                   <div className="">
    //                                     <div className="cuadrado borde-cuadrado">
    //                                       <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
    //                                       />
    //                                     </div>
    //                                   </div>
    //                                 </div>
    //                               </div>
    //                             </div>

    //                             <div className="ptp-2 "></div>
    //                             <div className="psp-15 pep-20 f-Ubuntu-L   fsp-13 rounded-seb-10 wp-600">

    //                               <div className="d-flex justify-content-between ">
    //                                 <div className="d-flex cb-contenedor-tabla-texto-400 ">
    //                                   <div className="flecha-pidgey pep-10 mtp-8"></div> <span className="text-start f-Ubuntu-L fsp-15 ptp-5">
    //                                   Ante una petición de apoyo de alguien del equipo, intentamos ayudar antes de preguntarle al profesor.
    //                                   </span>
    //                                 </div>
    //                                 <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center ">
    //                                   <div className="psp-30-r">
    //                                     <div className="cuadrado borde-cuadrado">
    //                                       <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
    //                                       />
    //                                     </div>
    //                                   </div>
    //                                   <div className="psp-40-r">
    //                                     <div className="cuadrado borde-cuadrado">
    //                                       <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
    //                                       />
    //                                     </div>
    //                                   </div>
    //                                   <div className="psp-40-r">
    //                                     <div className="cuadrado borde-cuadrado">
    //                                       <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
    //                                       />
    //                                     </div>
    //                                   </div>
    //                                   <div className="">
    //                                     <div className="cuadrado borde-cuadrado">
    //                                       <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
    //                                       />
    //                                     </div>
    //                                   </div>
    //                                 </div>
    //                               </div>


    //                               <div className="d-flex justify-content-between ">
    //                                 <div className="d-flex  cb-contenedor-tabla-texto-400 ">
    //                                   <div className="flecha-pidgey pep-10 mtp-8"></div> <span className="text-start f-Ubuntu-L fsp-15 ptp-5">
    //                                         Respetamos el turno de la palabra.
    //                                   </span>
    //                                 </div>
    //                                 <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center">
    //                                   <div className="psp-30-r">
    //                                     <div className="cuadrado borde-cuadrado">
    //                                       <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
    //                                       />
    //                                     </div>
    //                                   </div>
    //                                   <div className="psp-40-r">
    //                                     <div className="cuadrado borde-cuadrado">
    //                                       <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
    //                                       />
    //                                     </div>
    //                                   </div>
    //                                   <div className="psp-40-r">
    //                                     <div className="cuadrado borde-cuadrado">
    //                                       <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
    //                                       />
    //                                     </div>
    //                                   </div>
    //                                   <div className="">
    //                                     <div className="cuadrado borde-cuadrado">
    //                                       <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
    //                                       />
    //                                     </div>
    //                                   </div>
    //                                 </div>
    //                               </div>





    //                               <div className="d-flex justify-content-between ">
    //                                 <div className="d-flex  cb-contenedor-tabla-texto-400 ">
    //                                   <div className="flecha-pidgey pep-10 mtp-8"></div> <span className="text-start f-Ubuntu-L fsp-15 ptp-5">
    //                                       Llegamos a acuerdos y decisiones compartidas después de que cada uno ofrezca su opinión.
    //                                   </span>
    //                                 </div>
    //                                 <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center">
    //                                   <div className="psp-30-r">
    //                                     <div className="cuadrado borde-cuadrado">
    //                                       <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
    //                                       />
    //                                     </div>
    //                                   </div>
    //                                   <div className="psp-40-r">
    //                                     <div className="cuadrado borde-cuadrado">
    //                                       <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
    //                                       />
    //                                     </div>
    //                                   </div>
    //                                   <div className="psp-40-r">
    //                                     <div className="cuadrado borde-cuadrado">
    //                                       <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
    //                                       />
    //                                     </div>
    //                                   </div>
    //                                   <div className="">
    //                                     <div className="cuadrado borde-cuadrado">
    //                                       <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
    //                                       />
    //                                     </div>
    //                                   </div>
    //                                 </div>
    //                               </div>



    //                             </div>
    //                           </div>







    //                     </div>

    //                   </div>



    //           </div>

















    //             {/* PIE DE PAGINA */}
    //             <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
    //               <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
    //                 ABP &copy; SM
    //               </div>
    //               <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
    //             </div>
    //              {/* FIN PIE DE PAGINA */}

    //         </div>
    //     </div>
    // </div>





  );
}

export default Page056;
