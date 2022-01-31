import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import ModalVideo from "../components/ModalVideo";

import "./page_030.css";

function Page030(props) {

    const pagina = "030";
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
                    <div className="cabecera-v1 hp-80 bgc-android18">
                    </div>

                    <div className="ptp-30 container-titulo-global mbp-10">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Investigamos y proponemos</div> */}
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_005.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Leo la noticia de la revista e investigo sobre la participación de las comunidades
                                educativas en el aprovechamiento de la energía solar en el proyecto Ayllu Solar.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_030/img_001.svg" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
                        </div>
                    </div>
                    <div className="d-flex global-margin h-100  mtp-0 mbp-0 psp-40 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 msp-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">

                                <div className="d-flex w-100 p-2">
                                    <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-android18 fsp-17 fw-700 pbp-5">a.</div>
                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Señalo tres características del proyecto Ayllu Solar.</div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="d-flex msp-90 mep-70 mbp-20">

                        <div className="row  w-100 f-Ubuntu-R fsp-15 rounded-p-20">
                            {/* <div className="col-6 ptp-10">Preguntas</div>
    <div className="col-6 ptp-10">Importancia</div> */}
                            <div className="col-4 position-relative">
                                <div className="position-absolute top-50 start-100 translate-middle mtp--5 msp--5"><img src="images/page_030/img_003.svg" className="wp-60 " alt="" /></div>
                                {/* <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison">1</div> */}
                                <div className="d-flex mbp-20 mtp-10 w-100 pep-10 align-items-center">
                                    <div className="p-2 min-hp-100 w-100 border-style-solid border-3 rounded-p-10 border-color-android18 ">

                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 position-relative">
                                <div className="position-absolute top-50 start-100 translate-middle mtp--5 msp--5"><img src="images/page_030/img_003.svg" className="wp-60 " alt="" /></div>
                                {/* <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison">1</div> */}
                                <div className="d-flex mbp-20 mtp-10 w-100 pep-10 align-items-center">
                                    <div className="p-2 min-hp-100 w-100 border-style-solid border-3 rounded-p-10 border-color-android18 ">

                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 position-relative">
                                <div className="position-absolute top-0 start-100 translate-middle msp-20 "><img src="images/page_030/img_002.png" className="wp-70 " alt="" /></div>
                                {/* <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp-0 wp-30 hp-30 d-flex align-items-center justify-content-center rounded-p-5 border-2 color-pidgey border-style-solid border-color-pidgey bgc-bison">1</div> */}
                                <div className="d-flex mbp-20 mtp-10 w-100 pep-10 align-items-center">
                                    <div className="p-2 min-hp-100 w-100 border-style-solid border-3 rounded-p-10 border-color-android18 ">

                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                                    </div>
                                </div>
                            </div>






                        </div>

                    </div>

                    <div className="d-flex global-margin h-100  mtp-0 mbp-0 psp-40 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 msp-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">

                                <div className="d-flex w-100 p-2">
                                    <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-android18 fsp-17 fw-700 pbp-5">b.</div>
                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Señalo las características climáticas de la región de Arica y Parinacota que son
                                        propicias para llevar a cabo este proyecto.</div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="d-flex msp-60 mep-60 psp-20 pep-20">

                        <div className="row ptp-0 ps-12 pe-8 m-0 w-100">
                            <div className="col-12  position-relative ">
                            <div className="position-absolute top-0 start-100 translate-middle mtp-20 msp--10"><img src="images/page_030/img_005.svg" className="wp-40 " alt="" /></div>
                                <div className="position-absolute top-50 start-0 translate-middle zindex-2 msp--20 "> <img src={"images/page_" + pagina + "/img_004.png"} className="" alt="" />  </div>

                                {/* <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-60 visible-768"><img src="images/page_048/periodista.png" className="wp-60 " alt="" /></div> */}

                                <div className="d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-4 rounded-p-10 border-color-lightDark bgc-white">
                                    <div className="p-2 w-100 d-flex flex-column">
                                        {/* <div className="f-Ubuntu-L fsp-16  text-start w-100">Podemos mejorar en...</div> */}
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className="d-flex global-margin h-100  mtp-0 mbp-0 psp-60 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 msp-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">

                                <div className="d-flex w-100 p-2">
                                    <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-android18 fsp-17 fw-700 pbp-5">c.</div>
                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">¿Qué más me gustaría saber sobre este proyecto?</div>
                                    {/* <ModalVideo
                    id={"p" + pagina + "_video" + (indexInput += 1)}
                    image="images/generales/play.svg"
                    clasesImagen="cambio hp-40 mtp-10"
                    className="p-0 px-1"
                  /> */}
                                    {/* <ModalBook
                    id={"p" + pagina + "_book" + (indexInput += 1)}
                    image={"images/page_" + pagina + "/img_008.svg"}
                    clasesImagen="hp-40 text-center mtp-10 "
                    className="p-0 px-1"
                  /> */}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="d-flex msp-60 mep-60 mtp-0 mbp-20">

                        <div className="row m-0 psp-10 pep-10  pbp-0  w-100  ">

                            <div className="col-md-12 col-lg-12 position-relative ">
                            <div className="position-absolute top-50 start-100 translate-middle zindex-2 msp-20 "> <img src={"images/page_" + pagina + "/img_006.png"} className="" alt="" />  </div>
                                <div className="d-flex flex-column mbp-0 mtp-0 w-100">
                                    {/* <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-center">una palabra que me haya llamado la atención</div> */}
                                    <div className="p-2 min-hp-80 w-100 ">
                                        <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">


                                        </div>
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-175" />
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="d-flex global-margin h-100  mtp-0 mbp-0 psp-60 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 msp-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">

                                <div className="d-flex w-100 p-2">
                                    <img className="hp-20 align-center mt-3 me-2 mb-4" src={"images/page_" + pagina + "/img_007.svg"} alt="" />
                                    <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-android18 fsp-17 fw-700 mt-1">d.</div>
                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Analizo con mi equipo la posibilidad de implementar este tipo de soluciones
                                        energéticas en el colegio. Para ello, completamos:</div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center w-100 ">
                        <div className="bgc-debussy w-30 rounded-caja ptp-5 pbp-5 color-white fsp-15 f-Ubuntu-M ">
                            Proyecto Ayllu Solar
                        </div>
                    </div>
                    <div className="psp-60 pep-60 mbp-100">
                        <div className="w-100 bgc-bach rounded-p-20 position-relative">
                            <div className="w-100 row psp-40 pep-20 pbp-20">
                                <div className="col-md-6 col-12 position-relative ptp-60">
                                    <div className="bgc-white rounded-p-5 pep-10">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                                        <div className="position-absolute top-0 start-50 translate-middle mtp-45 bgc-leono psp-20 pep-20 ptp-5 pbp-2 rounded-set-10">
                                            <div className="f-Ubuntu-B color-white">Pros</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-12 position-relative ptp-60">
                                    <div className="bgc-white rounded-p-5 psp-10">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                                        <div className="position-absolute top-0 start-50 translate-middle mtp-45 bgc-leono psp-20 pep-20 ptp-5 pbp-2 rounded-set-10">
                                            <div className="f-Ubuntu-B color-white">Contras</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="position-absolute top-0 start-100 translate-middle msp--40 mtp-0  zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-100" alt="" /></div> */}
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

export default Page030;
