import React from "react";
import "./page_006.css";

function Page006() {
  return (
    <div>
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page bgc-goten position-relative" id="page_006">
            <div className="w-100 mt-15 pe-5 ps-5 ">
              {/* Begin background lineas */}
              <div className="cb-lineas pbp-60">
                <div className="cb-cabecera">
                  <div className="cb-titulo color-white fsp-20 lh-sm f-pixilate-bold">
                  Mis objetivos <br /> en esta etapa son: 
                  </div>
                  <div className="cb-cohete">
                    <img src={process.env.PUBLIC_URL + "images/page_006/img_001.png"} alt="" />
                  </div>
                </div>
                {/* Begin Contendor1 */}
                <div className="cb-contenedor-1">
                  <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
                    <div className="d-flex bgc-piccolo psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline"> 
                      <div className="d-flex"> 
                        <img src="images/page_006/arrow.svg" className="mbp-20 mep-5" alt="" />
                      </div>  
                      <div className="d-flex"> 
                        <span className="fsp-16 f-IntroRustG-Base text-start"> 
                          COMPRENDER
                          <span className="fsp-16 text-start f-pixilate-regular">
                            <br /> el desafío que nos plantean.
                          </span> 
                        </span>
                      </div>  
                    </div>
                  </div>
                </div>
                {/* End Contendor1 */}
                {/* Begin Contendor2 */}
                <div className="cb-contenedor-2">
                  <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-star">
                    <div className="d-flex bgc-piccolo psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline"> 
                        <div className="d-flex"> 
                          <img src={process.env.PUBLIC_URL + "images/page_006/arrow.svg"} className="mbp-20 mep-5" alt="" />
                        </div> 
                        <div className="d-flex"> 
                          <span className="fsp-16 text-start f-pixilate-regular">
                            <span className="fsp-16 f-IntroRustG-Base text-start"> 
                            COMPROMETERME
                            </span> 
                            <br /> con el desafío.
                          </span>
                        </div> 
                    </div>
                  </div>
                </div>
                {/* End Contendor2 */}
              </div>
              {/* End background lineas */}

              <div className="d-flex justify-content-center max-img mb-5">
                <div className="">
                  <img src={process.env.PUBLIC_URL + "images/page_006/img_003.jpg"} className="img-fluid" alt="" />
                </div>
              </div>
            
              {/* Begin pie de página */}
              <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                  ABP &copy; SM
                </div>
                <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">8</div>
              </div>
              {/* End pie de página */}
            
            </div>
            </div>
          </div>
        </div>

    </div>
  );
}

export default Page006;
