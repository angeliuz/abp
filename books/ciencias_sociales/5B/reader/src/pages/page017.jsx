import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_017.css";

function Page017(props) {

  const pagina = "017";
  var indexInput = 0;

  return (

    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
            <div className="cabecera-v1 hp-80 bgc-bulma">

            </div>

            <div className="ptp-10 psp-60">
                <div className="d-flex">
                    {/* <img className="hp-15 align-center mt-3 me-2 mb-2" src="images/page_014/img_001.svg" alt="" /> */}
                    <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">3</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10">Leo las descripciones, distribuyo los roles con mi grupo y marco con un <img src="images/page_017/img_001.svg" className="" alt="" />el que asumiré.</div>
                </div>
                {/* <div className="f-Ubuntu-L fsp-15 psp-70 text-start">Comparo mis respuestas con las de mi grupo. ¿Pensamos todos lo mismo?</div> */}
            </div>

            <div className="w-100 mt-0 ms-0 me-0 mbp-40 p-0">
                        
                        <div className="row m-0 ptp-20 psp-70 pep-70 mbp-30 bgc-white align-items-center tf-caja">
                            <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-end m-0 p-3">
                                <div className="d-flex w-100 p-3  flex-column justify-content-center align-items-center border rounded-p-10 bgc-sargento tf-outlinesoldados">
                                    <span className="alinea f-Ubuntu-R text-center fsp-16 lh-sm fw-700 color-soldados">Coordinación</span>
                                    <span className="alinea f-Ubuntu-L text-start fsp-15 lh-sm ptp-10">Organiza el trabajo del equipo. Da
                                        el turno de palabra y procura que
                                        todos participen.</span>
                                    <div className="d-flex align-items-center">
                                        <div className="position-absolute mtp-10 msp--40 bgc-white wp-35 hp-35 text-white rounded-3 border border-1 border-color-dark">
                                        </div>
                                        <img src="images/page_017/img_002.png" className="mtp-10 hp-200" alt="" />
                                    </div>
                                
                                </div>

                            </div>
                            <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-end m-0 p-3">
                               <div className="d-flex w-100 p-3  flex-column justify-content-center align-items-center border rounded-p-10 bgc-hannah tf-outlinetiburon">
                                    <span className="alinea f-Ubuntu-R text-center fsp-16 lh-sm fw-700 color-tiburon">Supervisión</span>
                                    <span className="alinea f-Ubuntu-L text-start fsp-15 lh-sm ptp-10">Se asegura de que el equipo
                                        siga las instrucciones y
                                        respete el tiempo asignado.</span>
                                    <div className="d-flex align-items-center">
                                        <div className="position-absolute mtp--10 msp--60 bgc-white wp-35 hp-35 text-center rounded-3 border border-1 border-color-dark">
                                        </div>                                        
                                        <img src="images/page_017/img_003.png" className="mtp-25 hp-180" alt="" />
                                    </div>
                            
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center m-0 p-3">                            
                                <div className="d-flex w-100 p-3  flex-column justify-content-center align-items-center border rounded-p-10 bgc-caradepapa tf-outlinebarbie">
                                    <span className="alinea f-Ubuntu-R text-center fsp-16 lh-sm fw-700 color-barbie">Relaciones públicas</span>
                                    <span className="alinea f-Ubuntu-L text-start fsp-15 lh-sm ptp-10">Se comunica con el profesor
                                        o con otros equipos para
                                        pedir ayuda.</span>
                                    <div className="d-flex align-items-center">
                                        <div className="position-absolute mtp-10 msp--60 bgc-white wp-35 hp-35 text-white rounded-3 border border-1 border-color-dark">
                                        </div>                     
                                        <img src="images/page_017/img_004.png" className="mtp-45 hp-180" alt="" />
                                    </div>
                            
                                </div>


                            </div>
                            
                            
                            <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center mtp-10 p-3">
                               <div className="d-flex w-100 p-3  flex-column justify-content-center align-items-center border rounded-p-10 bgc-marcianos tf-outlineken">
                                <span className="alinea f-Ubuntu-R text-center fsp-16 lh-sm fw-700 color-ken">Intendencia</span>
                                <span className="alinea f-Ubuntu-L text-start fsp-15 lh-sm ptp-10">Se asegura de que el equipo
                                    consiga los materiales
                                    necesarios y mantenga su
                                    espacio limpio y ordenado.</span>
                                <div className="d-flex align-items-center">
                                    <div className="position-absolute mtp--10 msp--60 bgc-white wp-35 hp-35 text-center rounded-3 border border-1 border-color-dark">
                                    </div>
                                    <img src="images/page_017/img_005.png" className="mtp-10 hp-200" alt="" />
                                </div>
                        
                            </div>

                            </div>



                          <div className="col-sm-12 text-end">

                              <img src="images/page_017/img_007.png" className="cambio pep-40 right" alt="" />
                          </div>  
                        </div>
                        
                    </div> 


            {/*  ENCABEZADO FIN PARTE 3 */}

              {/* PIE DE PAGINA */}
              <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                  <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                    ABP &copy; SM
                  </div>
                  <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
              </div>
                <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end marcador-etapa" style={{bottom:0}}>

                    <div className="col-1 position-relative col-sm-2 p-0 m-0">
                      <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                        <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                        <div className="w-100 hp-25 bgc-goten"></div>
                    </div>
                    <div className="col-7 position-relative col-sm-2 p-0 m-0">
                        <img src="images/rotulo_planificacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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
                    <div className="col-1 position-relative col-sm-2 p-0 m-0">
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

export default Page017;
