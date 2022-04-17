import React from "react";
import { useEffect, useState, useRef } from "react";
import SeleccionTexto from '../components/SeleccionTexto';


import "./page_007.css";


function Page007() {

    const pagina = "007";
    var indexInput = 0;
    const etapa = "1"
    const background = "bgc-goten";
    const color = "color-goten";
    const borderColor = "border-color-goten"
    const borderColorTabla = "border-color-genos"
    const bgc_cajas = "bgc-genos";


    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    <div className={"cabecera-v2 d-flex flex-column " + background}>
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base " + color}>SESIÓN 3</div>
                            <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Este es nuestro plan!</div>
                        </div>

                    </div>
                    {/* END CABECERA VERSIÓN 2 */}

                    <div className="container-titulo-global mtp-20 mbp-40">
                        <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            xxx
                        </div>
                        <div className="d-flex psp-20">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                X
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Selección
                            </div>

                        </div>
                    </div>

                    <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">

                                {/* <SeleccionTexto
                                    id={"seleccionTexto_" + pagina + "_" + (indexInput += 1)}
                                    image={"images/page_" + pagina + "/encierra.svg"}
                                    classNameContenedor="w-100 psp-60 pep-60 position-relative"
                                    classNameTexto="f-Ubuntu-L fsp-17 text-start"
                                    texto={"Estimados estudiantes:"}
                                    textoSubrayado={"Estimados estudiantes:"}

                                >

                                </SeleccionTexto> */}

                                <SeleccionTexto
                                    id={"seleccionTexto_" + pagina + "_" + (indexInput += 1)}
                                    image={"images/page_" + pagina + "/encierra.svg"}
                                    classNameContenedor="w-100 psp-60 pep-60 position-relative"
                                    classNameTexto="w-100 f-Ubuntu-L fsp-17 text-start ptp-10"
                                    texto={"Estimados estudiantes: <br/><br/> Al inicio de este proyecto, junto con sus equipos propusieron ideas de acciones para enseñar a su comunidad en la feria <i>Héroes del medioambiente</i>. Ha llegado el momento de que se organicen, reflexionen sobre estas ideas y propongan otras nuevas si es necesario. Luego, deberán elegir como equipo cuál de ellas van a desarrollar. <br /><br />Reúnanse con sus respectivos equipos y organicen lo necesario para crear un <b>modelo</b> que represente la acción de reciclaje o reutilización, una <b>infografía</b> que explique en qué consiste y <b>decoraciones</b> para el stand. Luego, piensen en todos los materiales que necesitan para desarrollar esas ideas. <br /><br />Ya están muy cerca de lograr el desafío. ¡Ánimo!<br/><br />Atentamente, Javiera."}

                                >

                                </SeleccionTexto>
                                {/* <SeleccionTexto
                                    id={"seleccionTexto_" + pagina + "_" + (indexInput += 1)}
                                    image={"images/page_" + pagina + "/encierra.svg"}
                                    classNameContenedor="w-100 psp-60 pep-60 position-relative"
                                    classNameTexto="f-Ubuntu-L fsp-17 text-start ptp-10"
                                    texto={"Reúnanse con sus respectivos equipos y organicen lo necesario para crear un <b>modelo</b> que represente la acción de reciclaje o reutilización, una <b>infografía</b> que explique en qué consiste y <b>decoraciones</b> para el stand. Luego, piensen en todos los materiales que necesitan para desarrollar esas ideas."}
                                    textoSubrayado={"Reúnanse con sus respectivos equipos y organicen lo necesario para crear un modelo que represente la acción de reciclaje o reutilización, una infografía que explique en qué consiste y decoraciones para el stand. Luego, piensen en todos los materiales que necesitan para desarrollar esas ideas."}
                                >

                                </SeleccionTexto> */}
                                {/* <SeleccionTexto
                                    id={"seleccionTexto_" + pagina + "_" + (indexInput += 1)}
                                    image={"images/page_" + pagina + "/encierra.svg"}
                                    classNameContenedor="w-100 psp-60 pep-60 position-relative"
                                    classNameTexto="f-Ubuntu-L fsp-17 text-start ptp-10"
                                    texto={"Ya están muy cerca de lograr el desafío. ¡Ánimo!"}
                                    textoSubrayado={"Ya están muy cerca de lograr el desafío. ¡Ánimo!"}
                                >

                                </SeleccionTexto> */}
                                {/* <SeleccionTexto
                                    id={"seleccionTexto_" + pagina + "_" + (indexInput += 1)}
                                    image={"images/page_" + pagina + "/encierra.svg"}
                                    classNameContenedor="w-100 psp-60 pep-60 position-relative"
                                    classNameTexto="f-Ubuntu-L fsp-17 text-end ptp-10"
                                    texto={"Atentamente, Javiera."}
                                    textoSubrayado={"Atentamente, Javiera."}
                                >

                                </SeleccionTexto> */}


                            </div>
                        </div>
                    </div>




                </div>
            </div>
        </div>

    );
}

export default Page007;