import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_057.css";

function Page057(props) {
    const pagina = "057";
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
                            <div className="fsp-16 f-Ubuntu-R text-start psp-50 pbp-10">Esta página fue completada por:</div>
                            <div className={"psp-50 pep-50 ptp-5 pbp-5 bgc-white rounded-p-10 border-style-solid border-1 " + borderColor + " d-flex justify-content-center position-relative"}>
                                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_002.png"} className="w-40" alt="" /></div>
                                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-80" alt="" /></div>
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                            </div>
                        </div>
                    </div>
                    <div className="max-wp-640 mx-auto position-relative mtp-20">
                        <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-20 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-70" alt="" /></div>
                        <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--50 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-50" alt="" /></div>
                        <div className="text-center w-100 border-1 border-style-solid border-color-dark rounded-p-10 pbp-15 bgc-white">
                            <div className="f-Ubuntu-L fsp-15 rounded-p-10 wp-400  hp-40 pep-20 psp-20 ptp-10 pbp-10 mtp--5 bgc-trans-uwu d-flex justify-content-start ">
                                Al diseñar nuestra obra de arte aprendimos que...
                            </div>
                            <div className="psp-10 pep-10">
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                            </div>
                        </div>
                    </div>
                    <div className="max-wp-640 mx-auto position-relative mtp-20">
                        <div className="position-absolute top-100 start-100 translate-middle msp--30 mtp-0 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-80" alt="" /></div>
                        <div className="text-center w-100 border-1 border-style-solid border-color-dark rounded-p-10 pbp-15 bgc-white">
                            <div className="f-Ubuntu-L fsp-15 rounded-p-10 max-wp-450  hp-40 pep-20 psp-20 ptp-10 pbp-10 mtp--5 bgc-trans-owo d-flex justify-content-start ">
                                Si diseñáramos una obra de arte en el futuro volveríamos a...
                            </div>
                            <div className="psp-10 pep-10">
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                            </div>
                        </div>
                    </div>
                    <div className="max-wp-640 mx-auto position-relative mtp-20">
                        <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp-0 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-60" alt="" /></div>
                        <div className="text-center w-100 border-1 border-style-solid border-color-dark rounded-p-10 pbp-15 bgc-white">
                            <div className="f-Ubuntu-L fsp-15 rounded-p-10 wp-170 hp-40 pep-20 psp-20 ptp-10 pbp-10 mtp--5 bgc-trans-ewe d-flex justify-content-start ">
                                y cambiaríamos...
                            </div>
                            <div className="psp-10 pep-10">
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
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

export default Page057;
