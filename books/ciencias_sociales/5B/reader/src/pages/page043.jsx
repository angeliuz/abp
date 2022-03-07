import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import "./page_043.css";

function Page043(props) {

    const pagina = "043";
    var indexInput = 0;

    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="cb-page43 page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    <img src="images/page_043/cabecera.svg" className="cb-dossier" alt="" />

                    <div className="position-relative w-100 mbp-40">
                        <div className=" psp-80 pep-70 ptp-30 pbp-0 ">
                            <div className="fsp-16 f-Ubuntu-B text-start psp-0 pbp-10"> Esta página ha sido resuelta por</div>
                            <div className="psp-0 ptp-5 pbp-5 bgc-white rounded-p-10 border border-color-lightDark d-flex justify-content-center position-relative">
                                <div className="position-absolute top-50 start-0 translate-middle wp-100 msp-0 mtp-0"><img src="images/page_043/img_002.png" className="w-100" alt="" /></div>
                                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-0 mtp-0"><img src="images/page_043/img_008.png" className="w-50" alt="" /></div>
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 text-start lhp-35 w-80" />
                            </div>

                        </div>

                    </div>

                    <div className="d-flex msp-60 mep-60 mbp-100">

                        <div className="row m-0 p-2 w-100 ">
                            <div className="col-md-12 col-lg-12 position-relative text-start f-Ubuntu-R fsp-15">
                                Pensamos que lo que hemos aprendido nos va a servir en nuestra ruta para...
                            </div>
                            <div className="col-md-12 col-lg-12 position-relative">
                                <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-10 visible-768"><img src="images/page_043/img_003.png" className="wp-80 " alt="" /></div>
                                <div className="position-absolute top-0 start-0 translate-middle msp-0 mtp-70 visible-768"><img src="images/page_043/img_004.png" className="wp-30 " alt="" /></div>

                                <div className="d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-2 rounded-p-10 border-color-dark bgc-white">
                                    <div className="p-2 w-100 d-flex">
                                        <div className="f-Ubuntu-B fsp-18 color-android18 msp-10 mep-10 ptp-10 text-center">1</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-90 min-hp-70" />
                                    </div>
                                    <div className="p-2 w-100 d-flex">
                                        <div className="f-Ubuntu-B fsp-18 color-android18 msp-10 mep-10 ptp-10 text-center">2</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-90 min-hp-70" />
                                    </div>
                                    <div className="p-2 w-100 d-flex">
                                        <div className="f-Ubuntu-B fsp-18 color-android18 msp-10 mep-10 ptp-10 text-center">3</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-90 min-hp-70" />
                                    </div>
                                    <div className="p-2 w-100 d-flex">
                                        <div className="f-Ubuntu-B fsp-18 color-android18 msp-10 mep-10 ptp-10 text-center">4</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-90 min-hp-70" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-12 position-relative text-start f-Ubuntu-R fsp-15">
                                Pensamos que los siguientes conceptos son claves para los siguientes pasos del proyecto.
                            </div>
                            <div className="col-md-12 col-lg-12 position-relative">
                                <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-20 visible-768"><img src="images/page_043/img_005.png" className="wp-70 " alt="" /></div>
                                <div className="position-absolute top-100 start-0 translate-middle msp--5 mtp--90 visible-768"><img src="images/page_043/img_006.png" className="wp-40 " alt="" /></div>
                                <div className="position-absolute top-100 start-50 translate-middle msp-75 mtp-40 visible-768"><img src="images/page_043/img_007.png" className="wp-150 " alt="" /></div>

                                <div className="d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-2 rounded-p-10 border-color-dark bgc-white">
                                    <div className="p-2 w-100 d-flex">
                                        <div className="f-Ubuntu-B fsp-18 color-android18 msp-10 mep-10 ptp-10 text-center">1</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-90 min-hp-70" />
                                    </div>
                                    <div className="p-2 w-100 d-flex">
                                        <div className="f-Ubuntu-B fsp-18 color-android18 msp-10 mep-10 ptp-10 text-center">2</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-90 min-hp-70" />
                                    </div>
                                    <div className="p-2 w-100 d-flex">
                                        <div className="f-Ubuntu-B fsp-18 color-android18 msp-10 mep-10 ptp-10 text-center">3</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-90 min-hp-70" />
                                    </div>
                                    <div className="p-2 w-100 d-flex">
                                        <div className="f-Ubuntu-B fsp-18 color-android18 msp-10 mep-10 ptp-10 text-center">4</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-90 min-hp-70" />
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

export default Page043;
