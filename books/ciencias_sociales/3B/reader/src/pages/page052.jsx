import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalRecortableEstatico from "../components/ModalRecortableEstatico";

import "./page_052.css";

function Page052(props) {
    const pagina = "052";
    var indexInput = 0;
    const etapa = "5"
    const background = "bgc-saitama";
    const color = "color-saitama";
    const colorSesion = "color-saitama";
    const borderColor = "border-color-saitama"
    const borderColorTabla = "border-color-bobafett"
    const bgc_cajas = "bgc-bobafett";

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="ep-page52 page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

                    {/* <div className="h-180 ptp-10">
                <img src="images/page_052/img_001.png" className="hp-130 " alt=""/>  
                </div> */}

                    <div className="w-100 hp-180  "><img src="images/page_052/img_001.png" className=" " alt="" /> </div>

                    <div className="d-flex psp-60 pep-60">
                        <div className="row w-100 p-0 m-0">
                            <div className="col-sm-12 col-md-6 d-flex center-center min-hp-15 mbp-20">
                                <div className="d-flex center-center wp-300 hp-150 position-relative ">
                                    <div className="zindex-2 psp-20 pep-20 ptp-10 fsp-15 f-Ubuntu-R color-bulma">¡Solo nos queda preparar nuestra fiesta e invitar a la comunidad educativa!</div>
                                    <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_010.svg"} className="wp-300" alt="" /></div>
                                    <div className="position-absolute top-100 start-50 translate-middle msp-0 mtp-20 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-80" alt="" /></div>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-6 d-flex center-center cb-border-multi bgc-white position-relative">
                                <div className="position-absolute top-0 start-50 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-300" alt="" /></div>
                                <div className="d-flex flex-column center-center wp-330 pbp-20 ">
                                    <div className="zindex-2 psp-20 pep-20 ptp-10 fsp-15 f-Ubuntu-R">La fiesta será el día</div>
                                    <div className="bgc-white border-style-solid border-1 border-color-goten rounded-p-15 wp-200 zindex-2">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-30" />
                                    </div>
                                    <div className="zindex-2 psp-20 pep-20 ptp-10 fsp-15 f-Ubuntu-R">El lugar será</div>
                                    <div className="bgc-white border-style-solid border-1 border-color-goten rounded-p-15 wp-200 zindex-2">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-30" />
                                    </div>
                                    {/* <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_"+pagina+"/img_009.png"} className="wp-340" alt="" /></div>  */}

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex psp-60 pep-60 mtp-80">
                        <div className="row w-100 p-0 m-0">
                            <div className="col-sm-12 col-md-12 d-flex center-center min-hp-150">

                                <div className="bgc-sargento border-style-solid border-color-yanfei border-1 w-100 position-relative ">
                                    <div className="position-absolute top-100 start-100 translate-middle msp--30 mtp-40 zindex-1"><img src={"images/page_" + pagina + "/img_006.svg"} className="wp-170" alt="" /></div>
                                    <div className="position-absolute top-100 start-100 translate-middle msp--30 mtp-40 zindex-2">
                                        <div className="d-flex color-saitama fsp-14 f-Ubuntu-R  wp-150  gira5">Completamos las invitaciones que entregaremos a los asistentes.</div>
                                    </div>
                                    <div className="position-absolute w-100 h-100 top-100 start-100 translate-middle msp-0 mtp--20 zindex-1">
                                        {/* <img src={"images/page_"+pagina+"/img_005.svg"} className="wp-40" alt="" /> */}
                                        {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_005.svg"} clasesImagen="hp-40 msp-30 text-center mtp-10 " className="p-0 px-0" /> */}

                                    </div>

                                    <div className="position-absolute top-0 start-0 translate-middle msp-150 mtp-0 zindex-1 wp-300">
                                        <div className="bgc-white ptp-5 border-style-solid border-1 border-color-yanfei cinta-texto-52 color-goten mtp--20 msp--20 f-pixilate-bold fsp-18">
                                            Las personas a las que invitaremos serán...
                                        </div>
                                    </div>
                                    <div className="max-wp-700 w-100 psp-20 pep-20 ptp-20 pbp-20">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-2">
                                <ModalRecortableEstatico
                                    id={"p" + pagina + "_cutouts_" + (indexInput += 1)}
                                    pagina={pagina}
                                    image={"images/page_" + pagina + "/img_005.png"}
                                    colorUnidad={background}
                                    numRecortables="4"
                                    grupo="1"
                                    className="p-0 m-0 d-flex wp-200 hp-200 pe-auto"
                                />
                            </div>
                            <div className="col-8"></div>

                        </div>
                    </div>



                    <div className="d-flex justify-content-center msp-60 mep-60 mtp-120 mbp-150">
                        <div className="row w-100">
                            <div className="col">
                                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                                <div className="rounded-p-10  bgc-white  w-100 position-relative ">
                                    <div className="position-absolute bottom-0 end-0"><img src="images/page_052/img_011.png" className="hp-190 " alt="" /></div>
                                    <div className="d-flex flex-wrap w-80 titulo-linea  mep-40 ">
                                        <div className="d-flex mtp-10 msp-10 align-items-center   "><img src="images/page_052/img_007.svg" className="mep-10 hp-15" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">Lo que más nos costó trabajar en esta etapa fue...</span></div>
                                    </div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="msp-20 mep-100 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                                    <div className="d-flex flex-wrap w-100 titulo-linea  ">
                                        <div className="d-flex mtp-10 msp-10 align-items-center"><img src="images/page_052/img_007.svg" className="mep-5 hp-15" alt="" /><span className="f-Ubuntu-L fsp-14 text-start">Lo que mejor nos resultó en esta etapa fue...</span></div>
                                    </div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="msp-20 mep-100 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />

                                </div>
                            </div>
                        </div>
                    </div>





                    {/* PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                            ABP &copy; SM
                        </div>
                        <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>

                </div>
            </div>
        </div>



    );
}

export default Page052;
