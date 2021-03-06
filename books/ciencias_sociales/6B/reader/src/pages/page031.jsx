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
                    {/* <div className={"cabecera-v2 d-flex flex-column " + background}>
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base " + colorSesion}>SESIÓN 6</div>
                            <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Entrevistamos, nos conocemos,
                                nos respetamos</div>
                        </div>

                    </div> */}
                    {/* END CABECERA VERSIÓN 2 */}
                    {/* <div className="cabecera-v1 hp-80 bgc-android18">
                    </div> */}
                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    <div className="cabecera-v2 bgc-android18 d-flex flex-column">
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className="caja-seccion wp-160 hp-70 text-center fsp-24  f-IntroRustG-Base color-dark">SESIÓN 7</div>
                            <div className="lh-sm section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white text-start">Indagamos sobre la situación
                                de los derechos en el mundo</div>
                        </div>
                        <div className="d-flex contenedor-cabecera-v2 ptp-5 psp-30 pep-30 align-self-center justify-content-between w-90">
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Mis objetivos <br />en  esta sesión son:
                            </div>
                            <div className="p-0 align-self-center">
                                <img src="images/page_031/flecha.svg" className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Identificar nuestras ideas<br />sobre el derecho que inspirará<br /> nuestra obra.
                            </div>
                            <div className="p-0 align-self-center">
                                <img src="images/page_031/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Organizar la forma en<br /> que indagaremos.
                            </div>
                            <div className="p-0 align-self-center">
                                <img src="images/page_031/flecha.svg" className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                                Investigar la situación<br /> en el mundo del derecho<br />que seleccionamos.
                            </div>
                            {/* <div className="p-0 align-self-center">
                <img src="images/page_025/flecha1.svg" className="wp-40 arrow-global rotate-90" alt="" />
              </div> */}
                            {/* <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                Imaginar cómo<br /> hacer sostenible el<br />colegio
              </div> */}
                        </div>
                    </div>
                    {/* END CABECERA VERSIÓN 2 */}
                    <div className="ptp-30 container-titulo-global mbp-20 position-relative">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Lo que sé del tema</div> */}
                        <div className="d-flex">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_003.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Completo a partir del derecho<br />
                                que seleccionamos para inspirar<br />
                                nuestra obra de arte.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_002.jpg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="d-flex global-margin mtp-80 mbp-100 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">

                                <div className="row">
                                    <div className="col-6 position-relative align-items-stretch mbp-70">
                                    <div className="position-absolute top-50 start-100 translate-middle  msp-10 zindex-1"><img src={"images/page_" + pagina + "/flecha_2.svg"} className="" alt="" /></div>
                                        <div className="position-absolute top-0 start-100 translate-middle visible-768 msp--20 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="" alt="" /></div>
                                        <div className="position-absolute top-100 start-0 translate-middle msp-50 mtp--20 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="" alt="" /></div>
                                        <div className="h-100 bgc-jack w-100  m-1">

                                            <div className="f-Ubuntu-R fsp-16 p-3 text-start align-self-center">
                                                ¿Cuál pienso que es la situación de<br />
                                                este derecho en el mundo?
                                            </div>
                                            <div className="h-100 psp-20 pep-20 ptp-0 pbp-5 m-0  w-100 bgc-jack">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-600" />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-6 position-relative ptp-50 align-items-stretch mbp-70">
                                        {/* <div className="position-absolute top-0 start-0   msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className=" msp-10 mtp--5" alt="" /></div> */}
                                        <div className="h-100 bgc-jack w-100   m-1">

                                            <div className="f-Ubuntu-R fsp-16 p-3 text-center align-self-center mtp-40">
                                                ¿Qué piensa el resto de mi grupo?
                                            </div>
                                            <div className="h-100 psp-20 pep-20 ptp-0 pbp-5 m-0  w-100 bgc-jack">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-600" />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-6 position-absolute top-0 start-100 translate-middle msp--170 mtp-20 ">
                                    <div className="position-absolute top-0 start-100 translate-middle  msp--15 mtp-20 zindex-1"><img src={"images/page_" + pagina + "/clip.svg"} className="wp-30" alt="" /></div>
                                        <div className="rotate-5">
                                            <div className="bgc-makoto w-100 border-style-solid border-1 p-2 box-shadow-simple">
                                                <div className="f-Ubuntu-L fsp-16 text-center">El derecho que inspirará nuestra obra es:</div>
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-100 overflow-auto" />
                                                {/* <div className="position-absolute top-100 start-100 translate-middle msp--10 mtp--10 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div> */}
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

                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className="col-7 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page031;
