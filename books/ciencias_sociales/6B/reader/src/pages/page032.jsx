import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_032.css";

function Page032(props) {

    const pagina = "032";
    var indexInput = 0;
    const etapa = "3"
    const background = "bgc-android18";
    const color = "color-android18";
    const colorSesion = "color-primary";
    const borderColor = "border-color-android18";
    const bgc_cajas = "bgc-ermac";


    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    <div className="cabecera-v1 hp-80 bgc-android18">
                    </div>

                    <div className="ptp-30 container-titulo-global mbp-10">
                        <div className="d-flex">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" />
                            <div className={"mtp-10 f-Ubuntu-B fsp-24 " + color}>b.</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Completamos los primeros pasos de la preparación de la entrevista.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>
                    <div className="psp-120 pep-140 ptp-20 position-relative">
                        <div className="bgc-white border-style-solid border-1 border-color-lightDark w-100 position-relative sombra-1">
                            <div className="psp-30">
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-320" />
                            </div>
                            <div className="position-absolute top-50 start-0 translate-middle h-100 ptp-10 pbp-10"><div className="anillado-p32 wp-30 h-100"></div></div>
                        </div>
                        <div className="position-absolute top-0 start-100 translate-middle msp--120 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-100" alt="" /></div>
                        <div className="position-absolute top-100 start-0 translate-middle msp-80 mtp-20 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-80" alt="" /></div>
                    </div>

                    <div className="pbp-100"></div>

                    <div className="w-100 bgc-ermac ptp-30 pbp-40 border-solo-top border-color-hardDark border-style-solid border-2 position-relative">
                        <div className="d-flex flex-column global-margin mtp-0 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
                            <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-10">¿Cómo voy?</div>
                            <div className="d-flex flex-column bgc-white rounded-p-10 psp-10 pep-10 ptp-10 pbp-10 mtp-0 mbp-0">
                                <div className="row p-0 m-0 w-100">
                                    <div className="col-12 p-0 m-0">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex align-items-start">
                                                <div className="mtp-0 pep-5">
                                                    <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                                                </div>
                                                <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">Me gustaría aprender más sobre</div>
                                            </div>
                                            <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 p-0 m-0">
                                        <div className="d-flex flex-column">
                                            <div className="d-flex align-items-start">
                                                <div className="mtp-0 pep-5">
                                                    <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                                                </div>
                                                <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">¿Qué tres cosas destaco de lo que he aprendido?</div>
                                            </div>
                                            <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex flex-column global-margin mtp-0 mbp-20 psp-0 pep-0 ptp-20 pbp-0">
                            <div className="col-12">
                                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo me siento?</div>
                                <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                                    <div className="w-100 p-2 pb-3 bgc-white rounded-p-10">
                                        <table className="w-100">
                                            <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src={"images/page_" + pagina + "/img_007.svg"} className="hp-17 mtp--2" alt="" /> el recuadro que mejor me represente.</span>

                                            <tbody>
                                                <tr>
                                                    <td>&nbsp;</td>
                                                    <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2"}>
                                                        Nunca</td>
                                                    <td style={{ minWidth: "55px" }} className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2"}>
                                                        A veces</td>
                                                    <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2"}>
                                                        Generalmente</td>
                                                    <td className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2"}>
                                                        Siempre</td>
                                                </tr>
                                                <tr>
                                                    <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Me gusta investigar sobre este tema del proyecto.</td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                </tr>
                                                <tr>
                                                    <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Tengo ganas de encontrar soluciones al desafío.</td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-35 w-100 h-100" /></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="position-absolute top-0 start-100 translate-middle msp--120 mtp--100 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-180" alt="" /></div>
                    </div>

                    {/* BEGIN PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                            ABP &copy; SM
                        </div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-saitama"></div>
                        </div>
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
                            <div className="w-100 hp-25 bgc-pikachu"></div>
                        </div>
                    </div>
                    {/* END PIE DE PAGINA */}

                </div>
            </div>
        </div>

    );
}

export default Page032;
