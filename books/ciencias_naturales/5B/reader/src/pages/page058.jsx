import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

import "./page_058.css";

function Page058(props) {

    const pagina = "058";
    var indexInput = 0;
    const etapa = "5"
    const background = "bgc-saitama";
    const color = "color-saitama";
    const borderColor = "border-color-saitama"
    const borderColorTabla = "border-color-bobafett"
    const bgc_cajas = "bgc-bobafett";

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    <div className={"cabecera-v1 hp-80 " + background}>
                    </div>



                    <div className="ptp-10 container-titulo-global mbp-0">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            Plan de trabajo
                        </div> */}
                        <div className="d-flex psp-20">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_002.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                3
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Leo las cartas al director y escribimos una para proponer el Día de la Alimentación Saludable en el colegio.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>











                    <div className="d-flex mtp-30 msp-90 mep-60 position-relative">

                        <div className="position-absolute top-100 start-100 translate-middle msp--10 mtp--60 visible-768 imagen-58-sobre-papel zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-160  " alt="" /></div>
                        <div className="position-absolute top-100 start-0 translate-middle msp--20 mtp--95 visible-768 imagen-58-sobre-papel zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-120  " alt="" /></div>
                        {/* <div className="position-absolute top-0 start-0 translate-middle msp-0 mtp--40 visible-768 imagen1-64-sobre-papel zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-60" alt="" /></div> */}
                        <div className="row w-100">

                            <div className="cb-ep-paper-58 ">
                                <div className="cb-ep-paper-content-58 f-Ubuntu-L text-start hp-700 ">
                                    <div className="mtp-5 ">

                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-350" />

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>












                    <div className="d-flex w-100 mtp-10 psp-60 pep-60 ptp-20 mbp-0 bgc-windu border-top-style-solid border-color-dark border-2 pbp-80    position-relative">
                        <div className="position-absolute top-0 start-50 translate-middle   visible-768 mtp--39 msp--80"><img src="images/page_060/img_004.png" className="wp-80 " alt="" /></div>
                        <div className="row w-100 p-0 m-0">
                            <div className="col-12 position-relative">
                                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                                    <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                                        <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                                            <img src="images/generales/flecha_e5.svg" className="mep-5 wp-15" alt="" />
                                            <span>Las tareas en las que más me comprometo son</span>
                                        </div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                                        <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                                            <img src="images/generales/flecha_e5.svg" className="mep-5 wp-15" alt="" />
                                            <span>La estrategia que más me ha servido es</span>
                                        </div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                                    </div>

                                </div>




                                {/* BEGIN TABLE */}
                                <div className="mbp-50 psp-0 pep-0 ptp-10 pbp-10 mtp-60 f-Ubuntu-L fsp-13 rounded-p-10 ">
                                    <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-0">
                                        {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/generales/ticket.svg" className="hp-17 mtp--3 msp-5 mep-5" alt=""/>el recuadro que mejor me represente.</span> */}
                                        <div className="w-100 p-0 pb-3 position-relative">
                                            <div className="position-absolute mtp--40 top-0 start-0 msp-10 mtp--10 mbp-10 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo me siento?</div>
                                            <div className="d-flex position-absolute align-items-start w-100  mbp-50 top-0 start-0 msp-10 mtp--20 f-Ubuntu-R fsp-15  lh-sm text-start">Marco con un <img src={"images/page_" + pagina + "/img_006.svg"} className="wp-15 msp-5 mep-5 p-0 mpt-0 " alt="" /> el recuadro que mejor me represente.</div>
                                            <table className="w-100">

                                                <tbody>
                                                    <tr>
                                                        <td></td>
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
                                                        <td className={"bgc-white rounded-ts-10 f-Ubuntu-L fsp-15 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 ">
                                                                <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                                                Confío en mi capacidad para aprender y me valoro.
                                                            </div>
                                                        </td>
                                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex center-center">
                                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </td>
                                                        <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex center-center">
                                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </td>
                                                        <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex center-center">
                                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </td>
                                                        <td className={"bgc-white rounded-te-10  min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex center-center">
                                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </td>
                                                    </tr>


                                                    <tr>
                                                        <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-15 text-start p-0 m-0 border-style-solid border-bottom-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                                                                <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                                                Confío en mis compañeros y me ayudan cuando lo necesito.
                                                            </div>
                                                        </td>
                                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex center-center">
                                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </td>
                                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex center-center">
                                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </td>
                                                        <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex center-center">
                                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </td>
                                                        <td className={"bgc-white rounded-be-10   f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-bottom-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                            <div className="d-flex center-center">
                                                                <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* END TABLE */}



                            </div>







                        </div>
                    </div>












                    {/* PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                            ABP &copy; SM
                        </div>
                        <div className="bgc-misty wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
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
                        <div className="col-1 col-md-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className="col-1 col-md-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className="col-7 col-md-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                            <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-saitama"></div>
                        </div>
                        <div className="col-1 col-md-2 p-0 m-0 position-relative">
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

export default Page058;
