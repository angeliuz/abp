import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";

import "./page_075.css";

function Page075(props) {

  const pagina = "075";
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
                    <div className="text-start psp-30"contenteditable="true"></div>
                        <img src="images/page_075/img_001.png" className="cb-chaqueta-p75" alt=""></img>
                        <img src="images/page_075/img_002.png" className="cb-calendario-p75" alt=""></img>

                    </div>
             
                    
           {/* tabla */}
           <div className="cb-contenedor-tabla-p74 mbp-60">
              <div className="d-flex pep-10 justify-content-between">
                <div className="block-bottom text-start mtp-30 f-pixilate-bold fsp-16">
                  ¿Cómo me sentí?
                </div>
                <div className="d-flex flex-row-reverse block-bottom mtp-30">
                  <div className="nunca f-pixilate-regular">Núnca</div>
                  <div className="siempre f-pixilate-regular">A veces</div>
                  <div className="siempre f-pixilate-regular">Generalmente</div>
                  <div className="siempre f-pixilate-regular">Siempre</div>
                </div>
              </div>
              <div className="psp-15 pep-20 f-Ubuntu-L bgc-white fsp-13 rounded-set-10 ">
                <div className="d-flex justify-content-between ">
                  <div className="d-flex mnwp-400-r cb-contenedor-tabla-texto">
                    <div className="flecha-pikachu pep-10 mtp-8"></div>
                    <span className="text-start f-Ubuntu-L fsp-15 ptp-5">
                    Nos involucramos en la realización de la tarea y nos responsabilizamos del trabajo que tuvimos que hacer.
                    </span>
                  </div>
                  <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center">
                    <div className="psp-30-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ptp-2"></div>
              <div className="psp-15 pep-20 f-Ubuntu-L bgc-white fsp-13 ">
                <div className="d-flex justify-content-between ">
                  <div className="d-flex mnwp-400-r cb-contenedor-tabla-texto">
                    <div className="flecha-pikachu pep-10 mtp-8"></div>
                    <span className="text-start f-Ubuntu-L fsp-15 ptp-5">
                    Ante una petición de apoyo de alguien del equipo, intentamos ayudar antes de preguntarle al profesor.
                    </span>
                  </div>
                  <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center">
                    <div className="psp-30-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ptp-2"></div>
              <div className="psp-15 pep-20 f-Ubuntu-L bgc-white fsp-13">
                <div className="d-flex justify-content-between ">
                  <div className="d-flex mnwp-400-r cb-contenedor-tabla-texto">
                    <div className="flecha-pikachu pep-10 mtp-8"></div>
                    <span className="text-left f-Ubuntu-L fsp-15 ptp-5">
                    Respetamos el turno de la palabra.
                    </span>
                  </div>
                  <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center">
                    <div className="psp-30-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="ptp-2"></div>
              <div className="psp-15 pep-20 f-Ubuntu-L bgc-white fsp-13 rounded-seb-10">
                <div className="d-flex justify-content-between ">
                  <div className="d-flex mnwp-400-r cb-contenedor-tabla-texto">
                    <div className="flecha-pikachu pep-10 mtp-8"></div>
                    <span className="text-start f-Ubuntu-L fsp-15 ptp-5 pbp-20 text-start">
                    Llegamos a acuerdos y decisiones compartidas después de que cada uno ofreciera su opinión.
                    </span>
                  </div>
                  <div className="d-flex flex-row-reverse block-bottom ptp-5 pbp-5 align-items-center">
                    <div className="psp-30-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="psp-40-r">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                    <div className="">
                      <div className="cuadrado borde-cuadrado">
                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 flex-grow-1 contenedor-linea lhp-30 min-hp-30"
                        />
                      </div>
                    </div>
                  </div>
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

export default Page075;
