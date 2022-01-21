import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_046.css";

function Page046(props) {

  const pagina = "046";
  var indexInput = 0;



  return (

    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
            <div className="cabecera-v1 hp-80 bgc-saitama">

            </div>

            <div className="ptp-10 psp-60">
                <div className="d-flex">
                    {/* <img className="hp-15 align-center mt-3 me-2 mb-2" src="images/page_014/img_001.svg" alt="" /> */}
                    <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">4</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10">Leo la revista, comprendo y completo.</div>
                    <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_045/img_001.svg" clasesImagen="hp-40 text-center msp-30 mtp-10 " className="p-0 px-0" />
                   
                </div>             
            </div>

            <div className="w-100 m-0 p-0 position-relative">
                <div className="d-flex w-100 justify-content-center psp-60 pep-60 ">
                                       <div className="row p-0 mbp-90 w-100">
                                <div className="col-12 position-relative d-flex pbp-20">
                            
                                    <div className="d-flex justify-content-center w-100 padding-box-18-1">

                                            <div className="cb-border-multi w-100 ptp-20 psp-20 pep-15 mtp-20 mbp-20">                                                       
                                                <div className="f-Ubuntu-L fsp-15 p-1 text-start">Lo que opino de la diversidad culinaria chilena es…</div>
                                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />                                                                                                                                            
                                        </div>
                                    </div>
                                </div>

                            <div className="d-flex">
                                <div className="row w-100 d-flex justify-content-center">
                                    <div className="col-5 d-flex h-100  ">
                                        <div className="d-flex">
                                            {/* <img className="hp-15 align-center mt-3 me-2 mb-2" src="images/page_014/img_001.svg" alt="" /> */}
                                            <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">6</div>
                                            <div className="f-Ubuntu-R fsp-16 text-start ptp-18 psp-10">Algunas expresiones gastronómicas o culinarias que queremos considerar en nuestra feria son…</div>
                                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_045/img_001.svg" clasesImagen="hp-40 text-center msp-30 mtp-10 " className="p-0 px-0" /> */}
                        
                                        </div>  
                                        
                                    </div>
                                    <div className="col-7 d-flex justify-content-center hp-250  ">
                                        <div className="position-relative">
                                        <div className="text-start position-absolute mtp-10 msp-10 w-100 pep-30" contenteditable="true"></div>
                                            <img className="hp-220 align-center w-100 " src="images/page_046/img_004.png" alt="" />
                                            <img className="hp-50 align-center position-absolute top-0 end-0 mtp--5 mep-10 " src="images/page_046/img_003.svg" alt="" />                                           
                                        </div>
                                    </div>

                                </div>
                            </div>


                    </div>
                </div>
            </div>


            <div className="h-100 mbp-30">
                    <div className="bgc-bobafett linea-separa-creacion pbp-100">
                        <div className="contenedor mtp-60 pbp-5 f-pixilate-bold text-start fsp-15">¿Cómo voy?</div>
                        <div className="contenedor p-2 pb-3 f-Ubuntu-L bgc-white fsp-13 rounded-p-10"> 
    
                            <div className="d-flex flex-wrap w-100 titulo-linea  ">
                                <div className="d-flex mtp-10 msp-10 align-items-center"><img src="images/page_046/img_006.svg" className="mep-5 hp-15" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">Para qué me sirvió la sesión de hoy?</span></div>
                            </div>
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="msp-20 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />

                        </div>
            {/* tabla */}
            <div className="cb-contenedor-tabla-p58">
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
                    <div className="flecha-saitama pep-10 mtp-8"></div>
                    <span className="text-left f-Ubuntu-L fsp-15 ptp-5">
                      El ambiente de trabajo en mi equipo fue agradable.
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
                    <div className="flecha-saitama pep-10 mtp-8"></div>
                    <span className="text-left f-Ubuntu-L fsp-15 ptp-5">
                      Estuve tenso y nervioso cuando trabajé con mi equipo.
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
            </div>
            </div>
                   {/* PIE DE PAGINA */} 
                   <div className="d-flex hp-90 p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
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
              <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
                <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                <div className="w-100 hp-25 bgc-pidgey"></div>
              </div>
              <div className="col-7 col-sm-2 p-0 m-0 position-relative">
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

export default Page046;
