import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_026.css";

function Page026(props) {

  const pagina = "026";
  var indexInput = 0;



  return (

    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
            <div className="cabecera-v1 hp-80 bgc-android18">
            </div>
            <div className="ptp-10 container-titulo-global mbp-0">
                <div className="d-flex">
                    <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_026/img_002.svg" alt=""  />
                    <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">4</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Comparto mi diseño con mi grupo y lo comentamos. Luego, diseñamos el afiche que incluiremos en la revista. Dibujo el boceto en el siguiente espacio:</div>

                </div>
            </div>
            
            <div className="row container-row">

                <div className="col-md-12 col-lg-12 position-relative">

                <div className="position-absolute top-50 start-100 translate-middle visible-768 zindex-1 msp--70 mtp-150"><img src="images/page_026/img_001.png" className="hp-60" alt=""/></div>
                    <div className="position-absolute top-50 start-0 translate-middle visible-768 zindex-1 msp-70 mtp--5"><img src="images/page_026/img_003.png" className="w-100" alt=""/></div>
                    <div className="position-absolute top-100 start-0 translate-middle visible-768 zindex-1 msp-100 mtp--90"><img src="images/page_026/img_004.png" className="w-100" alt=""/></div>

                    <div className="mbp-20 mtp-10 msp-20 mep-20">
                        <div className=" bgc-white caja-dibujo-global p-2 rounded-p-20 border-style-solid border-2 border-color-dark">

                        </div>
                    </div>
                    
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

export default Page026;
