import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";

import "./page_074.css";

function Page074(props) {

  const pagina = "074";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* BEGIN CABECERA VERSIÓN 2 */}
                <div className="cabecera-v1 hp-80 bgc-pikachu">
                </div>
                 {/* END CABECERA VERSIÓN 2 */}
                 <div className="bgc-kokomi border-top border-color-pikachu border-1 pbp-90 position-relative mtp-90">
                    <img src="images/page_074/img_001.png" className="cb-personaje-p74" alt=""></img>
                    <img src="images/page_074/img_002.png" className="cb-engranajes-p74" alt=""></img>
                    <div className="cb-block-p74 mtp-55 f-pixilate-bold mbp-5 text-start">¿Cómo voy?</div>
                    <div className=" cb-block-p74 p-2 f-Ubuntu-L bgc-white fsp-13 rounded-p-10 ps-4 pe-4 mbp-50"> 
                        <div className="flex-wrap text-start">
                            <img src="images/page_074/flecha.svg" className="hp-10 pep-5 mtp-5"></img>
                                <span className="w-24 f-Ubuntu-L">¿Qué recordaré de lo aprendido en este proyecto?</span> 
                                <div className="pep-10 psp-10">
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                                </div>                                      
                          </div>    
                          <div className="flex-wrap text-start mtp-10">
                            <img src="images/page_074/flecha.svg" className="hp-10 pep-5 mtp-5"></img>
                                <span className="w-24 f-Ubuntu-L">¿En qué momentos di lo mejor de mí?</span> 
                                <div className="pep-10 psp-10">
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                                </div>
                                        
                          </div>                                                              
                    </div>

                    <div className="cb-contenedor-tabla position-relative">
                        <div className="mbp-15 f-pixilate-bold text-start">¿Cómo me sentí?</div>
                    <div className="row hid-responsive">
                        <div className="col-md-6"> </div>
                        <div className="col-md-6">
                            <table className="mtp--45">
                                <tbody className="">
                                    <tr className="f-pixilate-regular fsp-16 text-center">
                                        <td className="mnw-50">&nbsp;</td>
                                        <td className="espacio-casilla">
                                            Nunca</td>
                                        <td className="espacio-casilla">
                                            A veces</td>
                                        <td className="espacio-casilla">
                                            Generalmente</td>
                                        <td className="espacio-casilla">
                                            Siempre</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row bgc-white cb-radius">
                        <div className="col-md-6 ptp-10 pbp-10">
                            <div className="d-flex">
                                <img src="images/page_074/flecha.svg" className="hp-10 pep-5 mtp-5"></img>
                                <div className="f-Ubuntu-L fsp-13 text-start">El ambiente de trabajo en mi equipo fue agradable.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 justify-content-center align-items-center d-flex cb-responsive">
                            <table>
                                <tbody>
                                    <tr className="f-pixilate-regular fsp-15 text-center vis-responsive">
                                        <td className="espacio-casilla">
                                            Nunca</td>
                                        <td className="espacio-casilla">
                                            A veces</td>
                                        <td className="espacio-casilla">
                                            Generalmente</td>
                                        <td className="espacio-casilla">
                                            Siempre</td>
                                    </tr>
                                    <tr>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="ptp-5"></div>
                    <div className="row bgc-white cb-radius">
                        <div className="col-md-6 ptp-15 pbp-10">
                            <div className="d-flex">
                                <img src="images/page_074/flecha.svg" className="hp-10 pep-5 mtp-5"></img>
                                <div className="f-Ubuntu-L fsp-13 text-start">Me alegra haber trabajado en este proyecto. 
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 justify-content-center align-items-center d-flex cb-responsive">
                            <table>
                                <tbody>
                                    <tr className="f-pixilate-regular fsp-15 1 text-center vis-responsive">
                                        <td className="espacio-casilla">
                                            Nunca</td>
                                        <td className="espacio-casilla">
                                            A veces</td>
                                        <td className="espacio-casilla">
                                            Generalmente</td>
                                        <td className="espacio-casilla">
                                            Siempre</td>
                                    </tr>
                                    <tr>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="ptp-5"></div>
                    <div className="row bgc-white cb-radius">
                        <div className="col-md-6 ptp-15 pbp-10">
                            <div className="d-flex">
                                <img src="images/page_074/flecha.svg" className="hp-10 pep-5 mtp-5"></img>
                                <div className="f-Ubuntu-L fsp-13 text-start">Me gustó investigar sobre el tema del proyecto. 
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 justify-content-center align-items-center d-flex cb-responsive">
                            <table>
                                <tbody>
                                    <tr className="f-pixilate-regular fsp-15 1 text-center vis-responsive">
                                        <td className="espacio-casilla">
                                            Nunca</td>
                                        <td className="espacio-casilla">
                                            A veces</td>
                                        <td className="espacio-casilla">
                                            Generalmente</td>
                                        <td className="espacio-casilla">
                                            Siempre</td>
                                    </tr>
                                    <tr>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="ptp-5"></div>
                    <div className="row bgc-white cb-radius">
                        <div className="col-md-6 ptp-15 pbp-10">
                            <div className="d-flex">
                                <img src="images/page_074/flecha.svg" className="hp-10 pep-5 mtp-5"></img>
                                <div className="f-Ubuntu-L fsp-13 text-start">Me motivó encontrar soluciones al desafío planteado.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 justify-content-center align-items-center d-flex cb-responsive">
                            <table>
                                <tbody>
                                    <tr className="f-pixilate-regular fsp-15 1 text-center vis-responsive">
                                        <td class="espacio-casilla">
                                            Nunca</td>
                                        <td className="espacio-casilla">
                                            A veces</td>
                                        <td className="espacio-casilla">
                                            Generalmente</td>
                                        <td className="espacio-casilla">
                                            Siempre</td>
                                    </tr>
                                    <tr>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="ptp-5"></div>
                    <div className="row bgc-white cb-radius">
                        <div className="col-md-6 ptp-15 pbp-10">
                            <div className="d-flex">
                                <img src="images/page_074/flecha.svg" className="hp-10 pep-5 mtp-5"></img>
                                <div className="f-Ubuntu-L fsp-13 text-start">Estuve tenso y nervioso cuando trabajé con mi equipo. 
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 justify-content-center align-items-center d-flex cb-responsive">
                            <table>
                                <tbody>
                                    <tr className="f-pixilate-regular fsp-15 1 text-center vis-responsive">
                                        <td className="espacio-casilla">
                                            Nunca</td>
                                        <td className="espacio-casilla">
                                            A veces</td>
                                        <td className="espacio-casilla">
                                            Generalmente</td>
                                        <td className="espacio-casilla">
                                            Siempre</td>
                                    </tr>
                                    <tr>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="ptp-5"></div>
                    <div className="row bgc-white cb-radius">
                        <div className="col-md-6 ptp-15 pbp-10">
                            <div className="d-flex">
                                <img src="images/page_074/flecha.svg" className="hp-10 pep-5 mtp-5"></img>
                                <div className="f-Ubuntu-L fsp-13 text-start">Tuve miedo de no hacer bien el trabajo y recibir críticas.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 justify-content-center align-items-center d-flex cb-responsive">
                            <table>
                                <tbody>
                                    <tr className="f-pixilate-regular fsp-15 1 text-center vis-responsive">
                                        <td className="espacio-casilla">
                                            Nunca</td>
                                        <td className="espacio-casilla">
                                            A veces</td>
                                        <td className="espacio-casilla">
                                            Generalmente</td>
                                        <td className="espacio-casilla">
                                            Siempre</td>
                                    </tr>
                                    <tr>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="ptp-5"></div>
                    <div className="row bgc-white cb-radius">
                        <div className="col-md-6 ptp-15 pbp-10">
                            <div className="d-flex">
                                <img src="images/page_074/flecha.svg" className="hp-10 pep-5 mtp-5"></img>
                                <div className="f-Ubuntu-L fsp-13 text-start">Confié en mi capacidad de aprender y me valoré.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 justify-content-center align-items-center d-flex cb-responsive">
                            <table>
                                <tbody>
                                    <tr className="f-pixilate-regular fsp-15 1 text-center vis-responsive">
                                        <td className="espacio-casilla">
                                            Nunca</td>
                                        <td className="espacio-casilla">
                                            A veces</td>
                                        <td className="espacio-casilla">
                                            Generalmente</td>
                                        <td className="espacio-casilla">
                                            Siempre</td>
                                    </tr>
                                    <tr>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="ptp-5"></div>
                    <div className="row bgc-white cb-radius">
                        <div className="col-md-6 ptp-15 pbp-10">
                            <div className="d-flex">
                                <img src="images/page_074/flecha.svg" className="hp-10 pep-5 mtp-5"></img>
                                <div className="f-Ubuntu-L fsp-13 text-start">Confié en mis compañeros y me ayudaron cuando lo necesité.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 justify-content-center align-items-center d-flex cb-responsive">
                            <table>
                                <tbody>
                                    <tr className="f-pixilate-regular fsp-15 1 text-center vis-responsive">
                                        <td className="espacio-casilla">
                                            Nunca</td>
                                        <td className="espacio-casilla">
                                            A veces</td>
                                        <td className="espacio-casilla">
                                            Generalmente</td>
                                        <td className="espacio-casilla">
                                            Siempre</td>
                                    </tr>
                                    <tr>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                        <td className="espacio-casilla">
                                            <div className="cuadrado ajuste-centro border border-color-lightDark"></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
                <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{bottom:0}}>

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
                    <div className="col-1 position-relative col-sm-2 p-0 m-0">
                      <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
                        <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                        <div className="w-100 hp-25 bgc-saitama"></div>
                    </div>
                    <div className="col-7 position-relative col-sm-2 p-0 m-0">
                      <img src="images/rotulo_difusion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                        <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
                        <div className="w-100 hp-25 bgc-pikachu"></div>
                    </div>
                </div>

                
              
            </div>
          </div>
          </div>
          </div>
     
  );
}

export default Page074;
