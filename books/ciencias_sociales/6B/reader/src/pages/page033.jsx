import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_033.css";

function Page033(props) {

    const pagina = "033";
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
                    <div className="cabecera-v1 hp-80 bgc-android18">
                    </div>
                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    {/* <div className={"cabecera-v2 d-flex flex-column " + background}>
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"}>SESIÓN 8</div>
                            <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">La tecnología al servicio de la comunidad</div>
                        </div>
                        <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-95">
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Mis objetivos en <br /> esta sesión son:
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Escribir qué sé y qué me gustaría <br /> saber sobre los aparatos o<br />sistemas tecnológicos
                            </div>
                            <div className="psp-5 pep-5 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Comprender las <br /> características de un aparato <br />o sistema tecnológico
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="psp-0 pep-0 msp-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Relacionar imágenes con<br />el concepto de aparato o<br />sistema tecnológico
                            </div>
                        </div>
                    </div> */}
                    {/* END CABECERA VERSIÓN 2 */}

                    <div className="ptp-30 container-titulo-global mbp-0">
                        <div className="d-flex psp-20">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                3
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Acuerdo con mi grupo cómo investigaremos.
                            </div>
                            {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="d-flex global-margin mtp-50 mbp-0 psp-30 pep-50 ptp-0 pbp-10">
                        <div className="row p-0 m-0 w-100">

                            <div className="col-12 m-0 position-relative">
                            <div className="position-absolute top-100 start-50 translate-middle msp--130 mtp--10 zindex-1"><img src="images/page_033/img_006.svg" className=" wp-10" alt="" /></div>
                            <div className="position-absolute top-100 start-50 translate-middle msp-130 mtp--10 zindex-1"><img src="images/page_033/img_006.svg" className=" wp-10" alt="" /></div>
                                <div className="position-absolute top-0 start-100 translate-middle msp--80 mtp-30 visible-768"><img src="images/page_033/img_002.png" className=" " alt="" /></div>

                                <div className="d-flex mbp-20 mtp-10 w-90 ">
                                    <div className="ptp-70 psp-10 pep-10 pbp-10 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-lightDark box-shadow-simple">

                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0  px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-380" />
                                        <div className="position-absolute top-0 start-50 msp--25 mtp-40 translate-middle">
                                            <div className="bgc-azuka min-wp-410 color-white f-Ubuntu-B text-center px-3 py-2 rounded-p-20">
                                                <div className="d-flex p-2">
                                                    <div className={"f-Ubuntu-B fsp-21 mtp--6 " + color}>
                                                        a.
                                                    </div>
                                                    <div className="f-Ubuntu-R fsp-16 psp-10 pep-10 text-start color-dark">
                                                        ¿Cómo aseguraremos que nuestras fuentes
                                                        de información sean confiables?
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="d-flex global-margin mtp-0 mbp-0 psp-80 pep-0 ptp-0 pbp-100">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 m-0 position-relative">
                            <div className="position-absolute top-100 start-0 translate-middle mtp--150 msp--40 "><img src="images/page_033/img_005.png" className=" " alt="" /></div>
                                <div className="position-absolute top-0 start-100 translate-middle msp--50 mtp--110 visible-768"><img src="images/page_033/img_004.png" className=" " alt="" /></div>

                                <div className="d-flex mbp-20 mtp-10 w-90 ">
                                    <div className="ptp-70 psp-10 pep-10 pbp-10  min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-lightDark box-shadow-simple">

                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-380" />
                                        <div className="position-absolute top-0 start-50 msp--25 mtp-40 translate-middle">
                                            <div className="bgc-kai min-wp-410 color-white f-Ubuntu-B text-center px-3 py-2 rounded-p-20">
                                                <div className="d-flex p-2">
                                                    <div className={"f-Ubuntu-B fsp-21 mtp--6 " + color}>
                                                        b.
                                                    </div>
                                                    <div className="f-Ubuntu-R fsp-16 psp-10 pep-10 text-start color-dark">
                                                        ¿Qué haremos para incluir diversos puntos de
                                                        vista respecto del tema investigado?
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
        </div>
    );
}

export default Page033;
