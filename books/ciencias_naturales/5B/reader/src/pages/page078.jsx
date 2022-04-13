import React from "react";
import ModalVideo from "../components/ModalVideo";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import "./page_078.css";

function Page078(props) {

    const pagina = "078";
    var indexInput = 0;
    const etapa = "6"
    const background = "bgc-pikachu";
    const color = "color-pikachu";
    const borderColor = "border-color-pikachu"
    const borderColorTabla = "border-color-kokomi"
    const bgc_cajas = "bgc-kokomi";

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>

                    <div className="d-flex global-margin mtp-80 mbp-80 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100 mbp-200 ">
                            <div className="f-Ubuntu-R fsp-16 text-start pbp-30 msp--10">Si volviéramos a trabajar juntos en otro proyecto…</div>
                            <div className="col-12 p-0 m-0 position-relative">

                                <div className="bgc-balrog wp-230 hp-120 p-2 rounded-p-10 msp-100 mtp-40 position-absolute top-0 start-0 translate-middle">
                                    <div className="f-Ubuntu-R fsp-16 fw-700 text-start color-white">…intentaremos mantener </div>
                                </div>

                                <div className="w-100 bgc-white border-style-solid border-1 border-color-dark rounded-p-10 psp-10 pep-10 mtp-20 sobre   ">
                                    <div className="position-absolute top-50 start-100 translate-middle   msp-30 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-60" alt="" /></div>
                                    <div className="position-absolute top-100 start-0 translate-middle    msp--20 mtp--50 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-60" alt="" /></div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-260 overflow-auto" />
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="ptp-10 mtp-200 pbp-260 ">

                        <div className="d-flex global-margin mtp-80 mbp-80 psp-0 pep-0 ptp-0 pbp-0">
                            <div className="row p-0 m-0 w-100  ">
                                <div className="f-Ubuntu-R fsp-16 text-start pbp-30 msp--10"> </div>
                                <div className="col-12 p-0 m-0 position-relative">

                                    <div className="bgc-bulma wp-230 hp-120 p-2 rounded-p-10 msp-100 mtp-40 position-absolute top-0 start-0 translate-middle">
                                        <div className="f-Ubuntu-R fsp-16 fw-700 text-start color-white">…intentaremos mejorar </div>
                                    </div>

                                    <div className="w-100 bgc-white border-style-solid border-1 border-color-dark rounded-p-10 psp-10 pep-10 mtp-20 sobre zindex-1 mbp-20 ">
                                        <div className="position-absolute top-100 start-0 translate-middle    msp--20 mtp--50 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div>
                                        <div className="position-absolute top-50 start-100 translate-middle   msp-30 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-30" alt="" /></div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-290 overflow-auto" />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-15">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative   w-100 h-100  d-flex justify-content-center ">
                                <div className="position-absolute top-0 start-50 translate-middle-x">
                                    <div className="f-pixilate-bold  text-center fsp-14 fw-700 color-white d-flex align-items-center justify-content-center bgc-secondary rounded-circle hp-100 wp-100 position-absolute top-0 start-50 translate-middle-x "> ¡DESAFÍO <br />  CONSEGUIDO! </div>

                                </div>
                                <img src="images/page_078/fondo_000.png" className="w-100 mtp-30" alt="" />

                            </div>
                        </div>
                    </div>

                    {/* <div className="col-12 position-relative pbp-0">
                        <img src="images/page_080/img_005.svg" className="w-100 " alt="" />
                    </div> */}

                    {/* <div className="col-12 position-relative pbp-0 ptp-270">

                        <div className="w-100 d-flex justify-content-center border-style-solid border-2  bgc-yellow  text-center">
                            <div className="position-absolute top-50 start-50 translate-middle  msp-0 mtp-0  zindex-1"><img src={"images/page_" + pagina + "/fondo_002.svg"} className="w-200" alt="" /></div>
                        </div>
                    </div> */}

                    {/* <img src="images/page_078/fondo_002.svg" className="w-80 " alt="" /> */}
                    {/* BEIGN PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    {/* END PIE DE PAGINA */}
                </div>
            </div>
        </div >
    );
}


export default Page078;
