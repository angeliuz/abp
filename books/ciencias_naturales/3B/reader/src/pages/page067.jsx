import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_067.css";

function Page067(props) {

  const pagina = "067";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const bgc_cajas = "bgc-bobafett";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 "+background+" d-flex flex-column"}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja wp-160 text-center fsp-24 f-IntroRustG-Base">SESIÓN 17</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Elaboramos la revista</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos <br />en  esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e"+etapa+"_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
              Asignar las tareas para la<br/> elaboración de la revista.
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e"+etapa+"_2.svg"} className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
              Definir qué hacer para cumplir<br/> con las tareas adecuadamente.
              </div>
              <div className="p-0 align-self-center">
                <img src={"images/generales/flecha_sesion_e"+etapa+"_1.svg"} className="wp-40 arrow-global" alt="" />
              </div>
               <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
               Elaborar la revista.
              </div>

            </div>
          </div> 
          {/* END CABECERA VERSIÓN 2 */}
            <div className="ptp-10 container-titulo-global mbp-20">
              <div className="d-flex">
                  <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_067/img_002.svg" alt=""  />
                  <div className={"f-ccdigitaldelivery-bold fsp-35 "+color}>1</div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                  Leo las descripciones, distribuyo las tareas con mi grupo y marco con un <img src="images/page_067/img_003.svg" className="wp-15 mtp--2" alt=""/> la que asumiré.
                </div>
                  <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_067/revista.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
              </div>
            </div>

            <div className="bgc-67 mtp-0 msp-60 mep-60 mbp-7 ptp-30 psp-10">

                <div className="d-flex mbp-70">

                    <div className="row w-100">
                      <div className="col-md-6 d-flex justify-content-center pbp-30">
                          <div className="d-flex flex-column w-90 ptp-40 pbp-30 psp-20 pep-20 bgc-white box-shadow-67-1 rounded-p-20 border-style-solid border-1 border-color-saitama position-relative">
                          <div className="position-absolute top-0 start-0 translate-middle zindex-1 min-hp-30 min-wp-30 bgc-white border-style-solid border-1 border-color-dark wp-30 mtp-30 msp-30"></div>
                              <div className="position-absolute top-0 start-50 translate-middle wp-100 msp-0 mtp-10 zindex-1"><img src="images/page_067/img_005.svg" className="wp-40" /></div>
                              <div className="f-Ubuntu-B">Redactor</div>
                              <span className="f-Ubuntu-R fsp-13 text-start pbp-10">
                              Escribe el texto definitivo del reportaje.
                              </span>
                              <span className="f-Ubuntu-R fsp-13 text-start">
                              Debe redactar de forma clara y precisa, y aplicar correctamente las reglas de ortografía.
                              </span>
                          </div>
                      </div>

                      <div className="col-md-6 d-flex justify-content-center pbp-30 position-relative">
                        <div className="position-absolute top-0 start-100 translate-middle wp-100 msp-0 mtp--20 zindex-1"><img src="images/page_067/img_004.png" className="wp-70" /></div>
                          <div className="d-flex flex-column w-90 ptp-40 pbp-30 psp-20 pep-20 bgc-white box-shadow-67-4 rounded-p-20 border-style-solid border-2 border-color-android18  rounded-p-20 position-relative">
                              <div className="position-absolute top-0 start-50 translate-middle wp-100 msp-0 mtp-10 zindex-1"><img src="images/page_067/img_008.svg" className="wp-40" /></div>
                              <div className="position-absolute top-0 start-0 translate-middle zindex-1 min-hp-30 min-wp-30 bgc-white border-style-solid border-1 border-color-dark wp-30 mtp-30 msp-30"></div>
                              <div className="f-Ubuntu-B">Diseñador</div>
                              <span className="f-Ubuntu-R fsp-13 text-start pbp-10">
                              Diagrama la revista. Es decir, establece qué espacios tendrán las fotografías, los títulos, los textos y otros recursos. También debe incorporarlos en dichos espacios.<br/>
                              Debe evaluar correctamente el uso del espacio y manejar procesadores de texto digitales (Word o Google docs, entre otros).
                              </span>
                          </div>
                      </div>
                      <div className="col-md-6 d-flex justify-content-center pbp-30 position-relative">
                        <div className="position-absolute top-100 start-0 translate-middle wp-100 msp-0 mtp--20 zindex-1"><img src="images/page_067/img_010.png" className="wp-50" /></div>
                          <div className="d-flex flex-column w-90 ptp-40 pbp-30 psp-20 pep-20 bgc-white box-shadow-67-3 rounded-p-20 border-style-solid border-2 border-color-goku  rounded-p-20 position-relative">
                          <div className="position-absolute top-0 start-0 translate-middle zindex-1 min-hp-30 min-wp-30 bgc-white border-style-solid border-1 border-color-dark wp-30 mtp-30 msp-30"></div>
                              <div className="position-absolute top-0 start-50 translate-middle wp-100 msp-0 mtp-10 zindex-1"><img src="images/page_067/img_007.svg" className="wp-40" /></div>
                              <div className="f-Ubuntu-B">Ilustrador</div>
                              <span className="f-Ubuntu-R fsp-13 text-start pbp-10">
                              Realiza las versiones definitivas de la portada y el afiche.
                              </span>
                              <span className="f-Ubuntu-R fsp-13 text-start">
                              Debe tener habilidades para expresarse a través de recursos visuales.
                              </span>
                          </div>
                      </div>
                      <div className="col-md-6 d-flex justify-content-center pbp-70">
                          <div className="d-flex flex-column w-90 ptp-40 pbp-30 psp-20 pep-20 bgc-white box-shadow-67-2 rounded-p-20 border-style-solid border-1 border-color-freezer rounded-p-20 position-relative">
                          <div className="position-absolute top-0 start-0 translate-middle zindex-1 min-hp-30 min-wp-30 bgc-white border-style-solid border-1 border-color-dark wp-30 mtp-30 msp-30"></div>
                              <div className="position-absolute top-0 start-50 translate-middle wp-100 msp-0 mtp-10 zindex-1"><img src="images/page_067/img_006.svg" className="wp-40" /></div>
                              <div className="f-Ubuntu-B">Editor</div>
                              <span className="f-Ubuntu-R fsp-13 text-start pbp-10">
                              Se encarga de que la revista sea un conjunto armónico. Además, elabora el texto final de las noticias, el índice y los créditos.
                              </span>
                              <span className="f-Ubuntu-R fsp-13 text-start">
                              Debe tener capacidad de organización, leer detalladamente y coordinar al equipo con el que trabaja.
                              </span>
                          </div>
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

export default Page067;
