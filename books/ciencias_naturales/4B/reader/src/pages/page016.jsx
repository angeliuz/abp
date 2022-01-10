import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_016.css";

function Page016(props) {

  const pagina = "016";
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
                    <div className="f-ccdigitaldelivery-bold fsp-35 color-bulma">2</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10">Presento el orden que dimos a la revista en el siguiente esquema.</div>
                </div>
                {/* <div className="f-Ubuntu-L fsp-15 psp-70 text-start">Comparo mis respuestas con las de mi grupo. ¿Pensamos todos lo mismo?</div> */}
            </div>

            <div className="row mt-0 ms-0 me-0 mbp-90 p-0 ">
              <div className="col-12 d-flex justify-content-center">

                <div className="w-90 m-0 p-0">
                  <div className="row ptp-20 tf-outlinebetty bgc-betty">
                          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-end m-0 p-3">
                              <img src="images/page_016/img_004.png" className="msp-10 hp-185" alt="" />
                          </div>
                          <div className="col-sm-12 col-md-6 d-flex position-relative justify-content-center align-items-center m-0 p-3">
                              <img src="images/page_016/img_006.png" className="" alt="" />
                              <div className="tf-mapa-content position-absolute">
                                  <img src="images/page_016/img_001.png" className="hp-90" alt="" />
                              </div>
                          </div>

                          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center m-0 p-3">
                              <img src="images/page_016/img_005.png" className="" alt="" />

                          </div>
                          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center m-0 p-3">
                              <img src="images/page_016/img_005.png" className="" alt="" />
                          </div>
                          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center m-0 p-3">
                            <img src="images/page_016/img_005.png" className="" alt="" />
                          </div>
                          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center m-0 p-3">
                              <img src="images/page_016/img_005.png" className="" alt="" />
                          </div>

                          <div className="col-sm-12 col-md-6 d-flex position-relative justify-content-center align-items-center m-0 p-3">
                              <img src="images/page_016/img_007_.png" className="" alt="" />
                              <div className="tf-hoja-content position-absolute">
                                  <img src="images/page_016/img_002.png" className="hp-70" alt="" />
                              </div>
                          </div>

                          <div className="col-sm-12 col-md-6 d-flex justify-content-center align-items-center m-0 p-3">
                          </div>

                          <div className="col-sm-12 d-flex justify-content-center align-items-center m-0 p-3">
                              <img src="images/page_016/img_009.svg" className="w-95 msp-30 mtp-0 mbp-10" alt="" />
                          </div>
                          <div className="col-sm-12 d-flex justify-content-center align-items-center mbp-20 ">
                              <div className="psp-20 pep-20 ptp-10 pbp-10 texto justify-content-center align-items-center bgc-white rounded-p-10"> El orden de lectura es de izquierda a derecha.</div>
                          </div>
                      
                          <div className="tf-personaje-content">
                              <img src="images/page_016/img_003.png" className="tf-personaje cambio hp-150 pep-15" alt="" />
                          </div>
                    
                  </div>
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

export default Page016;
