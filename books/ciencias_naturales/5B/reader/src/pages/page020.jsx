import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ItemLista from "../components/ItemLista";
import Check from "../components/Check2";

import "./page_020.css";

function Page020(props) {

    const pagina = "020";
    var indexInput = 0;
    const etapa = "2"
    const background = "bgc-bulma";
    const color = "color-bulma";
    const borderColor = "border-color-bulma"
    const borderColorTabla = "border-color-buzz"
    const bgc_cajas = "bgc-piccolo";
    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>

                    <div className="d-flex global-margin mtp-50 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">

                                <ItemLista colorBullet="bgc-bulma" fontSize="fsp-15" fuente="f-Ubuntu-R" color="color-dark">Creemos que para cumplir nuestro desafío necesitaremos...</ItemLista>

                            </div>
                        </div>
                    </div>

                    <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-6 p-0 m-0 position-relative">
                                <div className="position-absolute top-0 start-0 translate-middle msp-0 mtp-50 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-60" alt="" /></div>
                                <div className="d-flex msp-10 mep-10 mtp-20 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
                                    <div className="row p-0 m-0 w-100">
                                        <div className="col-12 p-0 m-0 position-relative">
                                            <div className="border-style-solid border-2 border-color-dark">
                                                <div className="d-flex flex-column bgc-white">
                                                    <div className="psp-10 pep-10 ptp-10 pbp-10 f-Ubuntu-R fsp-15">
                                                        <div className="text-center f-Ubuntu-M">Personas</div>
                                                        <div className="text-start f-Ubuntu-L fsp-14">Necesitaremos la colaboración de...</div>
                                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-140" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-6 p-0 m-0 position-relative">

                                <div className="d-flex msp-10 mep-10 mtp-20 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
                                    <div className="row p-0 m-0 w-100">
                                        <div className="col-12 p-0 m-0 position-relative">
                                            <div className="border-style-solid border-2 border-color-dark">
                                                <div className="d-flex flex-column bgc-white">
                                                    <div className="psp-10 pep-10 ptp-10 pbp-10 f-Ubuntu-R fsp-15">
                                                        <div className="text-center f-Ubuntu-M">Lugares</div>
                                                        <div className="text-start f-Ubuntu-L fsp-14">Haremos nuestra campaña en...</div>
                                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-140" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 p-0 m-0 position-relative">
                                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-40" alt="" /></div>
                                <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-45" alt="" /></div>

                                <div className="d-flex msp-10 mep-10 mtp-20 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
                                    <div className="row p-0 m-0 w-100">
                                        <div className="col-12 p-0 m-0 position-relative">
                                            <div className="border-style-solid border-2 border-color-dark">
                                                <div className="d-flex flex-column bgc-white">
                                                    <div className="psp-10 pep-10 ptp-10 pbp-10 f-Ubuntu-R fsp-15">
                                                        <div className="text-center f-Ubuntu-M">Materiales</div>
                                                        <div className="text-start f-Ubuntu-L fsp-14">Creemos que para realizar nuestro proyecto vamos a necesitar...</div>
                                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-140" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-12 p-0 m-0 position-relative">
                                <div className="position-absolute top-50 start-0 translate-middle msp--10 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-60" alt="" /></div>
                                <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-60" alt="" /></div>
                                <div className="d-flex msp-10 mep-10 mtp-20 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
                                    <div className="row p-0 m-0 w-100">
                                        <div className="col-12 p-0 m-0 position-relative">
                                            <div className="border-style-solid border-2 border-color-dark">
                                                <div className="d-flex flex-column bgc-white">
                                                    <div className="psp-10 pep-10 ptp-10 pbp-10 f-Ubuntu-R fsp-15">
                                                        <div className="text-center f-Ubuntu-M">Permisos</div>
                                                        <div className="text-start f-Ubuntu-L fsp-14">Creemos que para realizar nuestro proyecto debemos solicitar la autorización de...</div>
                                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-140" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>

                    <div className="d-flex flex-column global-margin mtp-0 mbp-100 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="col-12">
                            <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo vamos?</div>
                            <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30 fsp-15 ">
                                {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src={"images/generales/ticket.svg"} className="hp-17 mtp--2" alt="" /> el recuadro que mejor me represente.</span> */}
                                <div className="w-100 p-2 pb-3 bgc-white rounded-p-10">
                                    <table className="w-100">
                                        <tbody>
                                            <tr>
                                                <td>&nbsp;</td>
                                                <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold color-white ps-2 pe-2"}>
                                                    Nunca</td>
                                                <td style={{ minWidth: "55px" }} className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold color-white ps-2 pe-2"}>
                                                    A veces</td>
                                                <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold color-white ps-2 pe-2"}>
                                                    Generalmente</td>
                                                <td className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold color-white ps-2 pe-2"}>
                                                    Siempre</td>
                                            </tr>
                                            <tr>
                                                <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Nos involucramos en el desafío y nos responsabilizamos por las tareas que tenemos que hacer.</td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                            </tr>
                                            <tr>
                                                <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Ante una petición de apoyo de alguien del grupo, intentamos ayudar antes de preguntarle al profesor. </td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                            </tr>
                                            <tr>
                                                <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Respetamos el turno de la palabra.</td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                                            </tr>
                                            <tr>
                                                <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-14 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Llegamos a acuerdos y decisiones compartidas después de que cada uno da su opinión.</td>
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



                    {/* BEIGN PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    {/* END PIE DE PAGINA */}
                </div>
            </div>
        </div>

    );
}

export default Page020;
