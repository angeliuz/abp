import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_057.css";

function Page057(props) {

    const pagina = "057";
    var indexInput = 0;
    const etapa = "5"
    const background = "bgc-saitama";
    const color = "color-saitama";
    const bgc_cajas = "bgc-bobafett";

    return (


        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    <div className={"cabecera-v2 d-flex flex-column " + background}>
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"}>SESIÓN 18</div>
                            <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Diseñamos la exposición</div>
                        </div>
                        <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-95">
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Mis objetivos en <br />esta sesión son:
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Proponer un diseño<br /> para la exposición

                            </div>
                            <div className="psp-5 pep-5 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Seleccionar el diseño<br />de la exposición

                            </div>

                            <div className="psp-5 pep-5 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Establecer las responsabilidades<br />para realizar la exposición

                            </div>


                        </div>
                    </div>
                    {/* END CABECERA VERSIÓN 2 */}













                    <div className="d-flex global-margin mtp-50 mbp-0 psp-60 pep-40 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative   bgc-shaokhan border border-1 border-color-dark  ptp-15 pbp-15 rounded-seb-10">


                                <div className="row   bgc-info border border-1 border-color-dark  ptp-10 pbp-10 rounded-seb-10">

                                    <div className="col-sm-12 col-md-4 bgc-red p-0 m-0 position-relative   ">
                                        <div className="d-flex justify-content-center">

                                            <div className="rounded-p-10 border-style-solid border-1 border-color-dark m-1 p-2 wp-170   bgc-white">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-1 bgc-goku p-0 m-0 position-relative  wp-50  d-flex justify-content-center align-items-center bgc-yellow ">
                                        <div className="d-flex align-items-center "></div>
                                        <img src={"images/page_" + pagina + "/img_004.svg"} className="wp-30  flecha-rotar" alt="" />
                                    </div>

                                    <div className="col-sm-12 col-md-7 p-0 m-0 h-100   bgc-yellow   ">

                                        <div className="d-flex justify-content-end ">
                                            <div className="rounded-p-10 border-style-solid border-1 border-color-dark m-1 p-2 wp-600   bgc-white">

                                                <div className="mtp-0 ">
                                                    <div className="d-flex justify-content-start align-items-center  f-Ubuntu-R fsp-15 ptp-0 psp-5">Porque</div>
                                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>








                    <div className="d-flex global-margin mtp-50 mbp-0 psp-60 pep-40 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100    bgc-info border border-1 border-color-dark  ptp-10 pbp-10 rounded-seb-10">

                            <div className="col-sm-12 col-md-4 bgc-red p-0 m-0 position-relative   ">
                                <div className="d-flex justify-content-center">

                                    <div className="rounded-p-10 border-style-solid border-1 border-color-dark m-1 p-2 wp-170   bgc-white">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-1 bgc-goku p-0 m-0 position-relative h-80 wp-50  d-flex justify-content-center align-items-center bgc-yellow ">
                                <div className="d-flex align-items-center "></div>
                                <img src={"images/page_" + pagina + "/img_004.svg"} className="wp-30  flecha-rotar" alt="" />
                            </div>

                            <div className="col-sm-12 col-md-7 p-0 m-0 h-100   bgc-yellow   ">

                                <div className="d-flex justify-content-end ">
                                    <div className="rounded-p-10 border-style-solid border-1 border-color-dark m-1 p-2 wp-600   bgc-white">

                                        <div className="mtp-0 ">
                                            <div className="d-flex justify-content-start align-items-center  f-Ubuntu-R fsp-15 ptp-0 psp-5">Porque</div>
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />

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
                        <div className="bgc-misty wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

                        <div className={etapa == 1 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className={etapa == 2 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className={etapa == 3 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className={etapa == 4 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className={etapa == 5 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-saitama"></div>
                        </div>
                        <div className={etapa == 6 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_difusion.svg" className={etapa == 6 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
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

export default Page057;
