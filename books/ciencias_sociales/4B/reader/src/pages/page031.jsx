import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_031.css";

function Page031(props) {

    const pagina = "031";
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
                            <div className={"caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 fsp-24 f-IntroRustG-Base  " + colorSesion}>SESIÓN 6</div>
                            <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Entrevistamos, nos conocemos,
                                nos respetamos</div>
                        </div>

                    </div>
                    {/* END CABECERA VERSIÓN 2 */}


                    <div className="ptp-30 container-titulo-global mbp-20">
                        <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Lo que sé del tema</div>
                        <div className="d-flex">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_002.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Completo las siguientes oraciones.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_002.jpg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="d-flex msp-60 mep-60 psp-20 pep-20">

                        <div className="row ptp-0 ps-12 pe-8 m-0 w-100">
                            <div className="col-12  position-relative ">
                                <div className="position-absolute top-100 start-100 translate-middle msp-20 mtp--100 "><img src="images/page_031/img_004.png" className="wp-70 " alt="" /></div>
                                <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-60 "><img src="images/page_031/img_003.png" className=" " alt="" /></div>

                                <div className="d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-2  border-color-dark bgc-azuka">
                                    <div className="f-Ubuntu-R fsp-16 text-start w-100">Una entrevista es</div>
                                    <div className="p-2 w-100 d-flex flex-column">
                                        {/* <div className="f-Ubuntu-L fsp-16  text-start w-100">Podemos mejorar en...</div> */}
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                                    </div>
                                    <div className="f-Ubuntu-R fsp-16 text-start w-100">Si me entrevistaran, me gustaría que sea acerca de</div>
                                    <div className="p-2 w-100 d-flex flex-column">
                                        {/* <div className="f-Ubuntu-L fsp-16  text-start w-100">Podemos mejorar en...</div> */}
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                                    </div>
                                    <div className="f-Ubuntu-R fsp-16 text-start w-100">Una entrevista me puede ayudar a realizar el desafío final porque</div>
                                    <div className="p-2 w-100 d-flex flex-column">
                                        {/* <div className="f-Ubuntu-L fsp-16  text-start w-100">Podemos mejorar en...</div> */}
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="ptp-30 container-titulo-global mbp-20">
                        <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Conocemos una entrevista</div>
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_002.svg"} alt="" /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Leo la entrevista y completo.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"81"} image={"images/page_" + pagina + "/img_005.svg"} clasesImagen="hp-40 text-center mtp-10" className="p-0 px-0" />
            </div>
                    </div>

                    <div className="ptp-10 psp-80 pep-80 pbp-100">
                        <div className="row rounded-p-10  position-relative">

                            <div className="col-12 col-md-4 p-0">
                                <div className="w-100 p-2 m-0 position-relative">
                                    <div className="rounded-tbe-20 p-3  border-style-solid border-4 border-color-android18">
                                        <div className="f-Ubuntu-R fsp-16 text-start w-100 ">Elementos y personas
                                            necesarias para
                                            la entrevista:</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 p-0 position-relative">
                                {/* <div className="position-absolute top-0 start-100 translate-middle "><img src="images/page_029/img_002.png" className=" mtp--40 msp-30 z-index-1" alt="" /></div> */}
                                <div className="w-100 p-2 m-0 position-relative">
                                    <div className="rounded-tbe-20 p-3 border-style-solid border-4 border-color-bach">
                                        <div className="f-Ubuntu-R fsp-16 text-start w-100">Tipos de preguntas
                                            realizadas en la entrevista:</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 p-0 position-relative">
                                {/* <div className="position-absolute top-0 start-100 translate-middle "><img src="images/page_029/img_002.png" className=" mtp--40 msp-30 z-index-1" alt="" /></div> */}
                                <div className="w-100 p-2 m-0 position-relative">
                                    <div className="rounded-tbe-20 p-3 border-style-solid border-4 border-color-rex">
                                        <div className="f-Ubuntu-R fsp-16 text-start w-100 pbp-20">Información obtenida de
                                            la entrevista:</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

     {/* PIE DE PAGINA */}
     <div
                        className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2"
                        style={{ bottom: 70, right: 0 }}
                    >
                        <div
                            className="f-Ubuntu-M fsp-10 position-absolute mbp-60"
                            style={{ transform: `rotate(270deg)`, color: "dark" }}
                        >
                            ABP &copy; SM
                        </div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
                            {props.numeroPagina(pagina)}
                        </div>
                    </div>
                    <div
                        className="row position-absolute caja-flotante2 p-0 m-0 align-items-end"
                        style={{ bottom: 0 }}
                    >
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img
                                src="images/rotulo_motivacion.svg"
                                className="oculto"
                                alt=""
                            />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img
                                src="images/rotulo_planificacion.svg"
                                className="oculto"
                                alt=""
                            />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className="col-7 position-relative col-sm-2 p-0 m-0">
                            <img
                                src="images/rotulo_investigacion.svg"
                                className="visible rotulo-etapa position-absolute top-0 start-0"
                                alt=""
                            />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img
                                src="images/rotulo_experimentacion.svg"
                                className="oculto"
                                alt=""
                            />
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

export default Page031;
