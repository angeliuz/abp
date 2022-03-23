import React from "react";
import { useState } from "react";


import "./page_002.css";

function Page002() {

    const pagina = "001";
    var indexInput = 0;
    const etapa = "1"
    const background = "bgc-goten";
    const color = "color-goten";
    const borderColor = "border-color-goten"
    const borderColorTabla = "border-color-genos"
    const bgc_cajas = "bgc-genos";

    var indexTitulo = 1;


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
                            {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="d-flex psp-60 pep-60">
                        <div className="row w-100 position-relative">
                            <div className="col-6 col-md-6">
                                <div className="d-flex flex-column pbp-30">
                                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex center-center text-start">
                                        Investigar sobre el destino de los desechos para realizar infografía.
                                        <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-6">
                                <div className="d-flex flex-column justify-content-center ptp-30 pbp-30">
                                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-60 position-relative bgc-quigon rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                                        Creación
                                        <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-6">
                                <div className="d-flex flex-column pbp-30">
                                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex center-center text-start">
                                        Crear modelos de objetos que nos ayudan a reutilizar o reciclar para presentarlos en la feria.
                                        <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-6">
                                <div className="d-flex flex-column justify-content-center ptp-30 pbp-30">
                                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-60 position-relative bgc-woody rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                                        Experimentación
                                        <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-6">
                                <div className="d-flex flex-column pbp-30">
                                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex center-center text-start">
                                        Realizar una encuesta para conocer qué sabe de reciclaje la comunidad escolar.
                                        <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-6">
                                <div className="d-flex flex-column justify-content-center ptp-30 pbp-30">
                                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-60 position-relative bgc-leono rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                                        Difusión
                                        <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-6">
                                <div className="d-flex flex-column pbp-30">
                                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-90 position-relative bgc-draco rounded-p-10 min-hp-100 d-flex center-center text-start">
                                        <span >Presentar a nuestra comunidad la feria <i>Héroes del medioambiente</ i>.</span>
                                        <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-6">
                                <div className="d-flex flex-column justify-content-center ptp-30 pbp-30">
                                    <div className="psp-20 pep-20 ptp-20 pbp-20 f-Ubuntu-R fsp-14 w-60 position-relative bgc-gohan rounded-p-10 min-hp-50 d-flex center-center align-self-end text-center">
                                        Investigación
                                        <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 wp-25 hp-25 bgc-white border-style-solid border-1 border-color-dark rounded-circle"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 pbp-100">
                                <img src="images/page_015/img_004.png" className="hp-200 align-center mtp-40" alt="" />
                            </div>

                            <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div>
                        </div>

                    </div>




                </div>
            </div>
        </div>

    );
}

export default Page002;