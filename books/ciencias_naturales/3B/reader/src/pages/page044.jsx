import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

import "./page_044.css";

function Page044(props) {

    const pagina = "044";
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

                    <div className="d-flex global-margin mtp-60 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100 position-relative">
                            <div className="col-sm-12 col-md-6 psp-20 pep-20 msp-0 mep-0 mtp-0 mbp-30 position-relative">
                                <div className="border-style-solid border-2 border-color-akuma rounded-p-10">
                                    <div className="d-flex flex-column bgc-white rounded-p-10">
                                        <div className="bgc-akuma w-100 f-Ubuntu-B text-center color-white fsp-15 rounded-set-6 psp-10 pep-10 ptp-5 pbp-5">
                                            Lo que más nos ha costado <br /> hacer en esta etapa fue...
                                        </div>
                                        <div className="psp-10 pep-10">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 psp-20 pep-20 msp-0 mep-0 mtp-0 mbp-30 position-relative">
                                <div className="position-absolute posicion-centro-centro translate-middle zindex-1"><img src={"images/generales/espiral2.svg"} className="wp-50 mtp--40 rotacion-centro-centro" alt="" /></div>
                                <div className="border-style-solid border-2 border-color-pidgey rounded-p-10">
                                    <div className="d-flex flex-column bgc-white rounded-p-10">
                                        <div className="bgc-pidgey w-100 f-Ubuntu-B text-center color-white fsp-15 rounded-set-6 psp-10 pep-10 ptp-5 pbp-5">
                                            Lo más sencillo de realizar <br /> en esta etapa fue...
                                        </div>
                                        <div className="psp-10 pep-10">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-300" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="position-absolute top-0 start-100 translate-middle msp-0 zindex-1"><img src={"images/page_" + pagina + "/lupa.png"} className="wp-60" alt="" /></div>
                            <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/reloj.png"} className="wp-60" alt="" /></div>
                        </div>
                    </div>


                    <div className="mtp-0 container-titulo-global mbp-0">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            xxx
                        </div> */}
                        <div className="d-flex psp-0">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                            {/* <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                X
                            </div> */}
                            <div className="f-Ubuntu-R fsp-16 ptp-0 psp-10 pep-10 text-start">
                                Completamos el mensaje en la revista.
                            </div>
                            {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} colorUnidad={background} pagina={"76"} image={"images/page_" + pagina + "/revista.png"} clasesImagen="hp-40 text-center mtp--10 " className="p-0 px-0" />
                        </div>
                    </div>


                    {/* BEGIN TABLE */}
                    <div className="global-margin mtp-30 mbp-100 psp-10 pep-10 ptp-10 pbp-10 f-Ubuntu-L fsp-13 rounded-p-10 ">
                        <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-0">
                            {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/generales/ticket.svg" className="hp-17 mtp--3 msp-5 mep-5" alt=""/>el recuadro que mejor me represente.</span> */}
                            <div className="w-100 p-0 pb-3 position-relative">
                                <div className="position-absolute top-0 start-0 msp-10 mtp--5 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo me siento?</div>
                                <table className="w-100">
                                    <tbody>
                                        <tr>
                                            <td> </td>
                                            <td className={"color-dark f-colby-compres-bold p-0 m-0 "}>
                                                <div className="d-flex w-100 center-center psp-10 pep-10 ptp-0 pbp-0 text-center ">Nunca</div>
                                            </td>
                                            <td className={"color-dark f-colby-compres-bold p-0 m-0 min-wp-55 "}>
                                                <div className="d-flex w-100 center-center psp-5 pep-5 ptp-0 pbp-0 text-center ">A veces</div>
                                            </td>
                                            <td className={"color-dark f-colby-compres-bold p-0 m-0 "}>
                                                <div className="d-flex center-center psp-10 pep-10 ptp-0 pbp-0 text-center ">Generalmente</div>
                                            </td>
                                            <td className={"color-dark f-colby-compres-bold p-0 m-0 "}>
                                                <div className="d-flex center-center psp-5 pep-5 ptp-0 pbp-0 text-center ">Siempre</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={"bgc-white rounded-ts-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 ">
                                                    <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                                    Nos involucramos en la realización de la tarea y nos responsabilizamos del trabajo que debemos hacer.
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30">
                                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30">
                                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30">
                                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white rounded-te-10  min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30">
                                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={"f-Ubuntu-L fsp-14 text-start p-0 m-0 "}>
                                                <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                                                    <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                                    Ante una petición de apoyo de alguien del grupo, intentamos ayudar antes de preguntarle al profesor.
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30">
                                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30">
                                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30">
                                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30">
                                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                                                    <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                                    Respetamos el turno de la palabra.
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30">
                                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30">
                                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30">
                                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30">
                                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-bottom-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                                                    <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                                    Llegamos a acuerdos y decisiones compartidas después de que cada uno ofrezca su opinión.
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30">
                                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30">
                                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30">
                                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white rounded-be-10   f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-bottom-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30">
                                                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="position-absolute top-100 start-50 translate-middle msp-90 mtp-50 zindex-1"><img src={"images/page_" + pagina + "/mono.png"} className="hp-110" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    {/* END TABLE */}

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

export default Page044;
