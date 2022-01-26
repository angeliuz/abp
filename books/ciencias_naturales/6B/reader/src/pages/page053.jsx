import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_053.css";

function Page053(props) {

  const pagina = "053";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-pidgey d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja wp-160 text-center fsp-24 f-IntroRustG-Base">SESIÓN 13</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¿Qué aprendimos en las entrevistas?</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Mis objetivos <br />en  esta sesión son:
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_053/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
              Identificar cómo <br/>seleccionar los<br/> registros más relevantes<br/>de las entrevistas.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_053/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
              </div>
              <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
              Seleccionar los registros<br/> más relevantes de las entrevistas.
              </div>
              <div className="p-0 align-self-center">
                <img src="images/page_053/flecha.svg" className="wp-40 arrow-global" alt="" />
              </div>
               <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
               Establecer las principales<br/> conclusiones de las entrevistas.
              </div>
            </div>
          </div> 
          {/* END CABECERA VERSIÓN 2 */}
            <div className="ptp-10 container-titulo-global mbp-20">
              <div className="d-flex">
                  <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_053/g.svg" alt=""  />
                  <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">1</div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Leo los siguientes criterios. Luego, con el equipo que realicé la entrevista, selecciono los fragmentos de esta que incluiremos en la revista.</div>
                  <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_053/revista.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
              </div>
            </div>

            <div className="d-flex msp-130 mep-0 mbp-70">

              <div className="row w-100 f-Ubuntu-L fsp-14 rounded-p-20">
                <div className="col-12 ptp-10 pbp-20 d-flex justify-content-center position-relative">

                    <div className="d-flex flex-column wp-360 ptp-30 pbp-30 bgc-hermione rounded-p-20 position-relative">
                      <div className="position-absolute top-50 start-0 translate-middle wp-100 msp-40 mtp-0 zindex-1"><img src="images/page_053/img_004.svg" className="wp-40" /></div>
                      <div className="position-absolute top-50 start-0 translate-middle mtp-0 msp--40 wp-150 hp-100 bgc-naraku rounded-p-20 d-flex justify-content-center align-items-center border-style-solid border-2 border-color-white f-Ubuntu-M">
                      Los fragmentos seleccionados son importantes:
                      </div>
                      <div className="w-100 d-flex justify-content-end psp-60 pep-60">
                        <div className="wp-20 hp-20">
                          <img className="" src="images/page_053/bullet.svg" alt=""  />
                        </div>
                        <div className="w-100 text-start psp-5">Se relacionan con el tema central de la entrevista.</div>
                      </div>
                      <div className="w-100 d-flex justify-content-end psp-60 pep-60">
                        <div className="wp-20 hp-20">
                          <img className="" src="images/page_053/bullet.svg" alt=""  />
                        </div>
                        <div className="w-100 text-start psp-5">Contienen la información necesaria para comprender las ideas de la persona entrevistada.</div>
                      </div>
                      <div className="w-100 d-flex justify-content-end psp-60 pep-60">
                        <div className="wp-20 hp-20">
                          <img className="" src="images/page_053/bullet.svg" alt=""  />
                        </div>
                        <div className="w-100 text-start psp-5">Evitan la repetición de ideas.</div>
                      </div>

                    </div>
                </div>
                <div className="col-12 ptp-10 pbp-20 d-flex justify-content-center position-relative">

                    <div className="d-flex flex-column wp-360 ptp-30 pbp-30 bgc-klee rounded-p-20 position-relative">
                      <div className="position-absolute top-50 start-0 translate-middle wp-100 msp-40 mtp-0 zindex-1"><img src="images/page_053/img_006.svg" className="wp-40" /></div>
                      <div className="position-absolute top-50 start-0 translate-middle mtp-0 msp--50 wp-180 hp-150 psp-20 pep-30  bgc-guile rounded-p-20 d-flex justify-content-center align-items-center border-style-solid border-2 border-color-white f-Ubuntu-M">
                      Los fragmentos seleccionados son representativos de lo que planteó la persona en la entrevista:
                      </div>
                      <div className="w-100 d-flex justify-content-end psp-60 pep-60">
                        <div className="wp-20 hp-20">
                          <img className="" src="images/page_053/bullet2.svg" alt=""  />
                        </div>
                        <div className="w-100 text-start psp-5">Considera expresiones o ideas aunque yo no esté de acuerdo con ellas.</div>
                      </div>
                      <div className="w-100 d-flex justify-content-end psp-60 pep-60">
                        <div className="wp-20 hp-20">
                          <img className="" src="images/page_053/bullet2.svg" alt=""  />
                        </div>
                        <div className="w-100 text-start psp-5">Recoge matices, precisiones, dudas o contradicciones de la persona entrevistada.</div>
                      </div>

                    </div>
                </div>
                <div className="col-12 ptp-10 pbp-20 d-flex justify-content-center position-relative">
                  
                    <div className="d-flex flex-column wp-360 ptp-30 pbp-30 bgc-azuka rounded-p-20 position-relative">
                      <div className="position-absolute top-50 start-0 translate-middle wp-100 msp-40 mtp-0 zindex-1"><img src="images/page_053/img_007.svg" className="wp-40" /></div>
                      <div className="position-absolute top-50 start-0 translate-middle mtp-0 msp--50 wp-180 hp-120 psp-20 pep-30  bgc-azuka rounded-p-20 d-flex justify-content-center align-items-center border-style-solid border-2 border-color-white f-Ubuntu-M">
                      La información debe ser comprensible para los lectores.
                      </div>
                      <div className="w-100 d-flex justify-content-end psp-60 pep-60">
                        <div className="wp-20 hp-20">
                          <img className="" src="images/page_053/bullet3.svg" alt=""  />
                        </div>
                        <div className="w-100 text-start psp-5">La eliminación o recorte de frases no dificulta la comprensión.</div>
                      </div>
                      <div className="w-100 d-flex justify-content-end psp-60 pep-60">
                        <div className="wp-20 hp-20">
                          <img className="" src="images/page_053/bullet3.svg" alt=""  />
                        </div>
                        <div className="w-100 text-start psp-5">La selección elimina elementos (como exclamaciones o interrupciones) que puedan perjudicar la comprensión.</div>
                      </div>

                    </div>
                </div>

                <div className="col-12 ptp-10 pbp-20 d-flex justify-content-center position-relative">
                  <div className="w-100 d-flex justify-content-center msp--50"><img src="images/page_053/img_001.svg" className="wp-200" /></div>
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

export default Page053;
