import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";

import "./page_029.css";

function Page029(props) {

    const pagina = "029";
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
                    {/* BEGIN CABECERA VERSIÓN 1 */}
                    <div className="cabecera-v1 hp-80 bgc-android18">
                    </div>
                    {/* END CABECERA VERSIÓN 1 */}


                    <div className="ptp-30 container-titulo-global mbp-20">
                        <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Buscamos soluciones empáticas</div>
                        <div className="d-flex">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>5</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Analizamos el caso escogido y buscamos soluciones completando la tabla.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_029/img_001.svg" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_029/img_001.svg" className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="ptp-10 psp-80 pep-80 ">
                        <div className="row rounded-p-10 bgc-sonic position-relative">
                            
                            <div className="col-12 col-md-6 p-0">
                                <div className="w-100 p-2 m-0 position-relative">
                                    <div className="rounded-p-10 p-3 bgc-white">
                                        <div className="f-Ubuntu-R fsp-16 text-center w-100">Hay un problema</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 p-0 position-relative">
                                <div className="position-absolute top-0 start-100 translate-middle "><img src="images/page_029/img_002.png" className=" mtp--40 msp-30 z-index-1" alt="" /></div>
                                <div className="w-100 p-2 m-0 position-relative">
                                    <div className="rounded-p-10 p-3 bgc-white">
                                        <div className="f-Ubuntu-R fsp-16 text-center w-100">¿A quién afecta?</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="col-12 f-Ubuntu-M fsp-18 ptp-10 pbp-10">¿Qué podemos hacer?</div>

                    <div className="d-flex msp-80 mep-60 mbp-20">

                        <div className="row bgc-kratos w-100 f-Ubuntu-R fsp-15 rounded-p-20">
                            {/* <div className="col-6 ptp-10">Preguntas</div>
                            <div className="col-6 ptp-10">Importancia</div> */}
                            <div className="col-6 position-relative">
                                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp--10 mtp-0 zindex-1"><img src="images/page_029/flechablanca.svg" className="wp-50" alt="" /></div>
                                {/* <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison">1</div> */}
                                <div className="d-flex mbp-20 mtp-10 w-100 pep-10 align-items-center">
                                    <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                                        <div className="f-Ubuntu-R fsp-16 text-center w-100">Alternativa 1</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-95" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 position-relative">

                                <div className="d-flex mbp-20 mtp-10 w-100 psp-10">
                                    <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                                        <div className="f-Ubuntu-R fsp-16 text-center w-100">¿Qué pensará(n)?</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                                        <div className="f-Ubuntu-R fsp-16 text-center w-100">¿Qué sentirá(n)?</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 position-relative">
                                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp--10 mtp-0 zindex-1"><img src="images/page_029/flechablanca.svg" className="wp-50" alt="" /></div>
                                {/* <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison">2</div> */}
                                <div className="d-flex mbp-20 mtp-10 w-100 pep-10 align-items-center">
                                    <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                                        <div className="f-Ubuntu-R fsp-16 text-center w-100">Alternativa 2</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-95" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 position-relative">

                                <div className="d-flex mbp-20 mtp-10 w-100 psp-10">
                                    <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                                        <div className="f-Ubuntu-R fsp-16 text-center w-100">¿Qué pensará(n)?</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                                        <div className="f-Ubuntu-R fsp-16 text-center w-100">¿Qué sentirá(n)?</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 position-relative">
                                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp--10 mtp-0 zindex-1"><img src="images/page_029/flechablanca.svg" className="wp-50" alt="" /></div>
                                {/* <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison">3</div> */}
                                <div className="d-flex mbp-20 mtp-10 w-100 pep-10 align-items-center">
                                    <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                                        <div className="f-Ubuntu-R fsp-16 text-center w-100">Alternativa 3</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-95" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 position-relative">

                                <div className="d-flex mbp-20 mtp-10 w-100 psp-10">
                                    <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                                        <div className="f-Ubuntu-R fsp-16 text-center w-100">¿Qué pensará(n)?</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                                        <div className="f-Ubuntu-R fsp-16 text-center w-100">¿Qué sentirá(n)?</div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                    <div className="d-flex msp-60 mep-60 mbp-0 mtp-10 mbp-80">

                        <div className="row m-0 psp-10 pep-10 ptp-0 pbp-10 rounded-p-20 w-100">

                            
                            
                            <div className="col-md-12 col-lg-12 position-relative">
                                <div className="position-absolute top-0 start-0 translate-middle msp-0 mtp--20 "><img src="images/page_029/img_003.png" className=" " alt="" /></div>
                                
                                <div className="d-flex mbp-20 mtp-10 w-100">
                                    <div className="p-2 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-dark bgc-white">
                                        <div className="f-Ubuntu-M fsp-16 msp-10 mep-10 text-center">Conclusión</div>
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
                    <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className="col-7 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
                            <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-saitama"></div>
                        </div>
                        <div className="col-1 position-relative col-sm-2 p-0 m-0">
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

export default Page029;
