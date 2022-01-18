import React from "react";
import InputBox from "../components/InputBox";
// import ModalVideo from "../components/ModalVideo";

import "./page_040.css";

function Page040(props) {

  const pagina = "040";
  var indexInput = 0;

  return (

    <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
            <div className="cb-page40 page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                <div className="cabecera-v1 hp-80 bgc-ken">
                </div>

                <div className="msp-80 ptp-20 mep-80 mbp-100">
                    <div className="row px-5">
                        <div className="col-sm-12 col-md-6">
                            <div className="border-style-solid border-2 border-color-ken rounded-p-10 p-3 bgc-white">
                                <div className="f-Ubuntu-L fsp-16 text-start w-100 hp-50">Lo que tenemos para nuestra Fiesta de la Diversidad…</div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 position-relative">
                            <div className="espirales-creacion-40 position-absolute"><img src="images/page_040/espiral.png" className="w-45" alt=""/></div>
                            <div className="border-style-solid border-2 border-color-ken rounded-p-10 p-3 bgc-white espacio">
                                <div className="f-Ubuntu-L fsp-16 text-start w-100 hp-50">Lo que creemos que nos falta…</div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                            </div>
                        </div>
                    </div>
                    <div className="row px-5 ptp-30 position-relative">
                    <div className="position-absolute top-0 start-100 translate-middle msp--150 mbp-0"><img src="images/page_040/vinocular.png" className="wp-60 mtp-60" alt="" /></div>
                    <div className="position-absolute top-0 start-100 translate-middle msp--60 mbp-0"><img src="images/page_040/clip.png" className="wp-50 mtp-100" alt="" /></div>
                        <div className="col-12">
                            <div className="p-3 bgc-white">
                                <div className="f-Ubuntu-L fsp-16 text-start w-100">Lo que más nos gustó trabajar en esta etapa…</div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                            </div>
                        </div>
                    </div>

                    <div className="row px-5 ptp-20 w-95 position-relative">
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
                    </div>

                </div>



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
