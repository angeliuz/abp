import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

import "./page_064.css";

function Page064(props) {

  const pagina = "064";
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
        <div className="page cb-page66 bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v1 hp-80 bgc-saitama">
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          {/* CONTENIDO DE PAGINA */}
          <div className="container-titulo-global mbp-∫0 mtp-30">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">5</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Definimos la fecha y el lugar de la presentación.</div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.jpg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>
          <div className="bgc-padme cb-calc cb-600 mx-auto psp-10 pep-10 ptp-20 pbp-20 rounded-p-10">
            <div className="cb-600 w-100 mx-auto d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <div className="mep-5 f-Ubuntu-R"> Día:</div>
                <div className="bgc-white ptp-2 pbp-2 psp-2 pep-2 rounded-p-10 wp-100">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1  lhp-35 min-hp-35" />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="mep-5 f-Ubuntu-R"> Mes:</div>
                <div className="bgc-white ptp-2 pbp-2 psp-2 pep-2 rounded-p-10 wp-100">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1  lhp-35 min-hp-35" />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="mep-5 f-Ubuntu-R"> Año:</div>
                <div className="bgc-white ptp-2 pbp-2 psp-2 pep-2 rounded-p-10 wp-100">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35" />
                </div>
              </div>
            </div>
            <div className="cb-600 w-100 mx-auto d-flex align-items-center justify-content-center mtp-20">
              <div className="d-flex align-items-center mep-60">
                <div className="mep-5 f-Ubuntu-R">Hora:</div>
                <div className="bgc-white ptp-2 pbp-2 psp-2 pep-2 rounded-p-10 wp-100">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35" />
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="mep-5 f-Ubuntu-R">Lugar:</div>
                <div className="bgc-white ptp-2 pbp-2 psp-2 pep-2 rounded-p-10 wp-100">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35" />
                </div>
              </div>
            </div>
          </div>
          {/* INICIO ACTIVIDAD 2 */}
          <div className="container-titulo-global mbp-60 cb-600">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">6</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Solicitamos ayuda para comunicar a la comunidad educativa la fecha y el lugar de la presentación de las brigadas.</div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.jpg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>



          <div className={"w-100 " + bgc_cajas + " border-top-style-solid " + borderColor + " border-2 pbp-100 position-relative"}>
            <div className="position-absolute top-0 start-100 translate-middle msp--100 mtp--80 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-160" alt="" /></div>
            <div className="position-absolute top-0 start-0 translate-middle msp-100 mtp-0  zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-100" alt="" /></div>
            <div className="d-flex flex-column global-margin mtp-40 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
              <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-10">¿Cómo voy?</div>
              <div className="d-flex flex-column bgc-white rounded-p-10 psp-10 pep-10 ptp-10 pbp-10 mtp-0 mbp-0">
                <div className="row p-0 m-0 w-100">
                  <div className="col-12 p-0 m-0">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-start">
                        <div className="mtp-0 pep-5">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                        </div>
                        <div className="f-Ubuntu-L fsp-15 ptp-2 text-start"> Las tareas en las que más me gusta participar son:</div>
                      </div>
                      <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 p-0 m-0">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-start">
                        <div className="mtp-0 pep-5">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                        </div>
                        <div className="f-Ubuntu-L fsp-15 ptp-2 text-start"> Me resulta más difícil llegar a acuerdos cuando:</div>
                      </div>
                      <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 p-0 m-0">
                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-start">
                        <div className="mtp-0 pep-5">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                        </div>
                        <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">  ¿Quién me ha ayudado y se lo voy a agradecer?</div>
                      </div>
                      <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="global-margin mbp-100 psp-0 pep-0 ptp-10 pbp-10  f-Ubuntu-L fsp-13 rounded-p-10 position-relative">

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
                        <td className={"bgc-white rounded-ts-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 ">
                            <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                            Confío en mi capacidad para aprender y me valoro.
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white rounded-te-10  min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-bottom-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                            <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                            Confío en mis compañeros y me ayudan cuando lo necesito.
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-1 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-1 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-1 " + borderColorTabla}>
                          <div className="d-flex center-center">
                            <div className="wp-30 hp-30">
                              <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                            </div>
                          </div>
                        </td>
                        <td className={"bgc-white rounded-be-10   f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-bottom-hidden border-right-hidden border-1 " + borderColorTabla}>
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


          </div>



          {/* PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
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
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>
          {/* FIN PIE DE PAGINA */}

        </div>
      </div>
    </div>





  );
}

export default Page064;
