import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";
import "./page_061.css";

function Page061(props) {

    const pagina = "061";
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
                    <div className={"cabecera-v2 " + background + " d-flex flex-column"}>
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className="caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark">SESIÓN 16</div>
                            <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Evaluamos las propuestas</div>
                        </div>
                        <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Mis objetivos <br />en  esta sesión son:
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Probar un aparato<br /> o sistema
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global rotate-90" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Valorar el funcionamiento<br /> del aparato o sistema
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                                Intercambiar <br />apreciaciones
                            </div>

                        </div>
                    </div>
                    {/* END CABECERA VERSIÓN 2 */}

                    <div className="ptp-10 container-titulo-global mbp-0">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            Plan de trabajo
                        </div> */}
                        <div className="d-flex psp-20">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_002.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                1
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Intercambiamos nuestra creación con la propuesta de otro equipo de trabajo.
                                Probamos su funcionamiento y lo valoramos.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>


                    <div className="d-flex global-margin h-100  mtp-0 mbp-0 psp-60 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 msp-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">

                                <div className="d-flex w-100 p-2">
                                    <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-saitama fsp-17  fw-700 pbp-5">a.</div>
                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Evalúamos el aparato o sistema de nuestros compañeros usando la escala de
                                        puntuación, donde 1 indica que no cumple y 5 indica que cumple completamente.</div>
                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="positon-relative mbp-80 ">
                        <div className="bgc-draco rounded-p-10 mtp-0 msp-60 mep-60 mbp-10 ptp-5 pbp-10 psp-0 f-Ubuntu-R fw-700 position-relative">
                            {/* <div className="position-absolute top-50 start-100 translate-middle visible-768 msp-15 mtp--60 "><img src="images/page_061/img_003.png" className="wp-60 " alt="" /></div> */}
                            <div className="position-absolute top-50 start-100 translate-middle visible-768 msp-15 mtp--60"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div>
                            <div className="d-flex mbp-0 psp-0 pep-0 position-relative p-1">
                                {/* <div className="position-absolute top-50 end-0 translate-middle-y visible-768 msp-80 mtp--0 "><img src="images/page_061/img_005.png" className="wp-30 " alt="" /></div> */}
                                <div className="row h-100 w-100 m-0 p-0 ">
                                    <div className="col-sm-11 col-md-11 d-flex justify-content-center p-0 mbp-10">
                                        <div className="d-flex center-center h-100 m-1 wp-240   rounded-p-10 hp-30 f-Ubuntu-R fsp-16 p-1 bgc-calypso1 color-white">FUNCIONAMIENTO</div>
                                        <div className="d-flex align-items-center h-100 m-1 w-100  rounded-p-10 hp-30 f-Ubuntu-L fsp-16 p-1 text-start bgc-white psp-5 ">Presenta un sistema sencillo y cómodo de manejar.</div>
                                    </div>

                                    <div className="col-sm-1 col-md-1 d-flex align-items-center justify-content-center position-relative  wp-50 p-0 m-0 ">
                                        <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mbp-0 psp-0 pep-0 position-relative p-1">
                                {/* <div className="position-absolute top-50 end-0 translate-middle-y   visible-768 msp-80 mtp--0 "><img src="images/page_061/img_005.png" className="wp-30 " alt="" /></div> */}
                                <div className="row h-100 w-100 m-0 p-0 ">
                                    <div className="col-sm-11 col-md-11 d-flex justify-content-center p-0 mbp-10">
                                        <div className="d-flex center-center h-100 m-1 wp-240   rounded-p-10 hp-30 f-Ubuntu-R fsp-16 p-1 bgc-calypso2 color-white">OPERATIVIDAD</div>
                                        <div className="d-flex align-items-center h-100 m-1 w-100  rounded-p-10 hp-30 f-Ubuntu-L fsp-16 p-1 text-start bgc-white psp-5 ">Aprovecha eficientemente la energía renovable.</div>
                                    </div>

                                    <div className="col-sm-1 col-md-1 d-flex align-items-center justify-content-center position-relative  wp-50 p-0 m-0 ">
                                        <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mbp-0 psp-0 pep-0 position-relative p-1">
                                {/* <div className="position-absolute top-50 end-0 translate-middle-y   visible-768 msp-80 mtp--0 "><img src="images/page_061/img_005.png" className="wp-30 " alt="" /></div> */}
                                <div className="row h-100 w-100 m-0 p-0 ">
                                    <div className="col-sm-11 col-md-11 d-flex justify-content-center p-0 mbp-10">
                                        <div className="d-flex center-center h-100 m-1 wp-240   rounded-p-10 hp-30 f-Ubuntu-R fsp-16 p-1 bgc-calypso3 color-white">SEGURIDAD</div>
                                        <div className="d-flex align-items-center h-100 m-1 w-100  rounded-p-10 hp-30 f-Ubuntu-L fsp-16 p-1 text-start bgc-white psp-5 ">No presenta riesgos ni peligrosidad para los usuarios.</div>
                                    </div>

                                    <div className="col-sm-1 col-md-1 d-flex align-items-center justify-content-center position-relative  wp-50 p-0 m-0 ">
                                        <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mbp-0 psp-0 pep-0 position-relative p-1">
                                {/* <div className="position-absolute top-50 end-0 translate-middle-y   visible-768 msp-80 mtp--0 "><img src="images/page_061/img_005.png" className="wp-30 " alt="" /></div> */}
                                <div className="row h-100 w-100 m-0 p-0 ">
                                    <div className="col-sm-11 col-md-11 d-flex justify-content-center p-0 mbp-10">
                                        <div className="d-flex center-center h-100 m-1 wp-240   rounded-p-10 hp-30 f-Ubuntu-R fsp-16 p-1 bgc-calypso4 color-white">PROPÓSITO</div>
                                        <div className="d-flex align-items-center h-100 m-1 w-100  rounded-p-10 hp-30 f-Ubuntu-L fsp-16 p-1 text-start bgc-white psp-5 ">Cumple su objetivo y mejora la vida de las personas.</div>
                                    </div>

                                    <div className="col-sm-1 col-md-1 d-flex align-items-center justify-content-center position-relative  wp-50 p-0 m-0 ">
                                        <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mbp-0 psp-0 pep-0 position-relative p-1">
                                {/* <div className="position-absolute top-50 end-0 translate-middle-y   visible-768 msp-80 mtp--0 "><img src="images/page_061/img_005.png" className="wp-30 " alt="" /></div> */}
                                <div className="row h-100 w-100 m-0 p-0 ">
                                    <div className="col-sm-11 col-md-11 d-flex justify-content-center p-0 mbp-10">
                                        <div className="d-flex center-center h-100 m-1 wp-240   rounded-p-10 hp-30 f-Ubuntu-R fsp-16 p-1 bgc-calypso5 color-white">SOSTENIBILIDAD</div>
                                        <div className="d-flex align-items-center h-100 m-1 w-100  rounded-p-10 hp-30 f-Ubuntu-L fsp-16 p-1 text-start bgc-white psp-5 ">Es respetuoso con el medioambiente.</div>
                                    </div>

                                    <div className="col-sm-1 col-md-1 d-flex align-items-center justify-content-center position-relative  wp-50 p-0 m-0 ">
                                        <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mbp-0 psp-0 pep-0 position-relative p-1 ptp-10">
                                {/* <div className="position-absolute top-50 end-0 translate-middle-y   visible-768 msp-80 mtp--0 "><img src="images/page_061/img_005.png" className="wp-30 " alt="" /></div> */}
                                <div className="row h-100 w-100 m-0 p-0 ">
                                    <div className="col-sm-11 col-md-11 d-flex justify-content-center p-0 mbp-10">
                                        <div className="d-flex center-center h-100 m-1 wp-240   rounded-p-10 hp-30 f-Ubuntu-R fsp-16 p-1 bgc-calypso6 color-white">CREATIVIDAD</div>
                                        <div className="d-flex align-items-center h-100 m-1 w-100  rounded-p-10 hp-60 f-Ubuntu-L fsp-16 p-1 text-start bgc-white psp-5 ">Es una propuesta innovadora.</div>
                                    </div>

                                    <div className="col-sm-1 col-md-1 d-flex align-items-center justify-content-center position-relative  wp-50 p-0 m-0 ">
                                        <div className="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                        </div>
                                    </div>
                                </div>
                            </div>




                            <div className="col-12  d-flex justify-content-center pbp-10 ptp-30">
                                <div className="d-flex flex-column msp-10 mep-10 w-100 ptp-0 pbp-10 psp-20 pep-20 bgc-white border-style-solid border-2 bolder-color-lightDark rounded-p-10 position-relative">
                                    <div className="position-absolute top-0 start-0 translate-middle     msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-60" alt="" /></div>
                                    <div className="position-absolute top-0 start-100 translate-middle   msp--30 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.svg"} className="wp-30" alt="" /></div>
                                    <div className=" align-items-center w-100 f-Ubuntu-R fsp-16  text-start ptp-10 ">Observaciones:</div>

                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200 f-Ubuntu-L" />
                                </div>
                            </div>


                        </div>
                    </div>









                    {/* <div className="ptp-10 container-titulo-global mbp-30 mtp-30">
                        <div className="d-flex">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_061/img_004.svg" alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Llevamos a cabo la elaboración del álbum. Tomo notas del proceso y registro los avances del equipo.
                            </div>
                            <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_061/img_001.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
                        </div>
                    </div>

                    <div className="msp-80 mep-60 position-relative  ">
                        <div className="position-absolute top-0 start-100 translate-middle   zindex-4 visible-768 msp--10 mtp--60 "><img src="images/page_061/img_006.png" className="wp-80 " alt="" /></div>
                        <div className="position-absolute top-100 start-0 translate-middle   zindex-4 visible-768 msp--30 mtp--20 "><img src="images/page_061/img_007.png" className="wp-50 " alt="" /></div>
                        <div className="row w-100 mb-10   ">
                            <div className="cb-ep-paper-61 ">
                                <div className="cb-ep-paper-content-61 f-Ubuntu-L text-start">
                                    <div className="mtp-5 ">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div> */}



                    {/* PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                            ABP &copy; SM
                        </div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
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
                        <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                            <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-saitama"></div>
                        </div>
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
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

export default Page061;
