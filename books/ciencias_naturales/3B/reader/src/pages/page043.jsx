import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import "./page_043.css";

function Page043(props) {

    const pagina = "043";
    var indexInput = 0;
    const etapa = "4"
    const background = "bgc-pidgey";
    const color = "color-pidgey";
    const borderColor = "border-color-pidgey"
    const borderColorTabla = "border-color-pantro"
    const bgc_cajas = "bgc-pantro";


    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
                    <img src={"images/cabecera/dosier_e" + etapa + ".svg"} className="w-100" alt="" />
                    <div className="position-relative w-100 mbp-10">
                        <div className="psp-80 pep-70 ptp-30 pbp-0 position-relative">
                            <div className="fsp-16 f-Ubuntu-R text-start psp-50 pbp-10">Esta página ha sido completada por:</div>
                            <div className={"psp-50 pep-50 ptp-5 pbp-5 bgc-white rounded-p-10 border-style-solid border-1 " + borderColor + " d-flex justify-content-center position-relative"}>
                                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-0 mtp--10"><img src={"images/page_" + pagina + "/mundo.png"} className="w-80" alt="" /></div>
                                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--10"><img src={"images/page_" + pagina + "/recicla.png"} className="wp-60" alt="" /></div>
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                            </div>
                        </div>
                    </div>

                    <div className="d-flex global-margin mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">
                                <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp--50 visible-768 zindex-1"><img src={"images/page_" + pagina + "/profe.png"} className="wp-60" alt="" /></div>
                                <div className="d-flex  mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                                    <div className="row p-0 m-0 w-100">
                                        <div className="col-12 p-0 m-0 position-relative ">
                                            <div className="border-style-solid border-2 border-color-pidgey rounded-p-10">
                                                <div className="d-flex flex-column bgc-white rounded-p-10 f-Ubuntu-R fsp-15 text-start">
                                                    <div className="psp-10 pep-20 ptp-10">
                                                        Nuestra tarea fue...
                                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-150" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex global-margin mtp-20 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">
                                <div className="position-absolute top-100 start-0 translate-middle msp--10 mtp--30 visible-768 zindex-1"><img src={"images/page_" + pagina + "/buzon.png"} className="wp-40" alt="" /></div>
                                <div className="d-flex  mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                                    <div className="row p-0 m-0 w-100">
                                        <div className="col-12 p-0 m-0 position-relative ">
                                            <div className="border-style-solid border-2 border-color-pidgey rounded-p-10">
                                                <div className="d-flex flex-column bgc-white rounded-p-10 f-Ubuntu-R fsp-15 text-start">
                                                    <div className="psp-10 pep-10 ptp-10">
                                                        La aplicación de la encuesta nos sirvió para...
                                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-150" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex global-margin mtp-20 mbp-100 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">
                                <div className="position-absolute top-100 start-0 translate-middle msp-50 mtp-40 visible-768 zindex-1"><img src={"images/page_" + pagina + "/bicicleta.png"} className="wp-120" alt="" /></div>
                                <div className="position-absolute top-0 start-100 translate-middle msp--40 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/tablet.png"} className="wp-80" alt="" /></div>
                                <div className="d-flex mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                                    <div className="row p-0 m-0 w-100">
                                        <div className="col-12 p-0 m-0 position-relative ">
                                            <div className="border-style-solid border-2 border-color-pidgey rounded-p-10">
                                                <div className="d-flex flex-column bgc-white rounded-p-10 f-Ubuntu-R fsp-15 text-start">
                                                    <div className="psp-10 pep-10 ptp-10">
                                                        Comunicamos los resultados en...
                                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-150" />
                                                    </div>
                                                    <div className="psp-10 pep-10 ptp-10">
                                                        para...
                                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-120" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* BEIGN PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
                        <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    {/* END PIE DE PAGINA */}
                </div>
            </div>
        </div>


    );
}

export default Page043;
