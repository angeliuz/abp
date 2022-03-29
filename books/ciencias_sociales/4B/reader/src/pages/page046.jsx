import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_046.css";

function Page046(props) {

    const pagina = "046";
    var indexInput = 0;

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    <div className="cabecera-v1 hp-80 bgc-pidgey"></div>
                    {/* END CABECERA VERSIÓN 2 */}

                    <div className="ptp-10 psp-60 pep-60 mbp-0 position-relative">
                        {/* <div className="position-absolute top-50 start-100 translate-middle"><img src="images/page_045/mono.png" className="hp-130 msp--300 mtp-40" alt="" /></div> */}
                        <div className="f-Ubuntu-B fsp-17 color-pidgey text-start lhp-20">Compartimos y reflexionamos</div>
                        <div className="d-flex">
                            <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">2</div>
                            <div className="f-Ubuntu-R fsp-14 ptp-18 psp-10 text-start">Con un compañero de mi equipo, comparto mi representación imaginaria completando el siguiente esquema.</div>
                        </div>
                    </div>

                    <div className="ptp-10 psp-100 pep-80 mbp-0 position-relative">
                        <div className="row justify-content-center">
                            <div className="col-9 p-0 m-0 position-relative">
                                <div className="position-absolute top-0 start-100 translate-middle"><img src="images/page_046/clip.png" className="hp-25 mep-0 mtp-45" alt="" /></div>
                                <div className="bgc-jugador001 border-style-solid border-color-goku border-1 box-shadow-simple">
                                    <div className="f-Ubuntu-R fsp-14 p-1 lh-sm d-flex align-items-center justify-content-center">¿Sobre qué vamos a reflexionar?</div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-75 mep-10 msp-10" />
                                </div>
                            </div>
                            <div className="col-12 pe-1 ps-1 pb-1 pt-0 m-0 position-relative">
                                <div className="position-absolute top-0 start-0 translate-middle"><img src="images/page_046/mono.png" className="hp-80 msp-100 mtp--70" alt="" /></div>
                                <div className="position-absolute top-100 start-0 translate-middle zindex-2"><img src="images/page_046/espiral.svg" className="hp-35 msp-80 mtp-0" alt="" /></div>
                                <div className="position-absolute top-100 start-100 translate-middle zindex-2"><img src="images/page_046/espiral.svg" className="hp-35 mep-80 mtp-0" alt="" /></div>
                                <div className="rounded-p-15 bgc-white border-style-solid border-color-bulma border-2">
                                    <div className="f-Ubuntu-B fsp-14 p-1 bgc-bulma rounded-set-10 text-white lh-sm min-hp-45 d-flex align-items-center justify-content-center">Lo que pienso</div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150 mep-10 msp-10" />
                                </div>
                            </div>
                            <div className="col-12 p-1 m-0 position-relative">
                                <div className="position-absolute top-100 start-0 translate-middle zindex-2"><img src="images/page_046/espiral.svg" className="hp-35 msp-80 mtp-0" alt="" /></div>
                                <div className="position-absolute top-100 start-100 translate-middle zindex-2"><img src="images/page_046/espiral.svg" className="hp-35 mep-80 mtp-0" alt="" /></div>
                                <div className="rounded-p-15 bgc-white border-style-solid border-color-android18 border-2">
                                    <div className="f-Ubuntu-B fsp-14 p-1 bgc-android18 rounded-set-10 text-white lh-sm min-hp-45 d-flex align-items-center justify-content-center">¿Qué piensa mi compañero?</div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150 mep-10 msp-10" />
                                </div>
                            </div>
                            <div className="col-12 p-1 m-0 position-relative">
                                <div className="position-absolute top-100 start-100 translate-middle"><img src="images/page_046/mono1.jpg" className="hp-150 mep-15 mtp-70" alt="" /></div>
                                <div className="rounded-p-15 bgc-white border-style-solid border-color-ken border-2">
                                    <div className="f-Ubuntu-B fsp-14 p-1 bgc-ken rounded-set-10 text-white lh-sm min-hp-45 d-flex align-items-center justify-content-center">¿Qué compartiremos con los demás?</div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150 mep-10 msp-10" />
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

export default Page046;
