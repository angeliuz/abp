import React from "react";
import InputBox from "../components/InputBox";
// import ModalVideo from "../components/ModalVideo";
import "./page_047.css";

function Page047(props) {

    const pagina = "047";
    var indexInput = 0;

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    <div className="cabecera-v1 hp-80 bgc-pidgey"></div>
                    {/* END CABECERA VERSIÓN 2 */}

                    <div className="ptp-10 psp-20 pep-40">
                        {/* <div className="f-Ubuntu-B fsp-18 color-pidgey text-start lhp-20 psp-35">Antes de partir…</div> */}
                        <div className="d-flex">
                            <img className="hp-15 mtp-20 pep-10" src="images/page_047/i_g.svg" alt="" />
                            <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey pep-10">3</div>
                            <div className="f-Ubuntu-R fsp-14 text-start pep-10 mtp-15">Compartimos en grupo las situaciones que hemos imaginado.<br />Reflexionamos a partir de las siguientes preguntas:</div>
                            {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/page_033/revista.png" clasesImagen="hp-35 mtp-10" /> */}
                        </div>
                    </div>

                    <div className="ptp-10 psp-70 pep-60 mbp-0 position-relative">
                        <div className="row">
                            <div className="col-11 p-2 m-0 position-relative">
                                <div className="position-absolute top-100 start-100 translate-middle"><img src="images/page_047/bici.png" className="hp-120 mep-15 mtp--105" alt="" /></div>
                                <div className="rounded-p-10 bgc-white border-style-solid border-color-ken border-1">
                                    <div className="f-Ubuntu-R fsp-14 p-2 bgc-kai rounded-ts-be-10 lh-sm min-hp-45 d-flex align-items-center justify-content-start text-start wp-320">¿Qué desafíos de convivencia escolar presentan cada uno de los integrantes?</div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-340 mep-10 msp-10" />
                                </div>
                            </div>
                            <div className="col-11 p-2 m-0 ms-auto">
                                <div className="rounded-p-10 bgc-white border-style-solid border-color-android18 border-1">
                                    <div className="f-Ubuntu-R fsp-14 p-2 bgc-azuka rounded-te-bs-10 lh-sm min-hp-45 d-flex align-items-center justify-content-start text-start wp-320 ms-auto">¿La buena convivencia requiere de esfuerzo y aprendizaje? ¿Por qué?</div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-340 mep-10 msp-10" />
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

export default Page047;
