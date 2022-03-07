import React from "react";
import InputBox from "../components/InputBox";

import "./page_010.css";

function Page010(props) {

    const pagina = "010";
    var indexInput = 0;

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white cb-page9 overflow-hidden position-relative" id={"page_" + pagina}>
                    <div className="cabecera-v1 hp-80 bgc-goten">

                    </div>
                    <div className=" container-titulo-global mbp-∫0">
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
                            <div className="f-ccdigitaldelivery-bold fsp-35 color-goten">4</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Conformamos un equipo de trabajo. Luego, acordamos un nombre para nuestra brigada y nuestra misión en el colegio.</div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.jpg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>
                    <div className="cb-ejercicioinicial-p10 mtp-20 mbp-40 position-relative">
                        <img src="images/page_010/img_001.png" className="cb-sol-p10"></img>
                        <div className="cb-ejercicio-nombre d-flex mbp-20">
                            <div className="cb-nombre juttify-contente-center align-items-center d-flex bgc-marcianos psp-40 pep-40 ptp-40 pbp-40 f-Ubuntu-L fsp-15 ">Nombre</div>
                            <div className="cb-nombre-blanco w-100">
                                <div className="psp-15 psp-5">
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-center flex-grow-1 lhp-35 min-hp-100 mxw-70 fsp-24" />
                                </div>
                            </div>
                        </div>
                        <div className="cb-ejercicio-mision d-flex">
                            <div className="cb-mision juttify-contente-center align-items-center d-flex bgc-shogun psp-45 pep-45 ptp-40 pbp-40 f-Ubuntu-L fsp-15">Misión</div>
                            <div className="cb-mision-blanco w-100">
                                <div className="psp-15 psp-5">
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-center flex-grow-1 lhp-35 min-hp-100 mxw-70 fsp-18" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bgc-genos cb-to-goten pbp-120 position-relative">
                        <img src="images/page_010/img_002.png" className="cb-personaje-p10"></img>
                        <div className="cb-ejercicio-final-p10 mtp-30 f-pixilate-bold text-start">¿Cómo voy?</div>
                        <div className="cb-ejercicio-final-p10 p-2 pb-3 f-Ubuntu-L bgc-white fsp-15 rounded-p-10 ps-4">
                            <div className="d-flex w-100 align-items-center mbp-15">
                                <img src="images/page_010/arrow.svg" className="mep-5 cb-flecha"></img>
                                <span className="triangulo text-start">¿Qué aprendí hoy nuevo e interesante?</span>
                            </div>
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130" />

                            <div className="d-flex w-100 align-items-center mbp-15">
                                <img src="images/page_010/arrow.svg" className="mep-5 cb-flecha"></img>
                                <span className="triangulo">¿Qué debería preguntar para entender mejor el desafío?</span>
                            </div>
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130" />
                        </div>


                        <div className="cb-ejercicio-final-p10 tp-30 f-pixilate-bold text-start mtp-30">¿Cómo me siento?</div>
                        <div className="cb-ejercicio-final-p10 p-2 pb-2 f-Ubuntu-L bgc-white fsp-15 rounded-p-10 ps-4">
                            <div className="d-flex w-100 align-items-center mbp-15">
                                <img src="images/page_010/arrow.svg" className="mep-5 cb-flecha"></img>
                                <span className="triangulo text-start">¿Cómo me siento ante el desafío?</span>
                            </div>
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130" />
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
                        <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_motivacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page010;
