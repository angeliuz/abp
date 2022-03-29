import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import "./page_042.css";

function Page042(props) {
    const pagina = "042";
    var indexInput = 0;
    const etapa = "3"
    const background = "bgc-android18";
    const color = "color-android18";
    const colorSesion = "color-primary";
    const borderColor = "border-color-android18"
    const bgc_cajas = "bgc-goku";

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>


                    <div className="psp-80 pep-80 ptp-60">
                        <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-10">¿Cómo vamos?</div>
                        <div className="d-flex flex-wrap align-items-center position-relative">

                            <div className="col-md-6 col-12 zindex-1 position-relative">
                                <div className="border-style-solid border-2 psp-10 ptp-10 pep-0 pbp-5 mep--10 rounded-p-20 position-relative">
                                    <div className="bgc-white psp-20 pep-20 ptp-40 pbp-10 rounded-p-20 pep-10">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-1p42" />
                                    </div>
                                    <div className="position-absolute top-0 start-0  mxwp-b">
                                        <div className="bgc-pantro rounded-be-20 rounded-ts-20 f-Ubuntu-M">Cosas que hemos hecho que nos han encantado:
                                        </div>
                                    </div>
                                </div>
                                <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--30 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-80" alt="" /></div>

                            </div>

                            <div className="col-md-6 col-12 posicion-cuadro2-p42 position-relative">
                                <div className="border-style-solid border-2 psp-10 ptp-10 pep-0 pbp-5 mep--10 rounded-p-20 position-relative">
                                    <div className="bgc-white psp-20 pep-20 ptp-50 pbp-10 rounded-p-20 pep-10">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-2p42" />
                                    </div>
                                    <div className="position-absolute top-0 start-0  mxwp-b">
                                        <div className="bgc-ash rounded-be-20 rounded-ts-20 f-Ubuntu-M psp-30 pep-20 py-3"> Podemos mejorar en...
                                        </div>
                                    </div>
                                </div>
                                <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--15 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-120" alt="" /></div>
                            </div>

                            <div className="position-absolute top-0 start-100 translate-middle msp--20 mtp-30 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-80" alt="" /></div>
                        </div>
                    </div>
                    <div className="pbp-100"></div>
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

export default Page042;
