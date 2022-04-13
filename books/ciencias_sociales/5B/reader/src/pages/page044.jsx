import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import "./page_044.css";

function Page044(props) {

    const pagina = "044";
    var indexInput = 0;

    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="cb-page44 page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    <div className="cabecera-v1 hp-80 bgc-android18">
                    </div>

                    <div className="d-flex msp-60 ptp-20 mep-60 mbp-20">

                        <div className="row m-0 p-2 w-100 ">
                            <div className="col-md-12 col-lg-12 position-relative text-start f-Ubuntu-R fsp-15">
                                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo vamos?</div>
                            </div>
                            <div className="col-md-12 col-lg-12 position-relative">
                                <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-20 visible-768"><img src="images/page_044/img_001.png" className="wp-80 " alt="" /></div>
                                <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0 visible-768"><img src="images/page_044/img_006.png" className="wp-20 " alt="" /></div>

                                <div className="d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-2 rounded-p-10 border-color-dark bgc-white">
                                    <div className="p-2 w-100 d-flex flex-column">
                                        <div className="f-Ubuntu-L fsp-16  text-start w-100">Cosas que hemos hecho que nos han encantado:</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-210" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 col-lg-12 position-relative">
                                <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-20 visible-768"><img src="images/page_044/img_002.png" className="wp-70 " alt="" /></div>

                                <div className="d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-2 rounded-p-10 border-color-dark bgc-white">
                                    <div className="p-2 w-100 d-flex flex-column">
                                        <div className="f-Ubuntu-L fsp-16  text-start w-100">Podemos mejorar en...</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-210" />
                                    </div>
                                </div>
                            </div>
                            <div className=" col-sm-12 col-md-6 position-relative d-flex flex-row bd-highlight mb-3">

                                <div className="position-absolute top-50 start-0 translate-middle msp--5 mtp-20 visible-768"><img src="images/page_044/img_004.png" className="wp-70 " alt="" /></div>

                                <div className="d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-2 rounded-p-10 border-color-dark bgc-white">
                                    <div className="p-2 w-100 d-flex flex-column">
                                        <div className="f-Ubuntu-L fsp-16  text-start w-100">Nos gustaria saber más sobre...</div>
                                        <div className="pep-20">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-210  " />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" col-sm-12 col-md-6 position-relative d-flex flex-row bd-highlight mb-3">
                                <div className="position-absolute top-100 start-100 translate-middle msp--10 mtp-0 visible-768"><img src="images/page_044/img_005.png" className="wp-170 " alt="" /></div>
                                <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--80 visible-768"><img src="images/page_044/img_003.png" className="wp-100 " alt="" /></div>

                                <div className="d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-2 rounded-p-10 border-color-dark bgc-white">
                                    <div className="p-2 w-100 d-flex flex-column">
                                        <div className="f-Ubuntu-L fsp-16  text-start w-100">Quisiéramos hacer...</div>
                                        <div className="psp-20">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-210" />
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

export default Page044;
