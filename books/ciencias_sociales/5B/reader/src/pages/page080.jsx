import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import "./page_080.css";

function Page080(props) {

    const pagina = "080";
    var indexInput = 0;

    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="cb-page80 page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    <div className="cabecera-v1 hp-80 bgc-pikachu">
                    </div>

                    <div className="d-flex msp-60 ptp-20 mep-60 mbp-0">

                        <div className="row m-0 p-2 w-100 ">
                            <div className="col-md-12 col-lg-12 position-relative text-start f-Ubuntu-R fsp-15">
                                <div className="f-Ubuntu-R fsp-15 lh-sm text-start mbp-5">Si volviéramos a trabajar juntos en otro proyecto…</div>
                            </div>
                            <div className="col-md-12 col-lg-12 position-relative">
                                <div className="position-absolute top-0 start-100 translate-middle msp--20 mtp-15 visible-768"><img src="images/page_080/img_001.png" className="wp-60 " alt="" /></div>
                                <div className="position-absolute top-100 start-0 translate-middle msp-20 mtp--20 visible-768"><img src="images/page_080/img_002.png" className="wp-60 " alt="" /></div>

                                <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-dark border-2 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                                    <div className="d-flex interior-caja-v1 bgc-primary text-start min-hp-30">
                                        <div className="text-center f-Ubuntu-B color-white">…intentaremos mantener</div>
                                    </div>
                                    <div className="d-flex flex-column position-relative w-100">

                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-210" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 col-lg-12 position-relative">
                                <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-15 visible-768"><img src="images/page_080/img_003.png" className="wp-60 " alt="" /></div>
                                <div className="position-absolute top-100 start-0 translate-middle msp-20 mtp--20 visible-768"><img src="images/page_080/img_004.png" className="wp-60 " alt="" /></div>

                                <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-dark border-2 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                                    <div className="d-flex interior-caja-v1 bgc-bulma text-start min-hp-30">
                                        <div className="text-center f-Ubuntu-B color-white">…intentaremos mejorar</div>
                                    </div>
                                    <div className="d-flex flex-column position-relative w-100">

                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-210" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 position-relative pbp-0">
                                <img src="images/page_080/img_005.svg" className="w-100 " alt="" />
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

export default Page080;
