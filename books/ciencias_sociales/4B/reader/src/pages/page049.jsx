import React from "react";
import InputBox from "../components/InputBox";
import SeleccionTexto from '../components/SeleccionTexto';

import "./page_049.css";

function Page049(props) {

    const pagina = "049";
    var indexInput = 0;

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    <div className="cabecera-v2 bgc-pidgey d-flex flex-column">
                        <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
                            <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-pidgey fsp-24 f-IntroRustG-Base">SESIÓN 11</div>
                            <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Valorar la convivencia escolar</div>
                        </div>
                    </div>
                    {/* END CABECERA VERSIÓN 2 */}

                    <div className="ptp-10 psp-65 pep-40">
                        <div className="f-Ubuntu-B fsp-17 color-pidgey text-start lhp-20 psp-0">Una nueva invitación</div>
                        <div className="d-flex">
                            {/* <img className="hp-15 mtp-20 pep-10" src="images/page_047/i_g.svg" alt="" /> */}
                            <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey pep-10">1</div>
                            <div className="f-Ubuntu-R fsp-14 text-start pep-10 mtp-15">Leo la invitación. Luego, destaco las principales ideas.</div>
                            {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/page_033/revista.png" clasesImagen="hp-35 mtp-10" /> */}
                        </div>
                    </div>

                    <div className="d-flex psp-80 pep-100">
                        <div className="row w-100 p-0 m-0">
                            <div className="col-12">
                                <div className="w-100 psp-40 ptp-20 pbp-20 pep-15 bgc-white border-style-solid border-5 border-color-sid position-relative rounded-p-20">
                                    <div className="position-absolute top-50 start-100 translate-middle"><img src="images/page_049/lupa.png" className="hp-60 mep--15 mtp-40" alt="" /></div>
                                    <div className="position-absolute top-50 start-0 translate-middle h-100 ptp-10 pbp-10"><div className="espiral wp-30 h-100"></div></div>
                                    <div className="f-Ubuntu-L fsp-14">
                                        <SeleccionTexto
                                            id={"seleccionTexto_" + pagina + "_" + (indexInput += 1)}
                                            classNameContenedor="w-100 psp-0 pep-0 position-relative"
                                            classNameTexto="w-100 f-Ubuntu-L fsp-14 text-start ptp-0"
                                            texto={"Querido cuarto básico:<p></p> La convivencia no solo es una tarea de cada uno, también es un compromiso colectivo. Para llevarlo a cabo, debemos conversar entre todos acerca de la convivencia escolar y sus desafíos.<p></p>Los invitamos a prepararse junto a sus equipos de trabajar para realizar una jornada de diálogo. Se llamará “Conversamos sobre nuestra convivencia”. Es importante que todos participen. Así conoceremos las reflexiones de cada uno sobre este tema.<p></p>"}

                                        />
                                        {/* <div className="text-start">Querido cuarto básico:<br /></div>
                                        <div className="text-start mtp-5">La convivencia no solo es una tarea de cada uno, también es un compromiso colectivo. Para llevarlo a cabo, debemos conversar entre todos acerca de la convivencia escolar y sus desafíos.<br /></div>
                                        <div className="text-start mtp-5">Los invitamos a prepararse junto a sus equipos de trabajar para realizar una jornada de diálogo. Se llamará “Conversamos sobre nuestra convivencia”. Es importante que todos participen. Así conoceremos las reflexiones de cada uno sobre este tema.<br /></div> */}

                                        <div className="text-center">¡Prepara junto a tu equipo esta jornada de diálogo!</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ptp-20 psp-20 pep-40">
                        <div className="f-Ubuntu-B fsp-17 color-pidgey text-start lhp-20 psp-45">Hacemos un diagnóstico de nuestra convivencia escolar</div>
                        <div className="d-flex">
                            <img className="hp-15 mtp-20 pep-10" src="images/page_047/i_g.svg" alt="" />
                            <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey pep-10">2</div>
                            <div className="f-Ubuntu-R fsp-14 text-start pep-10 mtp-15 w-70">A partir de lo realizado previamente, hacemos una lluvia de ideas:<br />¿Qué podemos mejorar en nuestra convivencia como curso?</div>
                            {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/page_033/revista.png" clasesImagen="hp-35 mtp-10" /> */}
                        </div>
                    </div>

                    <div className="d-flex ptp-20 psp-70 pep-50 pbp-60">
                        <div className="row w-100 p-0 m-0">
                            <div className="col-12">
                                <div className="w-100 text-left bgc-urien border-style-solid border-3 border-color-goku position-relative rounded-p-10 ptp-20 pbp-5">
                                    <div className="position-absolute top-0 start-100 translate-middle"><img src="images/page_049/mono.png" className="hp-80 msp--80 mtp--75" alt="" /></div>
                                    <div className="position-absolute top-0 start-0 translate-middle"><img src="images/page_049/cartel.svg" className="hp-50 msp-90 mtp-5" alt="" /></div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-320 mep-10 msp-10" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
                        <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
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
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_experimentacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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
                </div>
            </div>
        </div>
    );
}

export default Page049;
