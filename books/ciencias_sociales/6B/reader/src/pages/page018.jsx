import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check2 from "../components/Check2";

import "./page_018.css";

function Page018(props) {

    const pagina = "018";
    var indexInput = 0;
    const etapa = "2"
    const background = "bgc-bulma";
    const color = "color-bulma";
    const borderColor = "border-color-bulma"
    const bgc_cajas = "bgc-draco";
    const borderColorTabla = "border-color-buzz";


    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    <div className={"cabecera-v1 hp-80 " + background}>
                    </div>

                    <div className="ptp-30 container-titulo-global mbp-0">
                        <div className="d-flex psp-20">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                6
                            </div>
                            <div className="f-Ubuntu-R col-9 fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Completo.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="psp-60 pep-100 ptp-20 pbp-10">
                        <div className="bgc-saitama rounded-set-20 py-2">
                            <div className="f-Ubuntu-B color-white">Del rol que asumire?? me entusiasma...</div>
                        </div>
                        <div className="border-style-solid border-1 border-color-saitama ptp-10 pbp-30 psp-20 pep-20 position-relative">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180" />
                            <div className="position-absolute top-100 start-100 translate-middle msp-20 mtp--70 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-110" alt="" /></div>
                        </div>
                    </div>


                    <div className="psp-100 pep-60 ptp-10 pbp-70 ">
                        <div className="bgc-pidgey rounded-set-20 py-2 position-relative">
                            <div className="f-Ubuntu-B color-white">Del rol que asumire?? me preocupa...</div>
                            <div className="position-absolute top-0 start-0 translate-middle msp-60 mtp--10 zindex-1"><img src={"images/page_" + pagina + "/img_001.svg"} className="hp-60" alt="" /></div>
                            <div className="position-absolute top-0 start-100 translate-middle msp--60 mtp--10 zindex-1"><img src={"images/page_" + pagina + "/img_001.svg"} className="hp-60" alt="" /></div>
                        </div>
                        <div className="border-style-solid border-1 border-color-pidgey ptp-10 pbp-10 psp-20 pep-20 position-relative">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-180" />
                            <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-25" alt="" /></div>
                        </div>
                    </div>

                    <div className="w-100 bgc-draco ptp-30 pbp-40 border-top-style-solid border-color-dark border-2 position-relative">
                        <div className="d-flex flex-column global-margin mtp-0 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
                            <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-10">??C??mo voy?</div>
                            <div className="d-flex flex-column bgc-white rounded-p-10 psp-10 pep-10 ptp-10 pbp-10 mtp-0 mbp-0">
                                <div className="row p-0 m-0 w-100">
                                    <div className="col-12 p-0 m-0">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex align-items-start">
                                                <div className="mtp-0 pep-5">
                                                    <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                                                </div>
                                                <div className="f-Ubuntu-L fsp-14 ptp-2 text-start">Las tres palabras ma??s relevantes de esta etapa fueron</div>
                                            </div>
                                            <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-80" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 p-0 m-0">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex align-items-start">
                                                <div className="mtp-0 pep-5">
                                                    <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                                                </div>
                                                <div className="f-Ubuntu-L fsp-14 ptp-2 text-start">??Para que?? me sirvio?? la sesio??n de hoy?</div>
                                            </div>
                                            <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 w-100 min-hp-80" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column global-margin mtp-0 mbp-20 psp-0 pep-0 ptp-20 pbp-0">
                            <div className="col-12">
                                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">??Co??mo me siento?</div>
                                <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                                    <div className="w-100 p-2 pb-3 bgc-white rounded-p-10">
                                        <table className="w-100">
                                            <span className="w-24 f-Ubuntu-L mtp-5 mbp-10 fsp-14 text-start">Marco con un <img src={"images/page_" + pagina + "/img_006.svg"} className="hp-17 mtp--2" alt="" /> el recuadro que mejor me represente.</span>

                                            <tbody>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2 color-white"}>
                                                        Nunca</td>
                                                    <td style={{ minWidth: "55px" }} className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2 color-white"}>
                                                        A veces</td>
                                                    <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2 color-white"}>
                                                        Generalmente</td>
                                                    <td className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2 color-white"}>
                                                        Siempre</td>
                                                </tr>
                                                <tr>
                                                    <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>El ambiente de trabajo en mi equipo es agradable.</td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                </tr>
                                                <tr>
                                                    <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Estoy muy contento de trabajar en este proyecto.</td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="position-absolute top-0 start-100 translate-middle msp--100 mtp--36 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-140" alt="" /></div>
                    </div>

                    {/* PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                            ABP &copy; SM
                        </div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end marcador-etapa" style={{ bottom: 0 }}>

                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className="col-7 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_planificacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-saitama"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
                            <div className="w-100 hp-25 bgc-pikachu"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Page018;
