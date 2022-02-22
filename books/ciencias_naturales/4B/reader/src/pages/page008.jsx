import React from "react";
import InputBox from "../components/InputBox";

import "./page_008.css";

function Page008(props) {

    const pagina = "008";
    var indexInput = 0;

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white position-relative" id={"page_" + pagina}>
                    <div className="cabecera-v1 hp-80 bgc-goten">

                    </div>
                    <div className="cb-bgc-p08 ptp-5 pbp-5 mtp-10 mbp-70">
                        <div className="d-flex cb-seccion-inicial-p07 justify-content-center msp-5 mbp-20 mtp-30 justify-content-between">
                            <div className="cb-seccion-inicial-col-a bgc-white cb-seccion-linea-p07 p-3 pb-3 f-Ubuntu-L fsp-13 mbp-5 position-relative msp-5">
                                <img src="images/page_008/img_001.svg" className="cb-union-1" alt=""></img>
                                <img src="images/page_008/img_001.svg" className="cb-union-3" alt=""></img>
                                <img src="images/page_008/img_001.svg" className="cb-union-a" alt=""></img>
                                <img src="images/page_008/img_001.svg" className="cb-union-b" alt=""></img>
                                <div className="cb-a text-start fw-700 fsp-15 cb-pbp"> <span>¿En qué consiste el desafío? </span>  </div>
                                <div className=" psp-15 psp-5">
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-270" />
                                </div>
                            </div>
                            <div className="cb-seccion-inicial-col-a bgc-white cb-seccion-linea-p07 p-3 pb-3 f-Ubuntu-L fsp-13 mbp-5 position-relative mep-5">
                                <img src="images/page_008/img_001.svg" className="cb-union-2" alt=""></img>
                                <img src="images/page_008/img_001.svg" className="cb-union-4" alt=""></img>
                                <img src="images/page_008/img_002.png" className="cb-blocknotas-p07" alt=""></img>
                                <div className="cb-b text-start fw-700 fsp-15 pbp-20"> <span>¿Cuál crees que es la misión de un brigadista?</span> </div>
                                <div className="psp-15 psp-5">
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-270" />
                                </div>
                            </div>
                        </div>


                        <div className="cb-ejercicio-final-bloques d-flex mbp-20">
                            <div className="cb-ejercicio-final-lef position-relative" >

                                <div className="cb-ejercicio-left-arriba position-relative f-Ubuntu-R">
                                    <div className="cb-pienso-c text-start fsp-15"> <span>Pienso y le pregunto a Macarena.</span>  </div>
                                </div>

                                <div className="border-style-solid border-2 border-color-rukia mtp-20 box-shadow-simple position-relative rotate-2">
                                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--60  zindex-1"><img src={"images/page_" + pagina + "/img_004.svg"} className="wp-30" alt="" /></div>
                                    <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp--60  zindex-1"><img src={"images/page_" + pagina + "/img_004.svg"} className="wp-30 rotate-180" alt="" /></div>
                                    <div className="d-flex flex-column bgc-shogun">
                                        <div className="psp-10 pep-10">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-250" />
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="cb-ejercicio-final-rig mbp-70">

                                <div className="border-style-solid border-2 border-color-goku mtp-20 box-shadow-simple position-relative rotate-2">
                                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--60  zindex-1"><img src={"images/page_" + pagina + "/img_006.svg"} className="wp-30" alt="" /></div>
                                    <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp--60 zindex-1"><img src={"images/page_" + pagina + "/img_006.svg"} className="wp-30 rotate-180" alt="" /></div>
                                    <div className="d-flex flex-column bgc-piccolo">
                                        <div className="psp-10 pep-10">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-250" />
                                        </div>
                                    </div>
                                </div>

                                <div className="border-style-solid border-2 border-color-freezer mtp-20 box-shadow-simple position-relative rotate--2">
                                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--60  zindex-1"><img src={"images/page_" + pagina + "/img_005.svg"} className="wp-30" alt="" /></div>
                                    <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp--60  zindex-1"><img src={"images/page_" + pagina + "/img_005.svg"} className="wp-30 rotate-180" alt="" /></div>
                                    <div className="d-flex flex-column bgc-bison">
                                        <div className="psp-10 pep-10">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-250" />
                                        </div>
                                    </div>
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
                    {/* END PIE DE PAGINA */}

                </div>
            </div>
        </div>

    );
}

export default Page008;
