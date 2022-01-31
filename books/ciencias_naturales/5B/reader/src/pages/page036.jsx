import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_036.css";

function Page036(props) {

    const pagina = "036";
    var indexInput = 0;
    const etapa = "3"
    const background = "bgc-android18";
    const color = "color-android18";
    const colorSesion = "color-primary";
    const borderColor = "border-color-android18"
    const bgc_cajas = "bgc-azuka";


    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>




                    <div className="d-flex msp-60 mep-60 mbp-0 mtp-90">
                        <div className="row w-100 p-0 m-0">

                            <div className="col-sm-12 col-md-6 position-relative">

                                <div className="bgc-white rounded-p-10 border-style-solid border-color-raichu border-5 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                                    <div className="d-flex flex-column position-relative w-100 text-start ">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-400" />
                                    </div>
                                </div>

                            </div>
                            <div className="col-sm-12 col-md-6 position-relative">

                                <div className="position-relative">

                                    <div className="position-absolute top-0 start-50 translate-middle w-100 msp-0 mtp-0 lhp-17 d-flex center-center">
                                        <div className="bgc-pantro rounded-p-10 w-70 psp-10 pep-10 ptp-10 pbp-10">
                                            <span className="color-dark f-Ubuntu-M fsp-15">Xx xxxxx xxxx xxxx xxx xxxx.</span>
                                        </div>
                                    </div>

                                    <div className="bgc-white rounded-p-10 border-style-solid border-color-pantro border-5 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                                        <div className="d-flex flex-column position-relative w-100 text-start mtp-10">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>

                    </div>

                    <div className="d-flex flex-column  mbp-100 mtp-0">



                        <div className="d-flex flex-column global-margin mtp-0 mbp-20 psp-0 pep-0 ptp-0 pbp-0 position-relative">
                            <div className="position-absolute top-0 start-100 translate-middle msp--100 mtp-5 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-180" alt="" /></div>
                            <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-10">¿Cómo voy?</div>
                            <div className="d-flex flex-column bgc-white rounded-p-10 psp-10 pep-10 ptp-10 pbp-10 mtp-0 mbp-0">
                                <div className="row p-0 m-0 w-100">
                                    <div className="col-12 p-0 m-0">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex align-items-start">
                                                <div className="mtp-0 pep-5">
                                                    <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                                                </div>
                                                <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">  Lo que más nos ha costado del trabajo en equipo es...</div>
                                            </div>
                                            <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 p-0 m-0">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex align-items-start">
                                                <div className="mtp-0 pep-5">
                                                    <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                                                </div>
                                                <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">  Lo podemos mejorar...</div>
                                            </div>
                                            <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                                            </div>
                                        </div>
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

                </div>
            </div>
        </div>

    );
}

export default Page036;
