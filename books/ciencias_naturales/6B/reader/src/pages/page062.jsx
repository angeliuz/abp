import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";


import "./page_062.css";

function Page062(props) {

  const pagina = "062";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const borderColor = "border-color-saitama"
  const borderColorTabla = "border-color-bobafett"
  const bgc_cajas = "bgc-bobafett";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>




          <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12">
                <div className="row">
                  <div className="col-6 ">
                    <div className="d-flex justify-content-start text-start"></div>
                    <div className="ptp-10 mbp-20">
                      <div className="d-flex ">
                        {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_068/i_g.svg" alt="" /> */}
                        <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>6</div>
                        <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                          Evaluamos los materiales que nos faltan y los pasos que nos faltan.
                        </div>
                        <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_068/revista.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
                      </div>
                    </div>
                    <div className="mtp-20">
                      <div className="w-100  p-1 m-2 border-style-solid border-1 border-color-lightDark rounded-p-10  lh-sm  gira-2 position-relative">Nos faltan los  <br /> siguientes materiales:
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                        <div className="position-absolute top-0 start-0  zindex-1 mtp--15"><img class=" hp-45" src="images/page_060/img_001.png" alt="" /></div>
                        <div className="position-absolute top-100 start-0 translate-middle  zindex-1 mtp-10"><img class=" hp-60" src="images/page_060/img_003.png" alt="" /></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex mtp-20">
                      <div className="w-100   p-1 m-2 border-style-solid border-1 border-color-lightDark rounded-p-10  lh-sm  gira-2 position-relative">Para conseguirlos, debemos:
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                        <div className="position-absolute top-0 end-0    zindex-1 mep-10 mtp--15"><img class=" hp-45" src="images/page_060/img_001.png" alt="" /></div>
                        <div className="position-absolute top-100 start-100 translate-middle  zindex-1 msp-10 mtp--1"><img class=" hp-70" src="images/page_060/img_002.png" alt="" /></div>
                      </div>

                    </div>
                    <div className="mtp-20">
                      <div className="w-100  p-1 m-2 border-style-solid border-1 border-color-lightDark rounded-p-10  lh-sm  gira--2 position-relative">Las tareas que nos<br /> faltan por realizar son:
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                        <div className="position-absolute top-0 start-0  zindex-1 mtp--15"><img class=" hp-45" src="images/page_060/img_001.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>



              </div>
            </div>
          </div>






          <div className="d-flex w-100 mtp-50 psp-60 pep-60 ptp-20 mbp-0 bgc-windu border-top-style-solid border-color-dark border-2 pbp-80    position-relative">
            <div className="position-absolute top-0 start-50 translate-middle   visible-768 mtp--39 msp--80"><img src="images/page_060/img_004.png" className="wp-80 " alt="" /></div>
            <div className="row w-100 p-0 m-0">
              <div className="col-12 position-relative">
                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                      <img src="images/generales/flecha_e5.svg" className="mep-5 wp-15" alt="" />
                      <span>Mi creatividad me ha ayudado a:</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                      <img src="images/generales/flecha_e5.svg" className="mep-5 wp-15" alt="" />
                      <span>¿Cómo mi equipo ha ayudado a sacar lo mejor de mí?</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                  </div>

                </div>




                {/* BEGIN TABLE */}
                <div className="mbp-50 psp-0 pep-0 ptp-10 pbp-10 mtp-60 f-Ubuntu-L fsp-13 rounded-p-10 ">
                  <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-0">
                    {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/generales/ticket.svg" className="hp-17 mtp--3 msp-5 mep-5" alt=""/>el recuadro que mejor me represente.</span> */}
                    <div className="w-100 p-0 pb-3 position-relative">
                      <div className="position-absolute mtp--40 top-0 start-0 msp-10 mtp--10 mbp-10 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo me siento?</div>
                      <div className="d-flex position-absolute align-items-start w-50  mbp-30 top-0 start-0 msp-10 mtp--20 f-Ubuntu-R fsp-15  lh-sm text-start">¿Marco la alternativa que más me representa.</div>
                      <table className="w-100">
                        <tbody>
                          <tr>
                            <td></td>
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
                            <td className={"bgc-white rounded-ts-10 f-Ubuntu-L fsp-15 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 ">
                                <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                Confío en mi capacidad para aprender y me valoro.
                              </div>
                            </td>
                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex center-center">
                                <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                </div>
                              </div>
                            </td>
                            <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex center-center">
                                <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                </div>
                              </div>
                            </td>
                            <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex center-center">
                                <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                </div>
                              </div>
                            </td>
                            <td className={"bgc-white rounded-te-10  min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex center-center">
                                <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                </div>
                              </div>
                            </td>
                          </tr>


                          <tr>
                            <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-15 text-start p-0 m-0 border-style-solid border-bottom-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                                <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                Confío en mis compañeros y me ayudan cuando lo necesito.
                              </div>
                            </td>
                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex center-center">
                                <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                </div>
                              </div>
                            </td>
                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex center-center">
                                <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                </div>
                              </div>
                            </td>
                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex center-center">
                                <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                </div>
                              </div>
                            </td>
                            <td className={"bgc-white rounded-be-10   f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-bottom-hidden border-right-hidden border-2 " + borderColorTabla}>
                              <div className="d-flex center-center">
                                <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
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
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
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
              <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page062;
