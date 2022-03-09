import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import Check from "../components/Check";
import "./page_036.css";

function Page036(props) {

  const pagina = "036";
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
          <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* BEGIN CABECERA VERSIÓN 2 */}
                <div className="cabecera-v1 hp-80 bgc-pidgey"></div> 
                {/* END CABECERA VERSIÓN 2 */}

              <div className="ptp-25 psp-100 pep-100 pbp-20">
                <div className="row">
                  <div className="col-12 col-md-6 p-1">
                    <div className="w-100 rounded-p-10 bgc-jaga p-2 m-0 position-relative">
                      <div className="position-absolute top-0 start-0">
                        <img src="images/page_036/pincho.png" className="hp-55" alt=""/>
                        <div className="mtp--37 msp-25 color-white f-hanoded-butterflyball fsp-18 rota_p36">Pregunta 4</div>
                      </div>
                      <div className="w-100 rounded-p-10 bgc-white p-3 m-0">
                        <div className="f-Ubuntu-L fsp-15 text-start ptp-30">Resultados:</div>
                        <div className="min-hp-140">
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-140" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 p-1">
                    <div className="w-100 rounded-p-10 bgc-jaga p-2 m-0 position-relative">
                      <div className="position-absolute top-0 start-0">
                        <img src="images/page_036/pincho.png" className="hp-55" alt=""/>
                        <div className="mtp--37 msp-25 color-white f-hanoded-butterflyball fsp-18 rota_p36">Pregunta 5</div>
                      </div>
                      <div className="w-100 rounded-p-10 bgc-white p-3 m-0">
                        <div className="f-Ubuntu-L fsp-15 text-start ptp-30">Resultados:</div>
                        <div className="min-hp-140">
                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-140" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row ptp-10 psp-80 pep-80 mbp-100">
                <div className="col-9">
                  <div className="f-Ubuntu-B fsp-20 color-pidgey text-start lhp-20">Elaboramos gráficos de barras</div>
                  <div className="d-flex">
                    <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">3</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Construimos gráficos para los resultados de cada pregunta que presentaremos en nuestra fiesta. Utilizamos el material que nos entregarán.</div>
                    <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_036/circ.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" />
                  </div>
                </div>
                <div className="col-3"><img src="images/page_036/mono.png" alt="" className="hp-160 mtp--20" /></div>
              </div>




              <div className={"border-top-style-solid "+borderColor+" border-2 pbp-50 position-relative "+bgc_cajas}>
                    
                    <div className="global-margin mtp-30 mbp-5 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo voy?</div>
                    <div className="global-margin mbp-50 psp-20 pep-20 ptp-10 pbp-10  f-Ubuntu-L bgc-white fsp-15 rounded-p-10 ">
                        <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mtp-10">
                            <div className="d-flex">
                              <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 wp-15" alt="" />
                              <span className="w-24 f-Ubuntu-L text-start">Los pasos que seguí hoy son…</span>
                            </div>
                        </div>
                        <div className="pt-0 flex-grow-1 mbp-20">
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                        </div>
                        


                    </div>
                    
                    <div className="global-margin mbp-50 psp-0 pep-0 ptp-10 pbp-10  f-Ubuntu-L fsp-13 rounded-p-10 ">
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
                                            <td className={"bgc-white rounded-ts-10 f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 "+borderColorTabla}>
                                              <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 ">
                                              <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                                Me siento tenso y nervioso cuando trabajo  con mi equipo. 
                                              </div> 
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 "+borderColorTabla}>
                                              <div className="d-flex center-center">
                                                <div className="wp-30 hp-30 k bgc-white rounded-1">
                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                </div>
                                              </div>
                                            </td>
                                            <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 "+borderColorTabla}>
                                              <div className="d-flex center-center">
                                                <div className="wp-30 hp-30 bgc-white  rounded-1">
                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                </div>
                                              </div>
                                            </td>
                                            <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 "+borderColorTabla}>
                                              <div className="d-flex center-center">
                                                <div className="wp-30 hp-30 bgc-white rounded-1">
                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                </div>
                                              </div>
                                            </td>
                                            <td className={"bgc-white rounded-te-10  min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 "+borderColorTabla}>
                                              <div className="d-flex center-center">
                                                <div className="wp-30 hp-30 bgc-white rounded-1">
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
                                            <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-bottom-hidden border-left-hidden border-right-hidden border-1 "+borderColorTabla}>
                                              <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                                                <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                                Me asusta no hacer bien el trabajo y recibir críticas.
                                              </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-1 "+borderColorTabla}>
                                              <div className="d-flex center-center">
                                                <div className="wp-30 hp-30 bgc-white rounded-1">
                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                </div>
                                              </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-1 "+borderColorTabla}>
                                              <div className="d-flex center-center">
                                                <div className="wp-30 hp-30 bgc-white rounded-1">
                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                </div>
                                              </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-1 "+borderColorTabla}>
                                              <div className="d-flex center-center">
                                                <div className="wp-30 hp-30 bgc-white rounded-1">
                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                </div>
                                              </div>
                                            </td>
                                            <td className={"bgc-white rounded-be-10   f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-bottom-hidden border-right-hidden border-1 "+borderColorTabla}>
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
                </div>


            <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
              <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
              <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
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
              <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_experimentacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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
          </div>
        </div>
      </div>
  );
}

export default Page036;
