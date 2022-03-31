import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import Check from "../components/Check";
import "./page_054.css";

function Page054(props) {

  const pagina = "054";
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
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v1 hp-80 bgc-pidgey"></div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="psp-130 pep-80 mbp-40">
            <div className="row mbp-10 bgc-ryu rounded-p-5 p-3 bloque-respuesta">
              <div className="col-12 p-1 m-0 position-relative">
                <div className="position-absolute top-0 start-0"><img src="images/page_054/pincho.svg" className="wp-35 msp--15 mtp--10" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle"><img src="images/page_054/semaforo.png" className="wp-50 mep-60 mtp-50" alt="" /></div>
                <div className="bgc-white rounded-p-5 p-2 border-style-solid border-color-goten border-2">
                  <div className="f-Ubuntu-L fsp-15 p-1 text-start mtp-5">Se siente olor a gas en el casino del colegio.</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                </div>
              </div>

              <div className="col-12 p-1 m-0 position-relative">
                <div className="position-absolute top-0 start-0"><img src="images/page_054/pincho.svg" className="wp-35 msp--15 mtp--10" alt="" /></div>
                <div className="bgc-white rounded-p-5 p-2 border-style-solid border-color-bulma border-2">
                  <div className="f-Ubuntu-L fsp-15 p-1 text-start mtp-5">Un estudiante se siente enfermo durante la clase.</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                </div>
              </div>

              <div className="col-12 p-1 m-0 position-relative">
                <div className="position-absolute top-100 start-100 translate-middle"><img src="images/page_054/cronometro.png" className="wp-70 mep--50 mtp--30" alt="" /></div>
                <div className="position-absolute top-0 start-0"><img src="images/page_054/pincho.svg" className="wp-35 msp--15 mtp--10" alt="" /></div>
                <div className="bgc-white rounded-p-5 p-2 border-style-solid border-color-saitama border-2">
                  <div className="f-Ubuntu-L fsp-15 p-1 text-start mtp-5">Se derrama agua caliente en una actividad extraprogramática.</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                </div>
              </div>
            </div>
          </div>

          {/* <div className="psp-40 pep-40 pbp-0 mbp-40 bgc-pantro linea-separa">
              <div className="row px-5 ptp-20">

                  <div className="d-flex contenedor mtp-20">
                    <div className="f-pixilate-bold text-start fsp-17 flex-fill pbp-5 w-55">¿Cómo me siento?</div>
                    <div className="text-center f-Ubuntu-L fsp-12 w-10">Nunca</div>
                    <div className="text-center f-Ubuntu-L fsp-12 w-10">A veces</div>
                    <div className="text-center f-Ubuntu-L fsp-12 w-15">Generalmente</div>
                    <div className="text-center f-Ubuntu-L fsp-12 w-10">Siempre</div>
                  </div>

                  <div className="contenedor pt-2 pb-2 f-Ubuntu-L bgc-white fsp-13 rounded-p-10"> 
                    <div className="d-flex w-100 titulo-linea mbp-10 align-items-center">
                        <div className="flex-fill d-flex msp-10 w-55"><img src="images/page_054/flecha.png" className="mep-5 hp-15 mtp-3" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">Me siento tenso y nervioso cuando trabajo con mi equipo.</span></div>
                        <div className="w-10"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                        <div className="w-10"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                        <div className="w-15"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                        <div className="w-10"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                    </div>

                    <div className="d-flex w-100 titulo-linea linea-separa-int ptp-10 mbp-10 align-items-center">
                        <div className="flex-fill d-flex msp-10 w-55"><img src="images/page_054/flecha.png" className="mep-5 hp-15 mtp-3" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">Me asusta no hacer bien el trabajo y recibir críticas.</span></div>
                        <div className="w-10"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                        <div className="w-10"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                        <div className="w-15"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                        <div className="w-10"><img src="images/page_054/cuadro.svg" alt="" className="wp-30" /></div>
                    </div>
                  </div>

                </div>
              </div> */}


          <div className={"w-100 " + bgc_cajas + " border-top-style-solid " + borderColor + " border-2 mbp-30"}>

            <div className="global-margin psp-0 pep-0 ptp-20 pbp-80  f-Ubuntu-L fsp-13 rounded-p-10 ">
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
                        <td className={"bgc-white rounded-ts-10 f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 ">
                            <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                            Me siento tenso y nervioso cuando trabajo con mi equipo.
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
                      {/* <tr>
                    <td className={"f-Ubuntu-L fsp-12 text-start p-0 m-0 "}>
                    <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                    <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                    El ambiente de trabajo. El ambiente de trabajo. El ambiente de trabajo. 
                    </div> 
                    </td>
                    <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-1 "+borderColorTabla}>
                    <div className="d-flex center-center">
                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                    </div>
                    </div>
                    </td>
                    <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-1 "+borderColorTabla}>
                    <div className="d-flex center-center">
                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                    </div>
                    </div>
                    </td>
                    <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-1 "+borderColorTabla}>
                    <div className="d-flex center-center">
                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                    </div>
                    </div>
                    </td>
                    <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-1 "+borderColorTabla}>
                    <div className="d-flex center-center">
                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                    </div>
                    </div>
                    </td>
                    </tr> */}
                      <tr>
                        <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-bottom-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                          <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                            <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                            Me asusta no hacer bien el trabajo y recibir críticas.
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


          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>

          <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end bgc-pantro" style={{ bottom: 0 }}>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-7 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
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

export default Page054;
