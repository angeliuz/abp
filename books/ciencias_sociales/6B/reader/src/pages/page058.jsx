import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import Check2 from "../components/Check2";
import "./page_058.css";

function Page058(props) {

    const pagina = "058";
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

                    <div className="d-flex msp-60 mep-60 mbp-20 mtp-30 position-relative">
                        <div className="row w-100 p-0 m-0">
                            <div className="row mx-auto d-flex f-Ubuntu-R fsp-15 mbp-20 justify-content-cente ">
                                <div className="col-sm-12 col-md-6 position-relative ptp-10">
                                    <div className="position-absolute top-0 start-0 translate-middle msp--10 mtp-25 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-70" alt="" /></div>
                                    <div className="position-absolute top-100 start-100 translate-middle msp--30 mtp-0 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-90" alt="" /></div>
                                    <div className="text-center w-100 border-1 border-style-solid border-color-dark rounded-p-10 pbp-30 bgc-white mtp-10">
                                        <div className="f-Ubuntu-R fsp-15 rounded-p-10 max-wp-200 mx-auto hp-40 pep-20 psp-20 ptp-10 mtp--5 pbp-10 bgc-obiwan lhp-15 color-white fw-700 d-flex justify-content-center align-items-center">
                                            Lo que más nos costó de diseñar la obra fue...
                                        </div>
                                        <div className="psp-10 pep-10 pbp-10 ptp-0 w-100 d-flex">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-400" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6 position-relative ptp-40">
                                    <div className="position-absolute top-0 start-100 translate-middle msp--10 mtp-80 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-70" alt="" /></div>
                                    <div className="position-absolute top-100 start-100 translate-middle msp--30 mtp-0 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-80" alt="" /></div>
                                    <div className="text-center w-100 border-1 border-style-solid border-color-dark rounded-p-10 pbp-30 bgc-white mtp-10">
                                        <div className="color-white fw-700 f-Ubuntu-R fsp-15 rounded-p-10 max-wp-200 mx-auto  hp-40 pep-20 psp-20 ptp-10 pbp-10 mtp--5 bgc-palpatine d-flex justify-content-center align-items-center">
                                            Lo más sencillo fue...
                                        </div>
                                        <div className="psp-10 pep-10 pbp-10 ptp-0 w-100 d-flex">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column global-margin mtp-0 mbp-20 psp-0 pep-0 ptp-20 pbp-20 position-relative">
                        <div className="position-absolute top-100 start-100 translate-middle wp-100 msp--100 mtp--70 visible-768"><img src={"images/page_" + pagina + "/img_005.png"} className="w-200" alt="" /></div>
                        <div className="col-10">
                            <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo vamos?</div>
                            <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                                {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src={"images/page_" + pagina + "/img_005.svg"} className="hp-17 mtp--2" alt="" /> el recuadro que mejor me represente.</span> */}
                                <div className="w-100 p-2 pb-3 bgc-white rounded-p-10">
                                    <table className="w-100">
                                        <tbody>
                                            <tr>
                                                <td>&nbsp;</td>
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
                                                <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Participamos en la realización de las tareas y nos responsabilizamos del trabajo.</td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                            </tr>
                                            <tr>
                                                <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Ante una petición de apoyo de alguien del grupo, intentamos ayudar antes de preguntarle al profesor.</td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                            </tr>
                                            <tr>
                                                <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Respetamos el turno de palabra.</td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                            </tr>
                                            <tr>
                                                <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Llegamos a acuerdos y decisiones compartidas después de que cada integrante da su opinión.</td>
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

export default Page058;
