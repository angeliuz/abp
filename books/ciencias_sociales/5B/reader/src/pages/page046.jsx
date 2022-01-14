import React from "react";
import "./page_046.css";

function Page046(props) {

  const pagina = "046";
  var indexInput = 0;

  return (
      
    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">

                <div className="page bgc-pidgey position-relative" id={"page_"+pagina}>
                    <div className="w-100 mt-15 pe-5 ps-5 ">
                        <div className="cb-lineas-46 pbp-60">
                            <div className="cb-cabecera">
                                <div className="cb-titulo-12 color-white fsp-20 lh-sm f-durotype-aspiranar-bold">
                                Mis objetivos <br /> en esta etapa son: 
                                </div>
                                <div className="cb-cohete-12" ><img src="images/page_046/nave.png" alt=""/>
                                </div>
                            </div>

                <div className="cb-contenedor-12-1">
                    <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
                        <div className="d-flex bgc-tertiary psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline-46"> 
                        <div className="d-flex wp-23"> 
                            <img src="images/page_046/flecha.svg" className="mbp-20 mep-5 wp-20" alt=""/>
                        </div>  
                        <div> 
                            <span className="fsp-16 text-start f-pixilate-regular">
                                <span className="fsp-16 f-IntroRustG-Base text-start"> 
                                Realizar
                                </span> 
                                <br /> las entrevistas. 
                            </span>
                        </div>  
                        </div>
                    </div>
                </div>
                <div className="cb-contenedor-12-2">
                    <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
                        <div className="d-flex bgc-tertiary psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline-46"> 
                            <div className="d-flex wp-23"> 
                                <img src="images/page_046/flecha.svg" className="mbp-25 mep-5 wp-20" alt=""/>
                            </div> 
                            <div className="d-flex"> 
                                <span className="fsp-16 text-start f-pixilate-regular">
                                    <span className="fsp-16 f-IntroRustG-Base text-start">
                                    Analizar</span> <br /> las entrevistas.
                                    </span>
                            </div> 
                        </div>
                    </div>
                </div>
                <div className="cb-contenedor-12-3">
                    <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-star">
                        <div className="d-flex bgc-tertiary psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline-46"> 
                            <div className="d-flex"> 
                                <img src="images/page_046/flecha.svg" className="mbp-25 mep-5 wp-20" alt=""/>
                            </div> 
                            <div className="d-flex"> 
                                    <span className="fsp-16 text-start f-pixilate-regular">
                                        <span className="fsp-16 f-IntroRustG-Base text-start">
                                        Transcribir</span> <br /> las entrevistas.
                                        </span>
                                </div> 
                        </div>
                    </div>
                </div>
                <div className="cb-contenedor-12-4">
                    <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-star">
                        <div className="d-flex bgc-tertiary psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline-46"> 
                            <div className="d-flex"> 
                                <img src="images/page_046/flecha.svg" className="mbp-20 mep-5 wp-20" alt=""/>
                            </div> 

                                <div className="d-flex"> 
                                    <span className="fsp-16 text-start f-pixilate-regular">
                                        <span className="fsp-16 f-IntroRustG-Base text-start">
                                        Valorar</span> <br />el trabajo realizado.
                                        </span>
                                </div> 
                        </div>
                    </div>
                </div>
            </div>
            
                    <div className="d-flex justify-content-center max-img mb-5">
                        <div className="">
                            <img src="images/page_046/imagen.jpg" className="img-fluid" alt="" />
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

export default Page046;
