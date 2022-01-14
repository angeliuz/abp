import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";

import "./page_076.css";

function Page076(props) {

  const pagina = "076";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page cb-page75 bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* contenido DE PAGINA */}

                <div class="d-flex justify-content-center">
                    <picture>
                        <source media="(min-width:680px)" srcset="images/page_075/Fondo_002.svg"></source>
                        <img src="images/page_075/fondo_003.svg" class="cb-dosier" alt="clau"></img>
                      </picture>

                </div>
            
                    <div className="cb-block-arriba-p75 mtp-20 f-Ubuntu-L mbp-5 psp-25 fw-700 fsp-13 text-start">Esta página ha sido completada por</div>
                    <div className="cb-block-inicial-p75 p-2 pbp-5 mbp-20">
                        <img src="images/page_075/img_001.png" className="cb-chaqueta-p75" alt=""></img>
                        <img src="images/page_075/img_002.png" className="cb-calendario-p75" alt=""></img>

                    </div>
             
                    
                <div className="cb-contenedor-tabla position-relative mbp-20 mtp-60">
                    <div className="mbp-15 f-pixilate-bold text-start">¿Cómo fue nuestro trabajo en equipo?</div>
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
                            <img src="images/page_075/flecha.svg" className="hp-10 pep-5 mtp-5"></img>
                            <div className="f-Ubuntu-L fsp-13 text-start">Nos implicamos en la realización de la tarea y nos responsabilizamos del trabajo que tuvimos que hacer.
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
                            <img src="images/page_075/flecha.svg" className="hp-10 pep-5 mtp-5"></img>
                            <div className="f-Ubuntu-L fsp-13 text-start">Ante una petición de ayuda, dejamos de hacer otras cosas e intentamos ayudar antes de preguntarle al profesor.
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
                            <img src="images/page_075/flecha.svg" className="hp-10 pep-5 mtp-5"></img>
                            <div className="f-Ubuntu-L fsp-13 text-start">Respetamos el turno de la palabra.
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
                            <img src="images/page_075/flecha.svg" className="hp-10 pep-5 mtp-5"></img>
                            <div className="f-Ubuntu-L fsp-13 text-start">Llegamos a acuerdos y decisiones compartidas después de que cada uno dio su opinión.
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
             
             <div className="cb-ejerciciofinal-p75 mtp-20">              
                <div className="d-flex">
                <div className="cb-ejerciciofinal-cajas position-relative">
                <div className="pep-15 psp-25">
                    <img src="images/page_075/img_006.svg" className="cb-tachuela-p75" alt=""></img>
                    <div className="text-center ptp-10 pbp-10 f-pixilate-regular fsp-15"> Lo que más me gustó de trabajar con mi equipo fue:</div>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-270" />
                </div>
                </div>
                <div className="cb-ejerciciofinal-cajas position-relative">
                <div className="pep-15 psp-25">
                    <img src="images/page_075/img_006.svg" className="cb-tachuela-p75" alt=""></img>
                    <img src="images/page_075/img_005.png" className="cb-botiquin-p75" alt=""></img>
                    <div className="text-center ptp-10 pbp-10 f-pixilate-regular fsp-15">Lo que más valoro de mi equipo es:</div>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-270" />
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
                 {/* FIN PIE DE PAGINA */}
              
            </div>
            </div>
    </div>
           


          
     
  );
}

export default Page076;
