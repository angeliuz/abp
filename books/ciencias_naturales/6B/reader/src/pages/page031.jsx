import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_031.css";

function Page031(props) {

    const pagina = "031";
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
                    {/* <div className={"cabecera-v2 d-flex flex-column " + background}>
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base " + colorSesion}>SESIÓN 6</div>
                            <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Entrevistamos, nos conocemos,
                                nos respetamos</div>
                        </div>

                    </div> */}
                    {/* END CABECERA VERSIÓN 2 */}
                    <div className="cabecera-v1 hp-80 bgc-android18">
                    </div>

                    <div className="ptp-30 container-titulo-global mbp-20">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Lo que sé del tema</div> */}
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_002.svg"} alt="" /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>3</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Investigo las características de mi localidad para buscar soluciones para el uso de
                                energías renovables en el colegio. Luego, completo el esquema con metáforas.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_002.jpg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="d-flex global-margin mtp-0 mbp-50 psp-0 pep-0 ptp-0 pbp-0 position-relative hp-500 f-Ubuntu-L  fsp-16">
                        <div className="position-absolute top-0 start-100 translate-middle mtp-90 msp--70 zindex-2 visible-768"><img src="images/page_031/img_001.png" className="" alt="" /></div>
                        {/* <div className="position-absolute top-100 start-100 translate-middle msp--90 zindex-2 visible-768"><img src="images/page_022/img_004.png" className="" alt="" /></div> */}
                        {/* <div className="position-absolute top-50 start-0 translate-middle  zindex-2 msp-80 visible-768"><img src="images/page_022/img_003.png" className="" alt="" /></div> */}
                        <div className="position-absolute top-50 start-50 translate-middle msp-0 mtp-60 zindex-1"><img src={"images/page_" + pagina + "/img_002.svg"} className="wp-560" alt="" /></div>

                        {/* <div className="position-absolute top-50 start-50 translate-middle msp--60 mtp--120 zindex-1">
                            <div className="d-flex ">
                                <div className="bgc-pidgey wp-120 f-Ubuntu-R fsp-15 mep-30 ptp-2 pbp-2 rounded-p-10 align-self-end color-white">Energía limpia</div>
                            </div>

                        </div> */}

                        <div className="position-absolute top-50 start-50 translate-middle msp-90 mtp--120 zindex-1">
                            {/* <div className="d-flex ">
                                <div className="bgc-pidgey wp-120 f-Ubuntu-R fsp-15 mep-30 ptp-2 pbp-2 rounded-p-10 align-self-end color-white">Energía sucia</div>
                            </div> */}

                        </div>

                        {/* <div className="position-absolute top-100 start-50 translate-middle zindex-1 msp--100 mtp--75">
                            <div className="d-flex ">
                                <div className="bgc-pidgey wp-120 f-Ubuntu-R fsp-15 mep-30 ptp-2 pbp-2 rounded-p-10 align-self-end color-white">Conclusión</div>
                            </div>

                        </div> */}

                        <div className="position-absolute top-50 start-50 translate-middle msp--150 mtp--90 zindex-1 ">
                            <div className="d-flex flex-column wp-250 psp-20 pep-10 ptp-0 pbp-0 rotate--40">

                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-70 overflow-auto" />
                            </div>
                        </div>

                        <div className="position-absolute top-50 start-50 translate-middle zindex-1 mtp--110 msp-120">
                            <div className="d-flex flex-column wp-250 psp-20 pep-10 ptp-0 pbp-0 rotate-40">

                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-70 overflow-auto" />
                            </div>
                        </div>

                        <div className="position-absolute top-50 start-50 translate-middle  zindex-1 msp--200 mtp-140">
                            <div className="d-flex flex-column wp-250 psp-10 pep-10 ptp-0 pbp-0 rotate-70">

                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-70 overflow-auto" />
                            </div>
                        </div>
                        {/* <div className="position-absolute top-50 start-50 msp--275 mtp-20 zindex-1">
              <div className="d-flex flex-column wp-150 psp-10 pep-10 ptp-0 pbp-0 ">
                Si pienso como...
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
              </div>
            </div> */}
                        <div className="position-absolute top-50 start-50 translate-middle msp-200 mtp-140 zindex-1 ">
                            <div className="d-flex flex-column wp-250 psp-10 pep-10 ptp-0 pbp-0 rotate--70">

                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-70 overflow-auto" />
                            </div>
                        </div>
                        <div className="position-absolute top-100 start-50 translate-middle msp-0 mtp-20 zindex-1">
                            <div className="d-flex flex-column wp-250 psp-10 pep-10 ptp-0 pbp-0 ">

                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 hp-70 overflow-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="d-flex global-margin h-100  mtp-0 mbp-0 psp-60 pep-0 ptp-50 pbp-0">
                        <div className="row p-0 msp-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">

                                <div className="d-flex w-100 p-2">
                                    <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-android18 fsp-17 fw-700 pbp-5">a.</div>
                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">¿Qué recursos energéticos se podrían aprovechar en el colegio?</div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="d-flex msp-60 mep-60 psp-20 pep-20 mbp-100">

                        <div className="row ptp-0 ps-12 pe-8 m-0 w-100">
                            <div className="col-12  position-relative ">
                                <div className="position-absolute top-50 start-0 translate-middle mtp--20 msp--20"><img src="images/page_031/img_003.png" className=" " alt="" /></div>
                                {/* <div className="position-absolute top-50 start-0 translate-middle zindex-2 msp--20 "> <img src={"images/page_" + pagina + "/img_004.png"} className="" alt="" />  </div> */}

                                {/* <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-60 visible-768"><img src="images/page_048/periodista.png" className="wp-60 " alt="" /></div> */}

                                <div className="d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-2 rounded-p-10 border-color-calypso1 bgc-white">
                                    <div className="p-2 w-100 d-flex flex-column">
                                        {/* <div className="f-Ubuntu-L fsp-16  text-start w-100">Podemos mejorar en...</div> */}
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
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

export default Page031;
