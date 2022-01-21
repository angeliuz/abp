import React from "react";
import InputBox from "../components/InputBox";


import "./page_013.css";

function Page013(props) {

  const pagina = "013";
  var indexInput = 0;
  const etapa = "2"
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma"
  const bgc_cajas = "bgc-draco";

  return (

    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* BEGIN CABECERA VERSIÓN 2 */}
                <div className={"cabecera-v2 d-flex flex-column "+background}>
                  <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                    <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base "+color}>SESIÓN 2</div>
                    <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Nuestras ideas cuentan</div>
                  </div>

                </div> 
                {/* END CABECERA VERSIÓN 2 */}

                {/* BEGIN TITULO */}
                <div className="ptp-30 container-titulo-global mbp-20">
                  <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>¡Tantos desechos!</div>
                    <div className="d-flex">
                        {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_007/ig.svg" alt=""  /> */}
                        <div className={"f-ccdigitaldelivery-bold fsp-35 "+color}>1</div>
                        <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                        Observo y completo.
                        </div>
                        {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.jpg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                        {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.jpg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                    </div>
                </div>
                {/* END TITULO */}

                {/* BEGIN CONTENIDO */}
                <div className="d-flex psp-60 pep-60 mbp-70">
                  <div className="row w-100">
                      <div className="col-12 col-md-6 position-relative">
                              
                              <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp--70 visible-768"><img src={"images/page_0"+pagina+"/personaje.png"} className="wp-150 " alt="" /></div>

                              <div className="d-flex justify-content-center w-100 pbp-20">
                                  <div className="p-2 w-100 f-Ubuntu-L border-style-solid border-3 rounded-p-10 border-color-android18 text-start bgc-white">                                
                                          <div className="fsp-13 lh-sm text-start">
                                              <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                                          </div>
                                  </div>
                              </div>

                      </div>
                    </div>
                
                </div>   
                {/* END CONTENIDO */}

                
                {/* BEGIN PIE DE PAGINA */}
                <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                  <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                    ABP &copy; SM
                  </div>
                  <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                </div>
                <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{bottom:0}}>

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
                {/* END PIE DE PAGINA */}

              </div>
            </div>
          </div>

  );
}

export default Page013;
