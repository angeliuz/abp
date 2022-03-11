import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check2";

import "./page_032.css";

function Page032(props) {

    const pagina = "032";
    var indexInput = 0;
    const etapa = "3"
    const background = "bgc-android18";
    const color = "color-android18";
    const colorSesion = "color-primary";
    const borderColor = "border-color-android18"
    const bgc_cajas = "bgc-azuka";


    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    <div className="cabecera-v1 hp-80 bgc-android18">
                    </div>

                    <div className="ptp-30 container-titulo-global mbp-10">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>Ahora podremos comprobar qué ocurre en nuestro entorno</div> */}
                        <div className="d-flex">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_002.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>3</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Buscamos noticias sobre la malnutrición en Chile y pensamos en cómo prevenirla
                                en el colegio.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="d-flex global-margin mtp-0 mbp-50 psp-0 pep-0 ptp-0 pbp-0 position-relative hp-400 f-Ubuntu-L  fsp-16">

                        <div className="position-absolute top-100 start-100 translate-middle msp--60 mtp-40 zindex-2 "><img src="images/page_032/img_005.png" className="" alt="" /></div>
                        <div className="position-absolute top-50 start-100 translate-middle  zindex-2 msp--40 visible-768"><img src="images/page_032/img_002.png" className="" alt="" /></div>
                        <div className="position-absolute top-50 start-100 translate-middle  zindex-2 msp--30 mtp-110 visible-768"><img src="images/page_032/img_004.png" className="" alt="" /></div>
                        <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-580" alt="" /></div>

                        <div className="position-absolute top-50 start-50 translate-middle msp--200 mtp-120 zindex-1 ">
                            <div className="d-flex flex-column wp-120 psp-10 pep-10 ptp-0 pbp-0">

                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                            </div>
                        </div>
                        <div className="position-absolute top-50 start-50 translate-middle msp--190 mtp--110 zindex-1">
                            <div className="d-flex flex-column wp-120 psp-10 pep-10 ptp-0 pbp-0 ">

                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                            </div>
                        </div>

                        <div className="position-absolute top-50 start-50 translate-middle msp-190 mtp--110 zindex-1 ">
                            <div className="d-flex flex-column wp-120 psp-10 pep-10 ptp-0 pbp-0 ">

                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                            </div>
                        </div>
                        <div className="position-absolute top-50 start-50 translate-middle msp-200 mtp-120 zindex-1">
                            <div className="d-flex flex-column wp-120 psp-10 pep-10 ptp-0 pbp-0 ">

                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                            </div>
                        </div>
                    </div>




                    <div className={"d-flex w-100 mtp-50 psp-60 pep-60 ptp-20 mbp-30 border-top-style-solid " + borderColor + " border-2 pbp-80 " + bgc_cajas}>
                        <div className="row w-100 p-0 m-0">
                            <div className="col-12 position-relative">
                                {/* <div className="position-absolute top-0 start-100 translate-middle msp--30 mtp--55 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-90" alt="" /></div> */}
                                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                                    <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                                        <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                                            <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                                            <span>Algo que ahora veo de una forma distinta es</span>
                                        </div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                                        <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                                            <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 wp-15" alt="" />
                                            <span> ¿Cómo utilizaré lo que he aprendido?</span>
                                        </div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                                    </div>
                                </div>
                            </div>
                            {/* BEGIN EJERCICIO 2 */}
                            <div className="col-12">
                                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo me siento?</div>
                                <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                                    <div className="w-100 p-2 pb-3 bgc-white rounded-p-10">
                                        <table className="w-100">
                                            <tbody>
                                                <tr>
                                                    <td><span className="w-24 f-Ubuntu-L mtp-5 mbp-10 text-start">Marco con un <img src={"images/page_" + pagina + "/img_007.svg"} className="hp-17 mtp--2" alt="" /> el recuadro que mejor me represente.</span></td>
                                                    <td className={"color-white style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2"}>
                                                        Nunca</td>
                                                    <td style={{ minWidth: "55px" }} className={"color-white style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2"}>
                                                        A veces</td>
                                                    <td className={"color-white style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2"}>
                                                        Generalmente</td>
                                                    <td className={"color-white style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2"}>
                                                        Siempre</td>
                                                </tr>
                                                <tr>
                                                    <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Me gusta investigar sobre el tema del proyecto.</td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                </tr>
                                                <tr>
                                                    <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Tengo ganas de encontrar soluciones al desafío.</td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                    <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BEGIN PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                            ABP &copy; SM
                        </div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
                        <div className="col-1 col-md-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className="col-1 col-md-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className="col-7 col-md-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className="col-1 col-md-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className="col-1 col-md-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-saitama"></div>
                        </div>
                        <div className="col-1 col-md-2 p-0 m-0 position-relative">
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
