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
                <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
                    <div className="psp-60 pep-60 ptp-60">
                        <div className="text-start f-Ubuntu-R">Creemos que, para cumplir nuestro desafío, necesitaremos...</div>
                    </div>

                    <div className="psp-60 pep-60 ptp-20 pbp-20">
                        <div className="position-relative">

                            <div className="pbp-30">
                                <div className="caja-p18 posicion-caja1 bgc-white border-style-solid border-1">
                                    <div className="position-relative">
                                        <div className="position-absolute top-0 start-0 mtp--10 msp--10 py-2 px-4 bgc-freezer rounded-p-20 f-Ubuntu-R">investigar sobre</div>
                                    </div>
                                    <div className="pep-65-p18">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 mtp-30 text-start flex-grow-1 lhp-25 hp-230 overflow-auto" />
                                    </div>
                                </div>
                            </div>

                            <div className="pbp-30">
                                <div className="caja-p18 posicion-caja2 bgc-white border-style-solid border-1 ">
                                    <div className="position-relative">
                                        <div className="position-absolute top-0 start-0 mtp--10 msp--10 py-2 px-4 bgc-gohan rounded-p-20 f-Ubuntu-R">que nuestra propuesta sea</div>
                                    </div>
                                    <div className="pep-65-p18">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 mtp-30 text-start flex-grow-1 lhp-25 hp-230 overflow-auto" />
                                    </div>
                                </div>
                            </div>

                            <div className="pbp-30">
                                <div className="caja-p18 posicion-caja3 bgc-white border-style-solid border-1">
                                    <div className="position-relative">
                                        <div className="position-absolute top-0 start-0 mtp--10 msp--20 py-2 px-4 bgc-windu rounded-p-20 f-Ubuntu-R text-start w-110">organizarnos de la siguiente forma</div>
                                    </div>
                                    <div className="">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 mtp-30 text-start flex-grow-1 lhp-25 hp-230 overflow-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className="position-absolute top-0 start-100 translate-middle msp--60 mtp-30 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-80" alt="" /></div>
                        </div>
                    </div>

                    <div className="psp-60 pep-60 ptp-20">
                        <div className="text-start f-Ubuntu-R">Nos comprometemos a asumir los siguientes roles:</div>
                    </div>

                    <div className="psp-60 pep-60 ptp-20 ">
                        <div className="row w-80-p18 position-relative">

                            <div className="col-md-6 col-12 pbp-20">
                                <div className="w-100 bgc-genos border-style-solid border-1 border-color-soldados p-2 rounded-p-5">
                                    <div className="text-center f-colby-regular color-soldados fsp-18">Coordinación</div>
                                    <div className="text-start f-Ubuntu-L">Quien asume este rol será:</div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                                </div>
                            </div>

                            <div className="col-md-6 col-12 pbp-20">
                                <div className="w-100 bgc-draco border-style-solid border-1 border-color-bulma p-2 rounded-p-5">
                                    <div className="text-center f-colby-regular color-bulma fsp-18">Supervisión</div>
                                    <div className="text-start f-Ubuntu-L">Quien asume este rol será:</div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                                </div>
                            </div>
                            <div className="position-absolute top-0 start-100 translate-middle msp-20 mtp-40 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-90" alt="" /></div>

                        </div>
                    </div>

                    <div className="psp-60 pep-60">
                        <div className="row w-80-p18 ms-20-p18">

                            <div className="col-md-6 col-12 pbp-20">
                                <div className="w-100 bgc-azuka border-style-solid border-1 border-color-android18 p-2 rounded-p-5">
                                    <div className="text-center f-colby-regular color-dhalsim fsp-18">Relaciones públicas</div>
                                    <div className="text-start f-Ubuntu-L">Quien asume este rol será:</div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                                </div>
                            </div>

                            <div className="col-md-6 col-12 pbp-20">
                                <div className="w-100 bgc-marcianos border-style-solid border-1 border-color-pidgey p-2 rounded-p-5">
                                    <div className="text-center f-colby-regular color-pidgey fsp-18">Intendencia</div>
                                    <div className="text-start f-Ubuntu-L">Quien asume este rol será:</div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                                </div>
                            </div>
                        </div>

                    </div>



                    <div className="d-flex flex-column global-margin mtp-0 mbp-20 psp-0 pep-50 ptp-0 pbp-30">
                        <div className="col-12 position-relative">
                            <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo vamos?</div>
                            <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                                {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src={"images/page_" + pagina + "/img_005.svg"} className="hp-17 mtp--2" alt="" /> el recuadro que mejor me represente.</span> */}
                                <div className="w-100 p-2 pb-3 bgc-white rounded-p-10">
                                    <table className="w-100">
                                        <tbody>
                                            <tr className="color-white">
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
                                                <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Nos involucramos en el desafío y nos responsabilizamos de las tareas que tenemos que hacer.</td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                            </tr>
                                            <tr>
                                                <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Ante una petición de ayuda, dejamos de hacer otras cosas e intentamos ayudarnos antes de preguntarle al profesor.</td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                            </tr>
                                            <tr>
                                                <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Respetamos el turno de la palabra.</td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                            </tr>
                                            <tr>
                                                <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Llegamos a acuerdos y decisiones compartidas después de que cada uno da su opinión.</td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                                <td className={"border-style-solid border-1 " + borderColor + ""}> <Check2 id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check2></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="position-absolute top-100 start-100 translate-middle msp-50 mtp--200 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-110" alt="" /></div>
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
        </div >

    );
}

export default Page018;
