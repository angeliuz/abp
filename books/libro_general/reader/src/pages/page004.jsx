import React from "react";
import { useEffect, useState, useRef } from "react";


import TerminosPareados1 from "../components/TerminosPareados1";



// import LineTo from 'react-lineto';


import "./page_004.css";


function Page004() {

    const pagina = "003";
    var indexInput = 0;
    const etapa = "1"
    const background = "bgc-goten";
    const color = "color-goten";
    const borderColor = "border-color-goten"
    const borderColorTabla = "border-color-genos"
    const bgc_cajas = "bgc-genos";


    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    <div className={"cabecera-v2 d-flex flex-column " + background}>
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base " + color}>SESIÓN 3</div>
                            <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Este es nuestro plan!</div>
                        </div>

                    </div>
                    {/* END CABECERA VERSIÓN 2 */}

                    <div className="container-titulo-global mtp-20 mbp-40">
                        <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            xxx
                        </div>
                        <div className="d-flex psp-20">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                X
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Términos pareados
                            </div>

                        </div>
                    </div>






                    <div className="d-flex position-relative">

                        <div className="d-flex w-100 mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0 position-absolute zindex-10">
                            <div className="row p-0 m-0 w-100">
                                <div className="col-12 p-0 m-0 position-relative">


                                    <TerminosPareados1
                                        id={"svg_" + indexInput + "_" + pagina}
                                        anchoSVG="550"
                                        altoSVG="580"
                                        totalLineas="4"
                                        pointsLinea1="240,50 240,50"
                                        pointsLinea2="240,195 240,195"
                                        pointsLinea3="240,350 240,350"
                                        pointsLinea4="240,493 240,493"
                                    />


                                </div>
                            </div>
                        </div>

                        <div className="d-flex w-100 justify-content-center">




                        </div>

                    </div>




                </div>
            </div>
        </div>

    );
}

export default Page004;