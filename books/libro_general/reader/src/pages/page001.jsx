import React from "react";
import { useState } from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Crucigrama from "../components/Crucigrama";
import CheckMultiple from "../components/CheckMultiple";

import "./page_001.css";

function Page001() {

    const pagina = "001";
    var indexInput = 0;
    const etapa = "1"
    const background = "bgc-goten";
    const color = "color-goten";
    const borderColor = "border-color-goten"
    const borderColorTabla = "border-color-genos"
    const bgc_cajas = "bgc-genos";


    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-10">
                <div className="page position-relative bgc-white" id={"page_" + pagina}>
                    {/* BEGIN CABECERA VERSIÓN 1 */}
                    <div className={"cabecera-v1 hp-80 " + background}></div>
                    {/* END CABECERA VERSIÓN 1 */}
                    <div className="container-titulo-global mtp-20 mbp-0">
                        <div className="d-flex psp-20">
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                1
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Checks
                            </div>
                        </div>
                    </div>
                    <div className="d-flex global-margin mtp-0 mbp-0 psp-90 pep-90 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-3 p-0 m-0 position-relative d-flex center-center">
                                <CheckMultiple
                                    id={"check_p" + pagina + "_" + (indexInput += 1)}
                                    image0={"images/generales/check_vacio.svg"}
                                    image1={"images/generales/check_azul.svg"}
                                    image2={"images/generales/check_rojo.svg"}
                                    classContainer="wp-30 hp-30 bgc-white border-style-solid border-2 border-color-dark bgc-white rounded-circle disable-select d-flex center-center p-1 "
                                />
                            </div>
                            <div className="col-3 p-0 m-0 position-relative d-flex center-center">
                                <CheckMultiple
                                    id={"check_p" + pagina + "_" + (indexInput += 1)}
                                    image0={"images/generales/check_vacio.svg"}
                                    image1={"images/generales/ticket.svg"}
                                    image2={"images/generales/cruz.svg"}
                                    classContainer="wp-30 hp-30 bgc-white border-style-solid border-2 border-color-dark bgc-white rounded-circle disable-select d-flex center-center p-1"
                                />
                            </div>
                            <div className="col-3 p-0 m-0 position-relative d-flex center-center">
                                <CheckMultiple
                                    id={"check_p" + pagina + "_" + (indexInput += 1)}
                                    image0={"images/generales/check_vacio.svg"}
                                    image1={"images/generales/check_azul.svg"}
                                    image2={"images/generales/check_rojo.svg"}
                                    classContainer="wp-30 hp-30 bgc-white border-style-solid border-2 border-color-dark bgc-white rounded-1 disable-select d-flex center-center p-1"
                                />
                            </div>
                            <div className="col-3 p-0 m-0 position-relative d-flex center-center">
                                <CheckMultiple
                                    id={"check_p" + pagina + "_" + (indexInput += 1)}
                                    image0={"images/generales/check_vacio.svg"}
                                    image1={"images/generales/ticket.svg"}
                                    image2={"images/generales/cruz.svg"}
                                    classContainer="wp-30 hp-30 bgc-white border-style-solid border-2 border-color-dark bgc-white rounded-1 disable-select d-flex center-center p-1"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Page001;