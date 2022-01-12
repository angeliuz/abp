import React from "react";
import "./page_070.css";

function Page070(props) {
  const pagina = "070";
  var indexInput = 0;
  
  return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page bgc-pikachu position-relative" id={"page_"+pagina}>
            <div className="w-100 mt-15 pe-5 ps-5 ">
              {/* Begin background lineas */}
              <div className="cb-lineas-6 pbp-60">
                <div className="cb-cabecera">
                  <div className="cb-titulo-6 color-white fsp-20 lh-sm f-pixilate-bold">
                  Mis objetivos <br /> en esta etapa son: 
                  </div>
                  <div className="cb-cohete-6">
                    <img src="images/page_070/img_001.png" alt="" />
                  </div>
                </div>
                {/* Begin Contendor1 */}
                <div className="cb-contenedor-6-1">
                  <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
                    <div className="d-flex bgc-piccolo psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline-6"> 
                      <div className="d-flex"> 
                        <img src="images/page_070/img_004.svg" className="mbp-20 mep-5 pep-5" alt="" />
                      </div>  
                      <div className="d-flex"> 
                        <span className="fsp-16 f-IntroRustG-Base text-start"> 
                        PRESENTAR
                          <span className="fsp-16 text-start f-pixilate-regular">
                          a brigada <br /> a la comunidad educativa.
                          </span> 
                        </span>
                      </div>  
                    </div>
                  </div>
                </div>
                {/* End Contendor1 */}
                {/* Begin Contendor2 */}
                <div className="cb-contenedor-6-2">
                  <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-star">
                    <div className="d-flex bgc-piccolo psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline-6"> 
                        <div className="d-flex"> 
                          <img src="images/page_070/img_004.svg" className="mbp-20 mep-5 pep-5" alt="" />
                        </div> 
                        <div className="d-flex"> 
                          <span className="fsp-16 text-start f-pixilate-regular">
                            <span className="fsp-16 f-IntroRustG-Base text-start"> 
                            REFLEXIONAR
                            </span> 
                            sobre <br /> nuestro trabajo en equipo
                          </span>
                        </div> 
                    </div>
                  </div>
                </div>
                {/* End Contendor2 */}
                {/* Begin Contendor3 */}
                <div className="cb-contenedor-6-1">
                  <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
                    <div className="d-flex bgc-piccolo psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline-6"> 
                      <div className="d-flex"> 
                        <img src="images/page_070/img_004.svg" className="mbp-20 mep-5 pep-5" alt="" />
                      </div>  
                      <div className="d-flex"> 
                        <span className="fsp-16 f-IntroRustG-Base text-start"> 
                        VALORAR
                          <span className="fsp-16 text-start f-pixilate-regular">
                          lo aprendido <br /> VALORAR lo aprendido y el trabajo realizado. 
                          </span> 
                        </span>
                      </div>  
                    </div>
                  </div>
                </div>
                {/* End Contendor3 */}
              </div>
              {/* End background lineas */}

              <div className="d-flex justify-content-center max-img mb-5">
                <div className="">
                  <img src="images/page_070/img_003.jpg" className="img-fluid" alt="" />
                </div>
              </div>
            
              {/* Begin pie de página */}
              <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                  ABP &copy; SM
                </div>
                <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
              </div>
              {/* End pie de página */}
            
            </div>
            </div>
          </div>
        </div>

  );
}

export default Page070;
