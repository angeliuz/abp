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
    const colorSesion = "color-saitama";

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    <div className={"cabecera-v2 " + background + " d-flex flex-column"}>
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className={"caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 fsp-24 f-IntroRustG-Base  " + colorSesion}>SESIÓN 14</div>
                            <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Manos a la obra!</div>
                        </div>
                        {/* <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Mis objetivos <br />en  esta sesión son:
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Identificar conceptos e ideas <br />clave de la revista.
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global rotate-90" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Establecer la principal<br /> conclusión de la revista.
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="p-3 align-self-center f-colby-compres-bold fsp-15 lh-sm text-center text-white">
                                Elaborar el editorial <br />de la revista.
                            </div>

                        </div> */}
                    </div>
                    {/* END CABECERA VERSIÓN 2 */}
                    <div className="ptp-10 container-titulo-global mbp-20">
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_057/i_g.svg" alt="" /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Realizamos una lista de tareas para completar el álbum.</div>
                            
                        </div>
                    </div>






                    <div className="positon-relative ">
                        <div className="bgc-tatooine rounded-p-20 mtp-0 msp-60 mep-60 mbp-0 ptp-10 psp-10 f-Ubuntu-R fw-700  position-relative">

                            <div className="d-flex mbp-0 psp-20 pep-20 position-relative">
                                <div className="position-absolute top-50 end-0 translate-middle-y   visible-768 msp-80 mtp--0 "><img src="images/page_061/img_005.png" className="wp-30 " alt="" /></div>

                                <div className="row w-100 ">

                                    <div className="col-sm-8 col-md-10 text-start color-saitama m-0 p-0">
                                        Tareas:
                                    </div>
                                    <div className="col-sm-4 col-md-2 color-saitama m-0 p-0 ">
                                        ¿Se completó?
                                    </div>

                                    <div className="col-sm-9 col-md-10 d-flex justify-content-center pbp-10 ptp-10">
                                        <div className="d-flex flex-column w-100 ptp-0 pbp-10 psp-20 pep-20 bgc-white rounded-p-20 position-relative">
                                            <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0">
                                                <div className="wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-saitama border-style-solid border-color-saitama bgc-bobafett f-Ubuntu-B">
                                                    1
                                                </div>
                                            </div>
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75 f-Ubuntu-L" />
                                        </div>
                                    </div>

                                    <div className="col-sm-3 col-md-2 d-flex center-center position-relative pbp-10">
                                        <div className="wp-30 hp-30 ">
                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 col-md-10 d-flex justify-content-center pbp-10 ptp-10">
                                        <div className="d-flex flex-column w-100 ptp-0 pbp-10 psp-20 pep-20 bgc-white rounded-p-20 position-relative">
                                            <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0">
                                                <div className="wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-saitama border-style-solid border-color-saitama bgc-bobafett f-Ubuntu-B">
                                                    2
                                                </div>
                                            </div>
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75 f-Ubuntu-L" />
                                        </div>
                                    </div>

                                    <div className="col-sm-3 col-md-2 d-flex center-center position-relative pbp-10">
                                    <div className="wp-30 hp-30 ">
                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 col-md-10 d-flex justify-content-center pbp-10 ptp-10">
                                        <div className="d-flex flex-column w-100 ptp-0 pbp-10 psp-20 pep-20 bgc-white rounded-p-20 position-relative">
                                            <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0">
                                                <div className="wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-saitama border-style-solid border-color-saitama bgc-bobafett f-Ubuntu-B">
                                                    3
                                                </div>
                                            </div>
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75 f-Ubuntu-L" />
                                        </div>
                                    </div>

                                    <div className="col-sm-3 col-md-2 d-flex center-center position-relative pbp-10">
                                    <div className="wp-30 hp-30 ">
                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                    </div>
                                    <div className="col-sm-9 col-md-10 d-flex justify-content-center pbp-10 ptp-10">
                                        <div className="d-flex flex-column w-100 ptp-0 pbp-10 psp-20 pep-20 bgc-white rounded-p-20 position-relative">
                                            <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0">
                                                <div className="wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-saitama border-style-solid border-color-saitama bgc-bobafett f-Ubuntu-B">
                                                    4
                                                </div>
                                            </div>
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75 f-Ubuntu-L" />
                                        </div>
                                    </div>

                                    <div className="col-sm-3 col-md-2 d-flex center-center position-relative pbp-10">
                                    <div className="wp-30 hp-30 ">
                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>





                    <div className="ptp-10 container-titulo-global mbp-20">
                        <div className="d-flex">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_061/img_004.svg" alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Llevamos a cabo la elaboración del álbum. Tomo notas del proceso y registro los avances del equipo.
                            </div>
                            {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_061/img_001.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="msp-80 mep-60 position-relative  ">
                        <div className="position-absolute top-0 start-100 translate-middle   zindex-4 visible-768 msp--10 mtp--70 "><img src="images/page_061/img_006.png" className="wp-90 " alt="" /></div>
                        <div className="position-absolute top-100 start-0 translate-middle   zindex-10 visible-768 msp--10 mtp--30 "><img src="images/page_061/img_007.png" className="wp-50 " alt="" /></div>
                        <div className="row w-100 mb-10   ">
                            <div className="cb-ep-paper-61 ">
                                <div className="cb-ep-paper-content-61 f-Ubuntu-L text-start">
                                    <div className="mtp-5 ">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



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
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className="col-7 col-sm-2 p-0 m-0 position-relative">
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
