import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_035.css";

function Page035(props) {

    const pagina = "035";
    var indexInput = 0;
    const etapa = "3"
    const background = "bgc-android18";
    const color = "color-android18";
    const colorSesion = "color-primary";
    const borderColor = "border-color-android18"
    const bgc_cajas = "bgc-goku";

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    <div className={"cabecera-v2 d-flex flex-column " + background}>
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"}>SESIÓN 9</div>
                            <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Hacemos una infografía</div>
                        </div>
                        <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-0 pep-0 align-self-center justify-content-between w-95">
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Mis objetivos en <br /> esta sesión son:
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Seleccionar<br />el tema de la<br />infografía
                            </div>
                            <div className="psp-5 pep-5 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Organizar las<br />ideas y hacer<br />un boceto
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Elaborar la<br />infografía
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="psp-5 pep-5 ptp-10 pbp-10 position-relative align-self-center f-colby-compres-bold fsp-17 lh-sm text-center color-dark">
                                <div className="position-absolute top-0 start-0 w-100 h-100">
                                    <img src="images/cabecera/caja_blanca.png" width="100%" height="100%" alt="" />
                                </div>
                                <div className="position-relative">
                                    Valorar cómo se<br />trabaja en equipo<br />y cómo se puede<br />mejorar
                                </div>
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>

                            <div className="psp-5 pep-5 ptp-10 pbp-10 position-relative align-self-center f-colby-compres-bold fsp-17 lh-sm text-center color-dark">
                                <div className="position-absolute top-0 start-0 w-100 h-100">
                                    <img src="images/cabecera/caja_blanca.png" width="100%" height="100%" alt="" />
                                </div>
                                <div className="position-relative">
                                    Registrar qué de lo<br />investigado se usará<br />para continuar con<br />el desafío
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END CABECERA VERSIÓN 2 */}

                    <div className="ptp-30 container-titulo-global mbp-0">
                        <div className="d-flex psp-20">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_003.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                1
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Elaboramos una infografía para comunicar al menos uno de los temas trabajados durante la etapa de investigación.
                            </div>
                            {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="psp-100 pep-60 ptp-20">
                        <div className="row w-100">
                            <div className="col-md-6 position-relative pbp-30 ">

                                <div className="d-flex pbp-20">
                                    <div className={"f-Ubuntu-B fsp-21 mtp--6 " + color}>
                                        a.
                                    </div>
                                    <div className="f-Ubuntu-R fsp-16 psp-10 pep-10 text-start">
                                        Seleccionamos el o los temas.
                                    </div>
                                </div>

                                <div className="giro--2deg">
                                    <div className="p-1 bgc-ryu sombra-2 giro-2deg">
                                        <div className="p-1 bgc-ryu sombra-2 giro--3deg">
                                            <div className="bgc-white sombra-2 p-3 giro-3deg ">
                                                <div className="row pbp-20">

                                                    <div className="ptp-10 pbp-10 psp-20">
                                                        <div className="d-flex">
                                                            <div className="cuadrado-p35 bgc-white border-style-solid border-1 border-color-dark">
                                                                <InputBox
                                                                    id={"p" + pagina + "_input" + (indexInput += 1)}
                                                                    className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                                                                />
                                                            </div>
                                                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                                                                Energía renovable.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ptp-10 pbp-10 psp-20">
                                                        <div className="d-flex">
                                                            <div className="cuadrado-p35 bgc-white border-style-solid border-1 border-color-dark">
                                                                <InputBox
                                                                    id={"p" + pagina + "_input" + (indexInput += 1)}
                                                                    className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                                                                />
                                                            </div>
                                                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                                                                Energía no renovable.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ptp-10 pbp-10 psp-20">
                                                        <div className="d-flex">
                                                            <div className="cuadrado-p35 bgc-white border-style-solid border-1 border-color-dark">
                                                                <InputBox
                                                                    id={"p" + pagina + "_input" + (indexInput += 1)}
                                                                    className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                                                                />
                                                            </div>
                                                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                                                                Sostenibilidad.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ptp-10 pbp-10 psp-20">
                                                        <div className="d-flex">
                                                            <div className="cuadrado-p35 bgc-white border-style-solid border-1 border-color-dark">
                                                                <InputBox
                                                                    id={"p" + pagina + "_input" + (indexInput += 1)}
                                                                    className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                                                                />
                                                            </div>
                                                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                                                                Huella ecológica.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ptp-10 pbp-10 psp-20">
                                                        <div className="d-flex">
                                                            <div className="cuadrado-p35 bgc-white border-style-solid border-1 border-color-dark">
                                                                <InputBox
                                                                    id={"p" + pagina + "_input" + (indexInput += 1)}
                                                                    className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                                                                />
                                                            </div>
                                                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                                                                Soluciones energéticas.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ptp-10 pbp-10 psp-20">
                                                        <div className="d-flex">
                                                            <div className="cuadrado-p35 bgc-white border-style-solid border-1 border-color-dark">
                                                                <InputBox
                                                                    id={"p" + pagina + "_input" + (indexInput += 1)}
                                                                    className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                                                                />
                                                            </div>
                                                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                                                                Aparatos tecnológicos.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ptp-10 pbp-10 psp-20">
                                                        <div className="d-flex">
                                                            <div className="cuadrado-p35 bgc-white border-style-solid border-1 border-color-dark">
                                                                <InputBox
                                                                    id={"p" + pagina + "_input" + (indexInput += 1)}
                                                                    className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                                                                />
                                                            </div>
                                                            <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                                                                Sistemas tecnológicos.
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="position-absolute top-50 start-0 translate-middle msp--20 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-80" alt="" /></div>
                            </div>
                            <div className="col-md-6 position-relative pbp-20">
                                <div className="d-flex psp-20 pbp-20">
                                    <div className={"f-Ubuntu-B fsp-21 mtp--6 " + color}>
                                        b.
                                    </div>
                                    <div className="f-Ubuntu-R fsp-16 psp-10 pep-10 text-start">
                                        Identificamos el objetivo de la infografía.
                                    </div>
                                </div>
                                <div className="d-flex psp-30 pbp-20">
                                    <div className="cuadrado-p35 bgc-white border-style-solid border-1 border-color-dark">
                                        <InputBox
                                            id={"p" + pagina + "_input" + (indexInput += 1)}
                                            className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                                        />
                                    </div>
                                    <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                                        Pegarla en la sala.
                                    </div>
                                </div>
                                <div className="d-flex psp-30 pbp-20">
                                    <div className="cuadrado-p35 bgc-white border-style-solid border-1 border-color-dark">
                                        <InputBox
                                            id={"p" + pagina + "_input" + (indexInput += 1)}
                                            className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                                        />
                                    </div>
                                    <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                                        Utilizarla en la difusión.
                                    </div>
                                </div>

                                <div className="d-flex psp-30 pbp-10">
                                    <div className="cuadrado-p35 bgc-white border-style-solid border-1 border-color-dark position-relative">
                                        <InputBox
                                            id={"p" + pagina + "_input" + (indexInput += 1)}
                                            className="p-0 px-1 text-start flex-grow-1 hp-25 min-hp-25"
                                        />

                                    </div>
                                    <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                                        Otro:
                                    </div>
                                </div>
                                <div className="w-100 psp-30 pep-30">
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                                </div>
                                <div className="bottom-0 start-50 translate-middle msp-150 mtp-80 visible-768 absolute-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-100" alt="" /></div>
                            </div>
                        </div>
                    </div>
                    <div className="psp-60 pep-60">
                        <div className="d-flex psp-20 pbp-20">
                            <div className={"f-Ubuntu-B fsp-21 mtp--6 " + color}>
                                c.
                            </div>
                            <div className="f-Ubuntu-R fsp-16 psp-10 pep-10 text-start">
                                Nos organizamos para elaborar la infografía.
                            </div>
                        </div>
                    </div>

                    <div className="psp-60 pep-60 ">
                        <div className="w-100 bgc-tshinhan rounded-p-20 position-relative">
                            <div className="w-100 row psp-30 pep-20 pbp-20">
                                <div className="col-md-6 col-12 position-relative ptp-60">
                                    <div className="bgc-white rounded-p-5 pep-10">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                                        <div className="position-absolute top-0 start-50 msp--50 mtp-28 bgc-bulma psp-20 pep-20 ptp-5 pbp-2 rounded-set-10">
                                            <div className="f-Ubuntu-B color-white">Tareas</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 position-relative ptp-60">
                                    <div className="bgc-white rounded-p-5 psp-10">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                                        <div className="position-absolute top-0 start-50 msp--90 mtp-28 bgc-bulma psp-20 pep-20 ptp-5 pbp-2 rounded-set-10">
                                            <div className="f-Ubuntu-B color-white">¿Quién se encarga?</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="position-absolute top-0 start-100 translate-middle msp--40 mtp-0  zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-100" alt="" /></div>
                        </div>
                    </div>

                    <div className="pbp-100"></div>





                    {/* BEGIN PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                            ABP &copy; SM
                        </div>
                        <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

                        <div className={etapa == 1 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className={etapa == 2 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className={etapa == 3 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className={etapa == 4 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className={etapa == 5 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-saitama"></div>
                        </div>
                        <div className={etapa == 6 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
                            <img src="images/rotulo_difusion.svg" className={etapa == 6 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
                            <div className="w-100 hp-25 bgc-pikachu"></div>
                        </div>
                    </div>
                    {/* END PIE DE PAGINA */}

                </div>
            </div>
        </div >
    );
}

export default Page035;
