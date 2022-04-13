import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import "./page_072.css";

function Page072(props) {

    const pagina = "072";
    var indexInput = 0;
    const etapa = "6"
    const background = "bgc-pikachu";
    const color = "color-pikachu";
    const borderColor = "border-color-pikachu"
    const borderColorTabla = "border-color-kokomi"
    const bgc_cajas = "bgc-kokomi";

    return (



        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20 position-realtive">
                <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
                    <div className="max-wp-600 mx-auto mtp-120 cb-calc ">
                        <div className="bgc-windu max-wp-300 rounded-p-10 ptp-10 pbp-10 mx-auto zindex-10 position-relative f-Ubuntu-L fsp-15 "> Lo que más valoramos de nuestra convivencia como curso es:</div>
                        <div className="psp-35 pep-35 bgc-white rounded-p-90 position-relative">
                            <div className="position-absolute top-0 start-100 translate-middle wp-100 msp-10 mtp--10 zindex-10 visible-768"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-90" alt="" /></div>
                            <div className="position-absolute top-50 start-0 translate-middle wp-100 msp--10 mtp--10 zindex-10 visible-768"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-60" alt="" /></div>
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="zindex-10 position-relative p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                            <div className="cloud"></div>
                            <div className="cloud2"></div>
                        </div>
                    </div>
                    <div className="max-wp-500 justify-content-start caja-clou-mini  mtp-50 cb-calc pbp-20">
                        <div className="bgc-makoto max-wp-400 rounded-p-10 ptp-10 pbp-10 mx-auto zindex-10 position-relative f-Ubuntu-L fsp-15 "> Queremos seguir trabajando en favor de la buena convivencia escolar realizando las siguientes acciones:</div>
                        <div className="psp-35 pep-35 bgc-white rounded-p-90 position-relative">
                            <div className="position-absolute top-0 start-0 translate-middle wp-100 msp-50 mtp--40 zindex-10 visible-768"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-20" alt="" /></div>
                            <div className="position-absolute top-100 start-0 translate-middle wp-100 msp--0 mtp--30 zindex-10 visible-768"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-60" alt="" /></div>
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="zindex-10 position-relative p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-190" />
                            <div className="cloud3"></div>
                            <div className="cloud4"></div>
                        </div>
                    </div>
                    <div className="justify-content-end d-flex ptp-0 w-100 position-absolute-767 start-0 bottom-0">
                        <img src={"images/page_" + pagina + "/img_006.png"} className="wp-530" alt="" />
                    </div>


                    {/* PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-10" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                            ABP &copy; SM
                        </div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>

                </div>
            </div>
        </div >


    );
}

export default Page072;
