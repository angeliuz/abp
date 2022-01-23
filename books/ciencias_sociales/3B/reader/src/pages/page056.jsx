import React from "react";
import InputBox from "../components/InputBox";

import "./page_056.css";

function Page056(props) {

  const pagina = "056";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
          <div className="cabecera-v1 hp-80 bgc-pikachu"></div>
         {/* contenido */}    
         <div className=""style={{ paddingLeft: "6%", paddingRight: "6%" }}>
         <div className="d-flex mtp-30">
                        <div>
                        <div className="f-Ubuntu-R fsp-18 ptp-18 color-pikachu fw-700 text-start">Nos preparamos</div>
                     <div className="d-flex position-relative"> 
                        <div className="f-ccdigitaldelivery-bold fsp-35 color-pikachu">3</div>
                        <div className="cb-inicio-3 f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Realizamos un <i> checklist</i> para revisar qué nos queda pendiente.</div>
                        <img src="images/page_056/img_002.png" className="cb-personaje-p56" alt="" /> 
                     </div>
                       </div>
                        <div className="cb-ejercicio-1-p56 ptp-20 psp-25 pbp-15 pep-10 position-relative mbp-10">
                            <div>
                            <div className="d-flex mbp-10">
                                <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                  <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                </div>
                                <div className="msp-10 text-start justify-content-center align-items-center d-flex f-Ubuntu-R fsp-12"> Tenemos nuestro  stand cultural con:</div>
                            </div>
                                <div className="cb-interior-lista d-flex justify-content-between">
                                    <div className="cb-opcion-a">
                                    <div className="d-flex mbp-10">
                                      <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                      </div>
                                        <div className="msp-10 text-start justify-content-center align-items-center d-flex f-Ubuntu-R fsp-12">Música.</div>
                                    </div>
                                    <div className="d-flex mbp-10">
                                        <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                          <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                        </div>
                                        <div className="msp-10 text-start justify-content-center align-items-center d-flex f-Ubuntu-R fsp-12">Gastronomía.</div>
                                    </div>
                                    <div className="d-flex mbp-10">
                                      <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                      </div>
                                        <div className="msp-10 text-start justify-content-center align-items-center d-flex f-Ubuntu-R fsp-12">Obras literarias.</div>
                                    </div>
                                </div>
                                <div className="cb-opcion-b">
                                    <div className="d-flex mbp-10">
                                      <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                      </div>
                                        <div className="msp-10 text-start justify-content-center align-items-center d-flex f-Ubuntu-R fsp-12">Obras artísticas.</div>
                                    </div>
                                    <div className="d-flex mbp-10">
                                      <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                      </div>
                                        <div className="msp-10 text-start justify-content-center align-items-center d-flex f-Ubuntu-R fsp-12">Otros.</div>
                                    </div>

                                </div>
                                </div>
                                </div>
                                <div className="d-flex mbp-10">
                                      <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                      </div>
                                    <div className="msp-10 justify-content-center align-items-center d-flex f-Ubuntu-R fsp-12 text-start">Tenemos nuestros eslóganes <br /> sobre diversidad.</div>
                                    </div>
                                <div className="d-flex mbp-10">
                                      <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                      </div>
                                    <div className="msp-10 text-start justify-content-center align-items-center d-flex f-Ubuntu-R fsp-12">Tenemos nuestros gráficos <br /> de las encuestas de diversidad.</div>
                                </div>
                                <div className="d-flex mbp-10">
                                    <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                      </div>
                                    <div className="msp-10 text-start justify-content-center align-items-center d-flex f-Ubuntu-R fsp-12">Tenemos nuestro decálogo de principios <br /> de respeto y tolerancia a la diversidad.</div>
                                </div>
                                <div className="d-flex mbp-10">
                                      <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                        <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                      </div>
                                    <div className="msp-10 text-start justify-content-center align-items-center d-flex f-Ubuntu-R fsp-12">Enviamos las invitaciones.</div>
                                </div>
                                </div>
                    </div>
                    <div className="f-Ubuntu-R fsp-18 color-pikachu fw-700 text-start">Solicitamos ayuda</div>   
                        <div className="d-flex">               
                        <div className="f-ccdigitaldelivery-bold fsp-35 color-pikachu">4</div>              
                       <div className="cb-ejercicioinicial-p56 mtp-20 mbp-0">
                        <div className="d-flex">
                        <div className="cb-ejercicioinicial-cajas cb-rotate-01 position-relative">
                        <div className="pep-10 psp-10">
                            <img src="images/page_056/img_001.png" className="cb-objeto-p56" alt="" />
                            <div className="text-start ptp-10 pbp-10 f-pixilate-regular fsp-15">Lo que nos falta...</div>
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-150" />
                        </div>
                        </div>
                        <div className="cb-ejercicioinicial-cajas cb-rotate-02 position-relative">
                        <div className="pep-10 psp-10">
                            <img src="images/page_056/img_001.png" className="cb-objeto-p56" alt="" />
                            <img src="images/page_056/img_003.png" className="cb-mujer-p56" alt=""/>
                            <div className="text-start ptp-10 pbp-10 f-pixilate-regular fsp-15">Necesitamos ayuda de...</div>
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-150" />
                        </div>
                    </div>
                        </div>
                        </div>
                    </div>
                    <div className="cb-ejerciciofinal-caja-p56">
                        <div className="pep-10 psp-10 pbp-5">
                            <div className="text-start ptp-10 pbp-10 f-Ubuntu-L fsp-12">Recibiremos a los invitados con el siguiente saludo:</div>
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" /> 
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
              <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_motivacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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
              <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
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

export default Page056;
