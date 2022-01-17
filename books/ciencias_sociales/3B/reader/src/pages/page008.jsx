import React from "react";
import InputBox from "../components/InputBox";

import "./page_008.css";

function Page008(props) {

  const pagina = "008";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
          <div className="cabecera-v1 hp-80 bgc-goten"></div>
          {/* Cabecera*/}

          <div className="ptp-10 psp-0 mbp-20 cb-padding">
                    <div className="d-flex">
                        <div className="f-ccdigitaldelivery-bold fsp-35 color-goten">3</div>
                        <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">¿En qué consiste el desafío?</div>
                    </div>
                </div>
                <div className="cb-ejercicio-1-p08 ptp-20 psp-25 pbp-15  position-relative mbp-90 f-Ubuntu-R fsp-15">
                <div className="d-flex mbp-10">
                    <div className="cb-box-a"></div>
                    <div className="msp-10 justify-content-center align-items-center d-flex"> Crear una campaña.</div>
                    </div>
                    <div className="d-flex mbp-10">
                        <div className="cb-box-a"></div>
                        <div className="msp-10 justify-content-center align-items-center d-flex">Elaborar una revista..</div>
                        </div>
                    <div className="d-flex mbp-10">
                        <div className="cb-box-a"></div>
                        <div className="msp-10 justify-content-center align-items-center d-flex">Organizar una fiesta.</div>
                    </div>
                    <div className="d-flex mbp-10">
                        <div className="cb-box-a"></div>
                        <div className="msp-10 justify-content-center align-items-center d-flex">Organizar una fiesta.</div>
                    </div>
                    </div>

                <div className="bgc-genos border-top-color cb-border-goten border-2 pbp-90 position-relative">
                    <img src="images/page_008/img_002.png" className="cb-personajeacostado-p08" alt="" />
                    <img src="images/page_008/img_003.png" className="cb-notas-p08" alt="" />
                    <div className="cb-block-bottom-p08 mtp-30 f-pixilate-bold text-start">¿Cómo voy?</div>
                    <div className=" cb-block-bottom-p08 p-2 pb-3 f-Ubuntu-L bgc-white fsp-13 rounded-p-10 ps-4 pe-4 nat-page08"> 

                        <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-10">
                            <div className="d-flex"> <img src="images/page_006/arrow.svg" className="mep-5 cb-flecha" alt="" />
                                <span className="w-24 f-Ubuntu-L">¿Qué sé del tema del desafío?</span> 
                            </div>
                       
                            <div className="pt-2  flex-grow-1 linea " contenteditable="true">&nbsp;</div>
                          </div>                      
                          <div className="linea mtp-30 mbp-30"></div>
                          <div className="linea mtp-30 mbp-30"></div>
                          
                        <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-10">
                            <div className="d-flex"> <img src="images/page_006/arrow.svg" className="mep-5 cb-flecha" alt="" />
                                <span className="w-24 f-Ubuntu-L">¿Qué necesito saber para realizar el desafío?</span>   
                            </div>                  
                          <div className="pt-2 flex-grow-1 linea " contenteditable="true">&nbsp;</div>
                        </div>                      
                        <div className="linea mtp-30"></div>
                    </div>
                    <div className="cb-block-bottom-p08 mtp-60 f-pixilate-bold text-start">¿Cómo me siento?</div>
                    <div className="cb-block-bottom-p08 p-2 pb-2 f-Ubuntu-L bgc-white fsp-13 rounded-p-10 ps-4 pe-4">               
                        <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-10">
                            <div className="d-flex"> <img src="images/page_006/arrow.svg" className="mep-5 cb-flecha" alt="" />
                                <span className="w-24 f-Ubuntu-L">¿Cómo me siento ante el desafío?</span> 
                            </div>                      
                            <div className="pt-2  flex-grow-1 linea " contenteditable="true">&nbsp;</div>
                          </div>                      
                          <div className="linea mtp-30"></div>
                          <div className="linea mtp-30 mbp-30"></div>
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

export default Page008;
