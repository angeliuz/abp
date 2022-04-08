import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import Check from "../components/Check";

import "./page_071.css";

function Page071(props) {

    const pagina = "071";
    var indexInput = 0;
    const etapa = "6"
    const background = "bgc-pikachu";
    const color = "color-pikachu";
    const borderColor = "border-color-pikachu"
    const borderColorTabla = "border-color-kokomi"
    const bgc_cajas = "bgc-kokomi";
    return (


        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
                    <img src="images/cabecera/dosier_e6.svg" className="w-100" alt="" />
                    <div className="position-relative w-100">
            <div className="row psp-80 pep-70 ptp-10 pbp-50 ">
              <div className="f-Ubuntu-R text-start msp-40 fsp-18 psp-30 pbp-10">
                Esta página fue completada por:
              </div>
              <div className="d-flex position-relative">
                <div className={"bgc-white rounded-p-10 border-style-solid border-1 " + borderColor + " w-100 py-1 psp-50 pep-20"}>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 w-60 lhp-35 min-hp-35" />
                </div>
              </div>
            </div>

            <div className="position-absolute top-0 start-100 hoja-p39 zindex-2">
              <div className="position-relative bgc-white border-style-solid border-1 border-dark wp-250 hp-200 d-flex flex-column p-2 giro--4deg sombra-1">
                <div className=" mxwp-160 centrar-hor f-pixilate-regular fsp-21">Dibuja aquí la insignia de tu equipo</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-25 min-hp-35" />
                <div className="position-absolute top-0 start-100 translate-middle msp--30 mtp-17 zindex-1"><img src={"images/page_" + pagina + "/clip.svg"} className="wp-30" alt="" /></div>
                <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--20 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-30" alt="" /></div>
              </div>
            </div>
            <div className="position-absolute top-0 start-0 translate-middle msp-80 mtp-70 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-80" alt="" /></div>
          </div>
          <div className="espaciado-p39"></div>

                    {/* BEGIN TABLE */}
                    <div className="global-margin mbp-10 mtp-60 psp-0 pep-0 ptp-10 pbp-10  f-Ubuntu-L fsp-13 rounded-p-10 ">
                        <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-0">
                            {/* <span className="w-24 f-Ubuntu-L mtp-5 mbp-10">Marco con un <img src="images/generales/ticket.svg" className="hp-17 mtp--3 msp-5 mep-5" alt=""/>el recuadro que mejor me represente.</span> */}
                            <div className="w-100 p-0 pb-3 position-relative">
                                <div className="position-absolute top-0 start-0 msp-10 mtp--5 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo hemos trabajado en equipo?</div>
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
                                            <td className={"bgc-white rounded-ts-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 ">
                                                    <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                                    Nos involucramos en las tareas y nos hacemos responsables de ellas.
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 rounded-1">
                                                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 rounded-1">
                                                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 rounded-1">
                                                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white rounded-te-10  min-hp-100 p-0 m-0 border-style-solid border-top-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 rounded-1">
                                                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>

                                            <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                                                    <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                                    Nos ayudamos mutuamente antes de preguntar al profesor.
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 rounded-1">
                                                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 rounded-1">
                                                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 rounded-1">
                                                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 rounded-1">
                                                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10 bgc-white ">
                                                    <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                                    Respetamos los turnos para hablar.
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 rounded-1">
                                                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 rounded-1">
                                                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 rounded-1">
                                                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 rounded-1">
                                                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={"bgc-white rounded-bs-10 f-Ubuntu-L fsp-14 text-start p-0 m-0 border-style-solid border-bottom-hidden border-left-hidden border-right-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex align-items-start psp-10 pep-10 ptp-10 pbp-10">
                                                    <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mep-5 mtp-3 wp-15" alt="" />
                                                    Escuchamos todas las opiniones y llegamos a acuerdos..
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 rounded-1">
                                                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 rounded-1">
                                                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-right-hidden border-bottom-hidden border-2 " + borderColorTabla}>
                                                <div className="d-flex center-center">
                                                    <div className="wp-30 hp-30 rounded-1">
                                                    <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={"bgc-white rounded-be-10   f-Ubuntu-L fsp-12 text-start p-0 m-0 border-style-solid border-left-hidden border-bottom-hidden border-right-hidden border-2 " + borderColorTabla}>
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
                    {/* END TABLE */}
                    {/* BEGIN EJERCICIO 2 */}

                    <div className="msp-60 mep-60 mbp-70">
                        <div className="p-0 m-0">
                            <div className="text-start mbp-10 f-Ubuntu-R fsp-15 position-relative">Reconocemos nuestras dificultades y logros.</div>
                            <div className="position-absolute top-50 start-100 translate-middle msp--90 mtp-75 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-60" alt="" /></div>
                            <div className="row mtp-10 d-flex mbp-10">
                                <div className="col-sm-12 col-md-6 mbp-10">
                                    <div className="text-start w-100 bgc-palpatine rounded-p-10 pep-10 psp-10 pbp-10">
                                        <div className="f-Ubuntu-R fsp-15 hp-50 pep-20 psp-20 ptp-10 pbp-10 d-flex justify-content-start align-items-center color-white fw-700">
                                            Lo que más nos costó fue:
                                        </div>
                                        <div className="psp-15 pep-15 bgc-white rounded-p-10">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="text-start w-100 bgc-saitama rounded-p-10 pep-10 psp-10 pbp-10">
                                        <div className="f-Ubuntu-R fsp-15 hp-50 pep-20 psp-20  ptp-10 pbp-10 d-flex justify-content-start align-items-center color-white fw-700">
                                            Lo que nos resultó más fácil fue:
                                        </div>
                                        <div className="psp-15 pep-15 bgc-white rounded-p-10">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mtp-10 d-flex">
                                <div className="col-sm-12 col-md-6 mbp-10">
                                    <div className="text-start w-100 bgc-ken rounded-p-10 pep-10 psp-10 pbp-10">
                                        <div className="f-Ubuntu-R fsp-15 hp-50 pep-20 psp-20 ptp-10 pbp-10 d-flex justify-content-start align-items-center color-white fw-700">
                                            Podemos seguir mejorando en:
                                        </div>
                                        <div className="psp-15 pep-15 bgc-white rounded-p-10">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="text-start w-100 bgc-obiwan rounded-p-10 pep-10 psp-10 pbp-10">
                                        <div className="f-Ubuntu-R fsp-15 hp-50 pep-20 psp-20 ptp-10 pbp-10 d-flex justify-content-start align-items-center color-white fw-700">
                                            Nuestro principal logro fue:
                                        </div>
                                        <div className="psp-15 pep-15 bgc-white rounded-p-10">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130" />
                                        </div>
                                    </div>
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

export default Page071;
