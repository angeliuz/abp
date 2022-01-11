import React from "react";
import "./page_012.css";

function Page012(props) {

  const pagina = "012";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-50">
            <div className="page bgc-bulma position-relative" id={"page_"+pagina}>
                <div className="w-100 mt-15 pe-5 ps-5 ">
                    <div className="cb-lineas">
                        <div className="cb-cabecera">
                            <div className="cb-titulo color-white fsp-27 lh-sm f-pixilate-bold mtp--10">
                                Mis objetivos <br /> en esta etapa son:
                            </div>
                            <div className="cb-cohete"><img src="images/page_012/img_001.png" className="hp-80 mtp--10" alt="" />
                            </div>
                        </div>
                        <div className="cb-contenedor-1">
                            <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
                                <div className="d-flex bgc-piccolo psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline">
                                    <div className="d-flex"> <img src="images/page_012/img_004.svg" className="mbp-20 mep-5"
                                            alt="" /></div>
                                    <div> <span className="fsp-16 f-IntroRustG-Base">
                                            IDENTIFICAR</span> lo<br />que sé y lo que necesito<br />saber del tema..
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cb-contenedor-2">
                            <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-star">
                                <div className="d-flex bgc-piccolo psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline">
                                    <div className="d-flex"> <img src="images/page_012/img_004.svg" className="mbp-45 mep-5"
                                            alt=""/></div>
                                    <div> <span className="fsp-16 f-IntroRustG-Base">
                                            RECONOCER </span> las<br />tareas para llevar a cabo en<br />el proyecto.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cb-contenedor-3">
                            <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-star">
                                <div className="d-flex bgc-piccolo psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline">
                                    <div className="d-flex"> <img src="images/page_012/img_004.svg" className="mbp-45 mep-5"
                                            alt="" /></div>
                                    <div> <span className="fsp-16 f-IntroRustG-Base">
                                            PLANIFICAR</span> el<br />trabajo en equipo.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center max-img mb-5">
                        <div className="">
                            <img src="images/page_012/img_003.jpg" className="img-fluid" alt=""/>
                        </div>
                    </div>
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2 abp-copy">
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60 blanco270">ABP &copy; SM</div>
                        <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">12</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  );
}

export default Page012;
