import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_059.css";

function Page059(props) {

  const pagina = "059";
  var indexInput = 0;

  return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page cb-page59 bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
          <div className="d-flex justify-content-center">
                    <picture>
                        <source media="(min-width:680px)" srcset="images/page_059/Fondo_002.svg" />
                        <img src="images/page_059/fondo_003.svg" className="cb-dosier" alt="clau" />
                      </picture>

                </div>
                <div className="cb-block-arriba-p59 mtp-20 f-Ubuntu-L mbp-5 psp-25 fw-700 fsp-13">Esta página ha sido completada por</div>
                    <div className="cb-block-inicial-p59 p-2 pbp-5 mbp-20">
                        <img src="images/page_059/img_001.png" className="cb-radio-p59" alt="" />
                        <img src="images/page_059/img_002.png" className="cb-calendario-p59" alt=""/>
                    </div>
                 {/* TABLA*/}
                    <div className="cb-contenedor-tabla-p58">
              <div className="d-flex pep-10 ">
                <div className="block-bottom text-start mtp-30 f-pixilate-bold fsp-21">
                ¿Cómo fue nuestro trabajo en equipo?
                </div>
                <div className="d-flex flex-row-reverse block-bottom mtp-30">
                  <div className="nunca f-pixilate-regular">Núnca</div>
                  <div className="siempre f-pixilate-regular">
                    A veces
                  </div>
                  <div className="siempre f-pixilate-regular">
                    Generalmente
                  </div>
                  <div className="siempre f-pixilate-regular">
                    Siempre
                  </div>
                </div>
              </div>
              <div className="psp-15 pep-20 f-Ubuntu-L bgc-white fsp-13 rounded-set-10 ">
                <div className="d-flex justify-content-between ">
                  <div className="d-flex mnwp-400-r cb-contenedor-tabla-texto">
                    <div className="flecha-pikachu pep-10 mtp-8"></div>
                    <span className="text-left f-Ubuntu-L fsp-15 ptp-5">
                    Nos implicamos en la realización de la tarea y nos responsabilizamos del trabajo que tuvimos que hacer.
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
                    <span className="text-left f-Ubuntu-L fsp-15 ptp-5">
                    Ante una petición de ayuda, dejamos de hacer otras cosas e intentamos ayudar antes de preguntarle al profesor.
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
                    <span className="text-left f-Ubuntu-L fsp-15 ptp-5 pbp-20">
                    Llegamos a acuerdos y decisiones compartidas después de que cada uno dio su opinión.
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
                 {/* FIN TABLA*/}
              <div className="cb-ejerciciofinal-p59 mtp-20 mbp-30 bgc-naraku psp-15 pep-15 pbp-10 ptp-20">
                <p className="cb-texto-final-p61 f-Ubuntu-R fsp-13 text-start mbp-10 fw-700">Después de todo el trabajo, valoramos así lo que hicimos:</p>
                <div className="d-flex">
                <div className="cb-ejerciciofinal-cajas cb-outline-p59 position-relative">
                <div className="pep-10 psp-10">
                    <img src="images/page_059/img_003.png" className="cb-engranajes-p59" alt="" />
                    <div className="text-center ptp-10 pbp-10 f-pixilate-regular fsp-15">Lo más difícil</div>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250" />
                </div>
                </div>
                <div className="cb-ejerciciofinal-cajas cb-outline-p59 position-relative">
                <div className="pep-10 psp-10">
                    <img src="images/page_059/img_004.png" className="cb-rueda-p59" alt="" />
                    <div className="text-center ptp-10 pbp-10 f-pixilate-regular fsp-15">Lo más fácil...</div>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250" />
                </div>
            </div>
                </div>
                </div>

              </div>
          </div>
        </div>
       
       
        
      
  );
}

export default Page059;
