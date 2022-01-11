import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_036.css";

function Page036(props) {

  const pagina = "036";
  var indexInput = 0;



  return (

    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
            <div className="cabecera-v1 hp-80 bgc-android18">
            </div>


            <div className="d-flex msp-60 mep-60 mbp-10">

                <div className="row m-0 p-2 rounded-p-20 w-100">
                    <div className="col-md-12 col-lg-12 position-relative">
                        <div className="position-absolute top-50 start-0 translate-middle wp-100 msp-20 visible-768"><img src="images/page_036/img_002.png" className="w-35" /></div>
                        <div className="position-absolute top-0 start-50 translate-middle wp-100 mtp-30 msp-120 visible-768"><img src="images/page_036/img_001.png" className="w-45" /></div>
                        <div className="d-flex mbp-20 mtp-10 w-100 padding-box-36-1">
                            <div className="p-2 min-hp-100 w-100">
                                <div className="d-flex flex-column bgc-shogun exterior-caja-v1 border-style-solid  border-color-android18 border-2 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                                    <div className="d-flex interior-caja-v1 bgc-white text-start min-hp-0">
                                        <div className="w-100 text-center">¿Cómo seleccionaremos la información?</div>
                                    </div>
                                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-12 position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle wp-100 msp--120 mtp-60 visible-768"><img src="images/page_036/img_004.png" className="w-75" /></div>
                        <div className="position-absolute top-100 start-100 translate-middle wp-100 mtp--60 msp--30 visible-768"><img src="images/page_036/img_005.png" className="w-65" /></div>
                        <div className="position-absolute top-0 start-100 translate-middle wp-100 mtp--100 msp--150 visible-768"><img src="images/page_036/img_003.png" className="wp-200" /></div>
                        <div className="d-flex mbp-20 mtp-10 w-100 padding-box-36-2">
                            <div className="p-2 min-hp-100 w-100">
                                <div className="d-flex flex-column bgc-quaternary exterior-caja-v1 border-style-solid  border-color-quaternary border-2 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                                    <div className="d-flex interior-caja-v1 bgc-white text-start min-hp-0">
                                        <div className="w-100 text-center">¿Cómo registraremos la información<br/> y su fuente de origen?</div>
                                    </div>
                                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="ptp-10 container-titulo-global mbp-70">
                <div className="d-flex">
                    {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_035/img_002.svg" alt=""  /> */}
                    <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">4</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">¡Investiga!</div>

                </div>
            </div>

                {/* BEGIN PIE DE PAGINA */}
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
                    <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                        <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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
                {/* END PIE DE PAGINA */}
                
              </div>
            </div>
          </div>

  );
}

export default Page036;
