import React from "react";
import { useState } from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Crucigrama from "../components/Crucigrama";
import Check from "../components/Check";

import "./page_029.css";

function Page029(props) {

    const pagina = "029";
    var indexInput = 0;
    const etapa = "3"
    const background = "bgc-android18";
    const color = "color-android18";
    const borderColor = "border-color-android18"
    const borderColorTabla = "border-color-azuka"
    const bgc_cajas = "bgc-azuka";


    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

                    {/* BEGIN CABECERA VERSIÓN 1 */}
                    <div className={"cabecera-v1 hp-80 " + background}></div>
                    {/* END CABECERA VERSIÓN 1 */}


                    <div className="container-titulo-global mtp-20 mbp-0">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            xxx
                        </div> */}
                        <div className="d-flex psp-20">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                3
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Leo los consejos de la revista y resuelvo el crucigrama.
                            </div>
                            {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} pagina={"80"} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
                        </div>
                    </div>



                    <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">


                                <div className="d-flex w-100 hp-350 ">
                                    {/* <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-540" alt="" /></div> */}
                                    {/* BLOQUE 1 */}
                                    <div className="position-absolute top-50 start-50 translate-middle msp-76 mtp--23" id={"1"} style={{ zIndex: 1 }}>
                                        <div className="d-flex center-center psp-0 pep-0 ptp-0 pbp-0 zindex-2 border-style-solid border-color-transparent border-2">
                                            <Crucigrama id={"crucigrama" + pagina + "_" + (indexInput += 1)} numero_cajas="8" columns={"flex-column"} rotuloColor="bgc-android18" grupo="1" numeroDeGrupos="5"></Crucigrama>
                                        </div>
                                    </div>
                                    {/* BLOQUE 2 */}
                                    <div className="position-absolute top-50 start-50 translate-middle msp--194 mtp-5" id={"2"} style={{ zIndex: 1 }}>
                                        <div className="d-flex center-center psp-0 pep-0 ptp-0 pbp-0 zindex-2 border-style-solid border-color-transparent border-1">
                                            <Crucigrama id={"crucigrama" + pagina + "_" + (indexInput += 1)} numero_cajas="8" columns={"flex-column"} rotuloColor="bgc-android18" grupo="2" numeroDeGrupos="5"></Crucigrama>
                                        </div>
                                    </div>
                                    {/* BLOQUE 3 */}
                                    <div className="position-absolute top-50 start-50 translate-middle msp--209 mtp--50" id={"3"} style={{ zIndex: 1 }}>
                                        <div className="d-flex center-center psp-0 pep-0 ptp-0 pbp-0 zindex-2 border-style-solid border-color-transparent border-1">
                                            <Crucigrama id={"crucigrama" + pagina + "_" + (indexInput += 1)} numero_cajas="3" columns={"flex-row"} rotuloColor="bgc-android18" grupo="3" numeroDeGrupos="5"></Crucigrama>
                                        </div>
                                    </div>
                                    {/* BLOQUE 4 */}
                                    <div className="position-absolute top-50 start-50 translate-middle msp-136 mtp-62" id={"4"} style={{ zIndex: 1 }}>
                                        <div className="d-flex center-center psp-0 pep-0 ptp-0 pbp-0 zindex-2 border-style-solid border-color-transparent border-2">
                                            <Crucigrama id={"crucigrama" + pagina + "_" + (indexInput += 1)} numero_cajas="6" columns={"flex-row"} rotuloColor="bgc-android18" grupo="4" numeroDeGrupos="5"></Crucigrama>
                                        </div>
                                    </div>
                                    {/* BLOQUE 5 */}
                                    <div className="position-absolute top-50 start-50 translate-middle msp--74 mtp-90" id={"5"} style={{ zIndex: 1 }}>
                                        <div className="d-flex center-center psp-0 pep-0 ptp-0 pbp-0 zindex-2 border-style-solid border-color-transparent border-2">
                                            <Crucigrama id={"crucigrama" + pagina + "_" + (indexInput += 1)} numero_cajas="10" columns={"flex-row"} rotuloColor="bgc-android18" grupo="5" numeroDeGrupos="5"></Crucigrama>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>


                    <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">

                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>

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

export default Page029;
