import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

import "./page_034.css";

function Page034(props) {

    const pagina = "034";
    var indexInput = 0;
    const etapa = "3"
    const background = "bgc-android18";
    const color = "color-android18";
    const colorSesion = "color-primary";
    const borderColor = "border-color-android18"
    const borderColorTabla = "border-color-android18"
    const bgc_cajas = "bgc-azuka";


    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    <div className="cabecera-v1 hp-80 bgc-android18">
                    </div>

                    {/* <div className="ptp-30 container-titulo-global mbp-10"> */}
                    {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>Ahora podremos comprobar qué ocurre en nuestro entorno</div> */}
                    {/* <div className="d-flex"> */}
                    {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_005.svg"} alt=""  /> */}
                    {/* <div className={"f-ccdigitaldelivery-bold fsp-35 "+color}>3</div> */}
                    {/* <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    Reviso si el borrador de la infografía cumple con las siguientes características.
                    </div> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                    {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                    {/* </div> */}
                    {/* </div> */}


                    <div className="d-flex w-100 mtp-130 psp-60 pep-60 ptp-20 mbp-0 bgc-ermac border-top border-color-android18 border-2 pbp-80">
                        <div className="row w-100 p-0 m-0">
                            <div className="col-12 position-relative">
                                <div className="position-absolute top-0 start-100 translate-middle msp--60 mtp--70 "><img src="images/page_034/img_001.png" className="wp-140 " alt="" /></div>
                                <div className="position-absolute top-0 start-0 translate-middle  mtp--50 "><img src="images/page_034/img_002.png" className=" " alt="" /></div>
                                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                                    <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                                        <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                                            <img src="images/page_034/img_001.svg" className="mep-5" alt="" />
                                            <span>Hoy he hecho varias tareas, y lo que más me ha ayudado ha sido:</span>
                                        </div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                                        <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                                            <img src="images/page_034/img_001.svg" className="mep-5" alt="" />
                                            <span>¿Qué cambiaría para hacer mejor las tareas de hoy?</span>
                                        </div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                                        <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                                            <img src="images/page_034/img_001.svg" className="mep-5" alt="" />
                                            <span>Aprendería más si hiciéramos:</span>
                                        </div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                                    </div>

                                </div>
                            </div>
                            <div className=" mbp-30 psp-60 pep-60 ptp-30 pbp-10 f-Ubuntu-L fsp-13 rounded-p-10 ">
                                <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-0">
                                    {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/generales/ticket.svg" className="hp-17 mtp--3 msp-5 mep-5" alt=""/>el recuadro que mejor me represente.</span> */}
                                    <div className="w-100 p-0 pb-3 position-relative">
                                        <div className="position-absolute top-0 start-0 msp-10 mtp--30 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo me siento?</div>
                                        <div className="position-absolute top-0 start-0 msp-10 mtp-0 f-Ubuntu-L fsp-14 lh-sm text-start">Marco la alternativa que más me representa.</div>
                                        <table className="w-100">
                                            <tbody>
                                                <tr>
                                                    <td>&nbsp;</td>
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
                                                    <td className={"bgc-white rounded-ts-10 f-Ubuntu-L fsp-14 lh-sm text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                                                        <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 ">
                                                            <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                                            Me gusta investigar sobre el tema planteado.
                                                        </div>
                                                    </td>
                                                    <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                                                        <div className="d-flex center-center">
                                                            <div className="wp-30 hp-30 rounded-1">
                                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                                                        <div className="d-flex center-center">
                                                            <div className="wp-30 hp-30 rounded-1">
                                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                                                        <div className="d-flex center-center">
                                                            <div className="wp-30 hp-30 rounded-1">
                                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className={"bgc-white rounded-te-10  min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                                                        <div className="d-flex center-center">
                                                            <div className="wp-30 hp-30 rounded-1">
                                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 lh-sm text-start p-0 m-0 border-style-solid border-bottom-hidden border-left-hidden border-right-hidden border-1 " + borderColorTabla}>
                                                        <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                                                            <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                                            Tengo ganas de encontrar soluciones al
                                                            desafío planteado.
                                                        </div>
                                                    </td>
                                                    <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-1 " + borderColorTabla}>
                                                        <div className="d-flex center-center">
                                                            <div className="wp-30 hp-30 rounded-1">
                                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-1 " + borderColorTabla}>
                                                        <div className="d-flex center-center">
                                                            <div className="wp-30 hp-30 rounded-1">
                                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-1 " + borderColorTabla}>
                                                        <div className="d-flex center-center">
                                                            <div className="wp-30 hp-30  bgc-white rounded-1">
                                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className={"bgc-white rounded-be-10   f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-bottom-hidden border-right-hidden border-1 " + borderColorTabla}>
                                                        <div className="d-flex center-center">
                                                            <div className="wp-30 hp-30 rounded-1">
                                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </div>
                                                    </td>
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

export default Page034;
