import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_035.css";

function Page035(props) {

    const pagina = "035";
    var indexInput = 0;
    const etapa = "3"
    const background = "bgc-android18";
    const color = "color-android18";
    const colorSesion = "color-primary";
    const borderColor = "border-color-android18"
    const bgc_cajas = "bgc-goku";

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    <div className={"cabecera-v2 d-flex flex-column " + background}>
                    <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className="lh-sm caja-seccion wp-190 hp-70 text-center fsp-24  f-IntroRustG-Base color-dark">SESIÓN 8</div>
                            <div className="lh-sm section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white text-start "> Proponemos formas en que la sociedad puede defender sus derechos</div>
                        </div>
                        <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-0 pep-0 align-self-center justify-content-between w-95">
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Mis objetivos en <br /> esta sesión son:
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Analizar la situación <br />edel derecho que investigamos.

                            </div>
                            <div className="psp-5 pep-5 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Proponer formas en que las personas pueden<br /> defender el derecho que investigamos.

                            </div>

                        </div>
                    </div>
                    {/* END CABECERA VERSIÓN 2 */}

                    <div className="ptp-30 container-titulo-global mbp-0">
                        <div className="d-flex psp-20">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_003.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                1
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Completo y comparto con mi grupo.
                            </div>
                            {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>










                    <div className="d-flex global-margin mtp-20 mbp-80 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">
                                <div className="position-absolute top-0 start-100 translate-middle    msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-50 mtp-0" alt="" /></div>
                                <div className="position-absolute top-0 start-0 translate-middle      msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-30 mtp-280" alt="" /></div>
                                <div className="position-absolute top-100 start-0 translate-middle    msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_007.png"} className="wp-80 mtp-0" alt="" /></div>

                                <div className="w-100 h-100 bgc-tatooine rounded-p-10 pbp-15">
                                    <div className="row m-0 p-2 ">


                                        <div className="col-4 d-flex align-items-center ">
                                            <div className=" f-Ubuntu-R fsp-16 ptp-18 psp-0 pep-0 pbp-0 text-start">El tema que investigué es:</div>
                                        </div>
                                        <div className="col-8">
                                            <div className="bgc-white w-100 rounded-p-10 ps-2 pe-2 ">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-20 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                                            </div>
                                        </div>


                                        <div className="col-12 ptp-20">
                                            <div className="bgc-white w-90  rounded-p-10 p-0 m-0 mbp-10">
                                                <div className="f-Ubuntu-R fsp-16 ptp-18 pep-10 psp-20 text-start">
                                                    Después de la investigación, ¿qué pienso sobre la situación en el mundo del derecho que seleccionamos?
                                                </div>
                                                <div className="psp-20 pep-20 ptp-0 pbp-15 m-0  w-100 ">
                                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-20 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250" />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-12 ptp-40 position-relative">
                                            <div className="position-absolute top-0 start-100 translate-middle   msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-120 msp--70 mtp-30" alt="" /></div>
                                            <div className="d-flex justify-content-end">

                                                <div className="bgc-white w-90  rounded-p-10 p-0 m-0 mbp-10  ">
                                                    <div className="f-Ubuntu-R fsp-16 ptp-18 pep-10 psp-20 text-start">
                                                        Con mi grupo concluimos lo siguiente:
                                                    </div>
                                                    <div className="psp-20 pep-20 ptp-0 pbp-15 m-0  w-100 ">
                                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-20 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250" />
                                                    </div>

                                                </div>
                                            </div>
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
        </div >
    );
}

export default Page035;
