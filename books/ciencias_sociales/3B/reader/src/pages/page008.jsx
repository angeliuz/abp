import React from "react";
import InputBox from "../components/InputBox";
import Check from "../components/Check";

import "./page_008.css";

function Page008(props) {

  const pagina = "008";
  var indexInput = 0;
  const etapa = "1"
  const background = "bgc-goten";
  const color = "color-goten";
  const borderColor = "border-color-goten"
  const bgc_cajas = "bgc-genos";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
          <div className="cabecera-v1 hp-80 bgc-goten"></div>
          {/* Cabecera*/}

            <div className="ptp-30 container-titulo-global mbp-40">
                <div className="d-flex">
                    {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_002.svg"} alt=""  /> */}
                    <div className={"f-ccdigitaldelivery-bold fsp-35 "+color}>
                      3
                    </div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    ¿En qué consiste el desafío?
                    </div>
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                    {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                </div>
            </div>


                <div className="cb-ejercicio-1-p08 ptp-20 psp-25 pbp-15  position-relative mbp-90 f-Ubuntu-R fsp-15">
                <div className="position-absolute top-0 start-100 translate-middle msp--20 mtp-0 visible-768"><img src={"images/generales/clip.png"} className="wp-30" alt="" /></div> 
                <div className="d-flex mbp-10">
                  <div className="wp-30 hp-30 bgc-white rounded-1">
                  <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                  </div>
                    <div className="msp-10 justify-content-center align-items-center d-flex"> Crear una campaña.</div>
                    </div>
                    <div className="d-flex mbp-10">
                      <div className="wp-30 hp-30 bgc-white rounded-1">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                        <div className="msp-10 justify-content-center align-items-center d-flex">Elaborar una revista..</div>
                        </div>
                    <div className="d-flex mbp-10">
                      <div className="wp-30 hp-30 bgc-white rounded-1">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                        <div className="msp-10 justify-content-center align-items-center d-flex">Organizar una fiesta.</div>
                    </div>
                    <div className="d-flex mbp-10">
                      <div className="wp-30 hp-30 bgc-white rounded-1">
                      <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                        <div className="msp-10 justify-content-center align-items-center d-flex">Llevar a cabo una feria.</div>
                    </div>
                    </div>

                    <div className={"d-flex w-100 mtp-50 psp-60 pep-60 ptp-20 mbp-0 border-top-style-solid "+borderColor+" border-2 pbp-80 "+bgc_cajas}>
                          <div className="row w-100 p-0 m-0">
                            <div className="col-12 position-relative">
                              <div className="position-absolute top-0 start-100 translate-middle msp--50 mtp--65 visible-768"><img src={"images/page_"+pagina+"/img_002.png"} className="wp-120" alt="" /></div> 
                              <div className="position-absolute top-0 start-0 translate-middle msp-40 mtp--45 visible-768"><img src={"images/page_"+pagina+"/img_003.png"} className="wp-50" alt="" /></div> 
                              
                              <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                              <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                                    <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                                      <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                                        <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 wp-15" alt="" /> 
                                        <span>¿Qué sé del tema del desafío?</span>
                                      </div>
                                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75" />
                                      <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                                        <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 wp-15" alt="" /> 
                                        <span>¿Qué necesito saber para realizar el desafío?</span>
                                      </div>
                                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75" />
                                      
                                    </div>

                                </div>
                            </div>

                            <div className="col-12 position-relative">
                              
                              <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo me siento?</div>
                              <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                                    <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                                      <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                                        <img src={"images/generales/flecha_e"+etapa+".svg"} className="mep-5 wp-15" alt="" /> 
                                        <span>¿Cómo me siento ante el desafío?</span>
                                      </div>
                                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75" />
                                      
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
