import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";

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
                    {/* <div className={"cabecera-v2 d-flex flex-column "+background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                <div className={"caja wp-150 text-center fsp-24 f-IntroRustG-Base "+colorSesion}>SESIÓN 8</div>
                <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¿Quiénes se ocupan de los desechos?</div>
            </div>

            </div>  */}
                    {/* END CABECERA VERSIÓN 2 */}
                    {/* BEGIN CABECERA VERSIÓN 2 */}
                    <div className={"cabecera-v2 d-flex flex-column " + background}>
                        <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                            <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"}>SESIÓN 8</div>
                            <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Hacemos una infografía</div>
                        </div>
                        <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-95">
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Mis objetivos en <br /> esta sesión son:
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Seleccionar <br /> el tema de la<br />infografía
                            </div>
                            <div className="psp-5 pep-5 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Organizar las  <br /> ideas y hacer  <br />un boceto
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                Elaborar la <br /> infografía sobre los<br />alimentos
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="psp-5 pep-5 ptp-10 pbp-10 position-relative align-self-center f-colby-compres-bold fsp-17 lh-sm text-center color-dark">
                                <div className="position-absolute top-0 start-0 w-100 h-100">
                                    <img src="images/cabecera/caja_blanca.png" width="100%" height="100%" alt="" />
                                </div>
                                <div className="position-relative">
                                    Valorar cómo se   <br /> trabaja en equipo y qué<br />se puede mejorar
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END CABECERA VERSIÓN 2 */}

                    <div className="ptp-30 container-titulo-global mbp-20">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Instituciones que nos ayudan a reciclar</div> */}
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>1</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Elijo el tema de mi infografía.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_002.jpg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>


                    <div className="psp-60 pep-60 f-Ubuntu-R">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="ptp-10 pbp-10 psp-20">
                                    <div className="d-flex">
                                        <div className="">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                        <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                                            Malnutrición.
                                        </div>
                                    </div>
                                </div>
                                <div className="ptp-10 pbp-10 psp-20">
                                    <div className="d-flex">
                                        <div className="">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                        <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                                            Los nutrientes.
                                        </div>
                                    </div>
                                </div>
                                <div className="ptp-10 pbp-10 psp-20">
                                    <div className="d-flex">
                                        <div className="">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                        <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                                            Información nutricional.
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-6 col-12">
                                <div className="ptp-10 pbp-10 psp-20">
                                    <div className="d-flex">
                                        <div className="">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                        <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                                            Alimentación saludable.
                                        </div>
                                    </div>
                                </div>
                                <div className="ptp-10 pbp-10 psp-20">
                                    <div className="d-flex">
                                        <div className="">
                                            <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                                        </div>
                                        <div className="f-Ubuntu-L psp-15 ptp-5 text-start">
                                            Alimentación poco saludable.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="ptp-30 container-titulo-global mbp-20">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 " + color}>Instituciones que nos ayudan a reciclar</div> */}
                        <div className="d-flex">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Busco más información sobre el tema y la organizo.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                            {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_002.jpg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="d-flex global-margin mtp-20 mbp-100 psp-0 pep-0 ptp-0 pbp-0">

                        <div className="d-flex w-100 bgc-betty rounded-p-10">

                            <div className="row p-0 m-0 w-100">





                                <div className="col-12 ptp-20 psp-10 pep-10 m-0 position-relative">
                                    <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-0  zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="" alt="" /></div>

                                    <div className="bgc-white rounded-p-10 border-style-solid border-color-white border-2 p-2 msp-0 mep-0 mtp-0 mbp-10 f-Ubuntu-L fsp-15 ">
                                        <div className="d-flex flex-column position-relative w-100 text-start ">
                                            El título de la infografía será:
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12 ptp-0 psp-10 pep-10 m-0 position-relative">

                                    <div className="bgc-white rounded-p-10 border-style-solid border-color-white border-2 p-2 msp-0 mep-0 mtp-0 mbp-10 f-Ubuntu-L fsp-15 ">
                                        <div className="d-flex flex-column position-relative w-100 text-start ">
                                            Incluiré información sobre...
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                                        </div>
                                    </div>

                                </div>
                                <div className="col-12 ptp-0 psp-10 pep-10 m-0 position-relative">
                                    <div className="position-absolute top-50 start-0 translate-middle msp--10 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="" alt="" /></div>
                                    <div className="bgc-white rounded-p-10 border-style-solid border-color-white border-2 p-2 msp-0 mep-0 mtp-0 mbp-10 f-Ubuntu-L fsp-15 ">
                                        <div className="d-flex flex-column position-relative w-100 text-start ">
                                            Agregaré imágenes de:
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-210" />
                                        </div>
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

                        <div className="col-1 position-relative col-md-2 p-0 m-0">
                            <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className="col-1 position-relative col-md-2 p-0 m-0">
                            <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className="col-7 position-relative col-md-2 p-0 m-0">
                            <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className="col-1 position-relative col-md-2 p-0 m-0">
                            <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className="col-1 position-relative col-md-2 p-0 m-0">
                            <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-saitama"></div>
                        </div>
                        <div className="col-1 position-relative col-md-2 p-0 m-0">
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

export default Page035;
