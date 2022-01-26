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
                            <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base " + colorSesion}>SESIÓN 9</div>
                            <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Confeccionamos una infografía</div>
                        </div>

                    </div> */}
                    {/* END CABECERA VERSIÓN 2 */}


                    <div className="ptp-30 container-titulo-global mbp-20">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Creo e informo</div> */}
                        <div className="d-flex">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>4</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Siguiendo el ejemplo de la revista, definimos el guion de la entrevista.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
                        </div>
                    </div>

                    <div className="d-flex msp-60 mep-60 mbp-0 mtp-0">

                        <div className="row m-0 psp-60 pep-60 ptp-10 pbp-0 w-100">

                            <div className="col-sm-12 col-md-12 position-relative pbp-20">
                                <div className="position-absolute top-0 start-100 translate-middle  mtp-50 "><img src={"images/page_" + pagina + "/img_003.png"} className=" " alt="" />
                                </div>
                                <div className="position-absolute top-100 start-100 translate-middle  mtp--100 msp-40 "><img src={"images/page_" + pagina + "/img_004.png"} className=" " alt="" />
                                </div>
                                <div className="position-absolute top-100 start-0 translate-middle  mtp--90 msp--40 "><img src={"images/page_" + pagina + "/img_005.png"} className=" " alt="" />
                                </div>
                                <div className="d-flex flex-column psp-20 pep-20 ptp-0 pbp-10  border-style-solid border-3 border-color-goku bgc-azuka w-100 rounded-p-20">


                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-500" />

                                </div>

                            </div>

                        </div>
                    </div>


                    <div className="ptp-30 container-titulo-global mbp-20">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>Creo e informo</div> */}
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>5</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Revisamos nuestras tareas grupales. Marcamos con<img src="images/page_033/img_003.svg" className="hp-20 psp-5 pep-5 mtp--5" alt="" /> las tareas que
                                hemos realizado y con<img src="images/page_033/img_004.svg" className="hp-20 psp-5 pep-5 mtp--5" alt="" /> las que nos faltan.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.jpg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="d-flex psp-60 pep-60 pbp-100">

                        <div className="row w-100 p-0 m-0">

                            <div className="col-sm-12 col-md-12 position-relative d-flex justify-content-center">

                                <div className="position-absolute top-0 start-100 translate-middle msp--100 mtp-0"><img src={"images/page_" + pagina + "/clip.png"} className="wp-30 " alt="" /></div>
                                <div className="d-flex">

                                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-L fsp-18 box-shadow-simple bgc-lizt">

                                        <div className="d-flex">
                                            <div className="ptp-0">
                                                <div className="border-style-solid border-2 border-color-lightDark  bgc-white">
                                                    <InputBox
                                                        id={"p" + pagina + "_input" + (indexInput += 1)}
                                                        className="p-0 px-0 text-center wp-30 hp-30 lhp-30 min-hp-30"
                                                    />
                                                </div>
                                            </div>
                                            <div className="psp-10 ptp-0 f-Ubuntu-L fsp-16 text-start">Entregamos nuestras propuestas para realizar las entrevistas.</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="ptp-10">
                                                <div className="border-style-solid border-2 border-color-lightDark  bgc-white">
                                                    <InputBox
                                                        id={"p" + pagina + "_input" + (indexInput += 1)}
                                                        className="p-0 px-0 text-center wp-30 hp-30 lhp-30 min-hp-30"
                                                    />
                                                </div>
                                            </div>
                                            <div className="psp-10 ptp-10 f-Ubuntu-L fsp-16 text-start">Preparamos las entrevistas creando preguntas.</div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="ptp-10">
                                                <div className="border-style-solid border-2 border-color-lightDark  bgc-white">
                                                    <InputBox
                                                        id={"p" + pagina + "_input" + (indexInput += 1)}
                                                        className="p-0 px-0 text-center wp-30 hp-30 lhp-30 min-hp-30"
                                                    />
                                                </div>
                                            </div>
                                            <div className="psp-10 ptp-10 f-Ubuntu-L fsp-16 text-start">Elaboramos el guion de las entrevistas que realizaremos.</div>
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
                        <div className="col-7 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
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

export default Page033;
