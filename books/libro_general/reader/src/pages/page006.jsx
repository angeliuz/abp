import React from "react";
import { useEffect, useState, useRef } from "react";
import Seleccion from '../components/Seleccion';


import "./page_006.css";


function Page006() {

    const pagina = "006";
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
                                Selección
                            </div>

                        </div>
                    </div>

                    <div className="d-flex psp-0 pep-0 pbp-70">

                        <div className="row w-100 p-0 m-0">

                            <div className="col-md-12 col-lg-12 position-relative">

                                <div className="position-absolute top-100 start-0 translate-middle visible-768 zindex-1 msp-100 mtp--90"><img src={"images/page_" + pagina + "/personaje.png"} className="w-100" alt="" /></div>

                                <div className="mbp-20 mtp-10 msp-20 mep-20">

                                    <Seleccion
                                        id={"seleccion_" + pagina + "_" + (indexInput += 1)}
                                        image={"images/page_" + pagina + "/encierra.svg"}
                                        classNameContenedor="position-relative text-center bgc-urien rounded-p-10 f-Ubuntu-L fsp-15 pep-10 psp-10 wp-200 hp-50 d-flex center-center"
                                        classNameImagen="position-absolute top-50 start-50 translate-middle msp-0 mtp-0 visible-768 zindex-1 wp-200 hp-200"
                                        texto="Organizar una fiesta sobre diversidad cultural."
                                    />
                                    <Seleccion
                                        id={"seleccion_" + pagina + "_" + (indexInput += 1)}
                                        image={"images/page_" + pagina + "/encierra.svg"}
                                        classNameContenedor="position-relative text-center bgc-urien rounded-p-10 f-Ubuntu-L fsp-15 pep-10 psp-10 wp-200 hp-50 d-flex center-center"
                                        classNameImagen="position-absolute top-50 start-50 translate-middle msp-0 mtp-0 visible-768 zindex-1 wp-200 hp-200"
                                        texto="Organizar una fiesta sobre diversidad cultural."
                                    />


                                </div>

                            </div>

                        </div>

                    </div>




                </div>
            </div>
        </div>

    );
}

export default Page006;