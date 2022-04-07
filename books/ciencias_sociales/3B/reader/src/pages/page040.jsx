import React from "react";
import InputBox from "../components/InputBox";
import Check from "../components/Check";
// import ModalVideo from "../components/ModalVideo";

import "./page_040.css";

function Page040(props) {

  const pagina = "040";
  var indexInput = 0;
  const etapa = "4"
  const background = "bgc-pidgey";
  const color = "color-pidgey";
  const colorSesion = "color-primary";
  const borderColor = "border-color-pidgey"
  const borderColorTabla = "border-color-pantro"
  const bgc_cajas = "bgc-pantro";

  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>


          <div className="ptp-20 mep-80 mtp-50 msp-80 mbp-40">
            <div className="row px-5">
              <div className="col-sm-12 col-md-6">
                <div className="border-style-solid border-2 border-color-ken rounded-p-10 p-3 bgc-white">
                  <div className="f-Ubuntu-L fsp-16 text-start w-100 hp-50">Lo que tenemos para nuestra Fiesta de la Diversidad…</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 position-relative">
                <div className="espirales-creacion-40 position-absolute"><img src="images/page_040/espiral.png" className="w-45" alt="" /></div>
                <div className="border-style-solid border-2 border-color-ken rounded-p-10 p-3 bgc-white espacio">
                  <div className="f-Ubuntu-L fsp-16 text-start w-100 hp-50">Lo que creemos que nos falta…</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                </div>
              </div>
            </div>
            <div className="row px-5 ptp-30">
              <div className="col-12 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle visible-768 msp--100 "><img src="images/page_040/vinocular.png" className="wp-60" alt="" /></div>
                <div className="position-absolute top-0 start-100 translate-middle msp--10 mtp-10"><img src="images/page_040/clip.png" className="wp-50" alt="" /></div>
                <div className="p-3 bgc-white box-shadow-simple">
                  <div className="f-Ubuntu-L fsp-16 text-start w-100">Lo que más nos gustó trabajar en esta etapa…</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                </div>
              </div>
            </div>

          </div>




          <div className="global-margin mbp-100 psp-0 pep-100 ptp-10 pbp-10 f-Ubuntu-L fsp-15 rounded-p-10">
            <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-0">
              {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/generales/ticket.svg" className="hp-17 mtp--3 msp-5 mep-5" alt=""/>el recuadro que mejor me represente.</span> */}
              <div className="w-100 p-0 pb-3 position-relative">
                <div className="position-absolute top-0 start-0 msp-10 mtp--5 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo vamos?</div>
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
                      <td className={"bgc-white rounded-ts-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 ">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                          Nos implicamos en la realización de la tarea y nos responsabilizamos del trabajo que tenemos que hacer.
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30 bgc-white rounded-1">
                          <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30 bgc-white rounded-1">
                          <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30 bgc-white rounded-1">
                          <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white rounded-te-10  min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30 bgc-white rounded-1">
                          <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>


                    </tr>
                    <tr>
                      <td className={"f-Ubuntu-L fsp-14 text-start p-0 m-0 "}>
                        <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                          Ante una petición de apoyo de alguien del grupo, intentamos ayudar antes de preguntarle al profesor.
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30 bgc-white rounded-1">
                          <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30 rounded-1">
                          <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30  rounded-1">
                          <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30 bgc-white rounded-1">
                          <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className={"f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                          Respetamos el turno de la palabra.
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30 bgc-white rounded-1">
                          <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30 rounded-1">
                          <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30 bgc-white rounded-1">
                          <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30 bgc-white rounded-1">
                          <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-bottom-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                          <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                          Llegamos a acuerdos y decisiones compartidas después de que cada uno da su opnión.
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30 rounded-1">
                          <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30 bgc-white rounded-1">
                          <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30 rounded-1">
                          <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                      <td className={"bgc-white rounded-be-10   f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-bottom-hidden border-right-hidden border-1 " + borderColorTabla}>
                        <div className="d-flex center-center">
                          <div className="wp-30 hp-30 bgc-white rounded-1">
                          <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="position-absolute top-50 start-100 translate-middle msp-60 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/mono.png"} className="wp-120" alt="" /></div>
              </div>
            </div>
          </div>








          {/* <div className="row px-5 ptp-20 w-95 position-relative">
                    <div className="position-absolute bottom-0 start-50 msp-0 mtp-0"><img src="images/page_040/mono.png" className="wp-120" alt="" /></div>
                        <div className="d-flex contenedor mtp-20">
                          <div className="f-pixilate-bold text-start fsp-16 flex-fill pbp-5 w-55">¿Cómo vamos?</div>
                          <div className="text-center f-Ubuntu-L fsp-12 w-10">Nunca</div>
                          <div className="text-center f-Ubuntu-L fsp-12 w-10">A veces</div>
                          <div className="text-center f-Ubuntu-L fsp-12 w-15">Generalmente</div>
                          <div className="text-center f-Ubuntu-L fsp-12 w-10">Siempre</div>
                        </div>

                        <div className="contenedor pt-2 pb-2 f-Ubuntu-L bgc-white fsp-13 rounded-p-10"> 
    
                            <div className="d-flex w-100 titulo-linea mbp-10 align-items-center">
                                <div className="flex-fill d-flex msp-10 w-55"><img src="images/page_036/flecha.png" className="mep-5 hp-15 mtp-3" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">Nos implicamos en la realización de la tarea y nos responsabilizamos del trabajo que tenemos que hacer.</span></div>
                                <div className="w-10"><img src="images/page_040/cuadro.svg" alt="" className="wp-30" /></div>
                                <div className="w-10"><img src="images/page_040/cuadro.svg" alt="" className="wp-30" /></div>
                                <div className="w-15"><img src="images/page_040/cuadro.svg" alt="" className="wp-30" /></div>
                                <div className="w-10"><img src="images/page_040/cuadro.svg" alt="" className="wp-30" /></div>
                            </div>

                            <div className="d-flex w-100 titulo-linea linea-separa-int ptp-10 mbp-10 align-items-center">
                                <div className="flex-fill d-flex msp-10 w-55"><img src="images/page_036/flecha.png" className="mep-5 hp-15 mtp-3" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">Ante una petición de apoyo de alguien del grupo, intentamos ayudar antes de preguntarle al profesor.</span></div>
                                <div className="w-10"><img src="images/page_040/cuadro.svg" alt="" className="wp-30" /></div>
                                <div className="w-10"><img src="images/page_040/cuadro.svg" alt="" className="wp-30" /></div>
                                <div className="w-15"><img src="images/page_040/cuadro.svg" alt="" className="wp-30" /></div>
                                <div className="w-10"><img src="images/page_040/cuadro.svg" alt="" className="wp-30" /></div>
                            </div>

                            <div className="d-flex w-100 titulo-linea linea-separa-int ptp-10 mbp-10 align-items-center">
                                <div className="flex-fill d-flex msp-10 w-55"><img src="images/page_036/flecha.png" className="mep-5 hp-15 mtp-3" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">Respetamos el turno de la palabra.</span></div>
                                <div className="w-10"><img src="images/page_040/cuadro.svg" alt="" className="wp-30" /></div>
                                <div className="w-10"><img src="images/page_040/cuadro.svg" alt="" className="wp-30" /></div>
                                <div className="w-15"><img src="images/page_040/cuadro.svg" alt="" className="wp-30" /></div>
                                <div className="w-10"><img src="images/page_040/cuadro.svg" alt="" className="wp-30" /></div>
                            </div>

                            <div className="d-flex w-100 titulo-linea linea-separa-int ptp-10 align-items-center">
                                <div className="flex-fill d-flex msp-10 w-55"><img src="images/page_036/flecha.png" className="mep-5 hp-15 mtp-3" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">Llegamos a acuerdos y decisiones compartidas después de que cada uno da su opnión.</span></div>
                                <div className="w-10"><img src="images/page_040/cuadro.svg" alt="" className="wp-30" /></div>
                                <div className="w-10"><img src="images/page_040/cuadro.svg" alt="" className="wp-30" /></div>
                                <div className="w-15"><img src="images/page_040/cuadro.svg" alt="" className="wp-30" /></div>
                                <div className="w-10"><img src="images/page_040/cuadro.svg" alt="" className="wp-30" /></div>
                            </div>

                        </div>
                    </div> */}




          {/* PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>

        </div>
      </div>
    </div>


  );
}

export default Page040;
