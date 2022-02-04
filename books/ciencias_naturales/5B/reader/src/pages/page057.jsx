import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import "./page_057.css";

function Page057(props) {

    const pagina = "057";
    var indexInput = 0;
    const etapa = "5"
    const background = "bgc-saitama";
    const color = "color-saitama";
    const borderColor = "border-color-saitama"
    const borderColorTabla = "border-color-bobafett"
    const bgc_cajas = "bgc-bobafett";



    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

                    {/* BEGIN CABECERA VERSIÓN 2 */}

                    <div className="wrapper bgc-light">
                        <div className="d-flex flex-column align-items-center pbp-20">
                            <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

                                {/* BEGIN CABECERA VERSIÓN 2 */}
                                <div className={"cabecera-v2 d-flex flex-column " + background}>
                                    <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
                                        <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base color-dark"}>SESIÓN 15</div>
                                        <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡El Día de la Alimentación Saludable!</div>
                                    </div>
                                    <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-95">
                                        <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                            Mis objetivos en <br /> esta sesión son:
                                        </div>
                                        <div className="p-0 align-self-center">
                                            <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                                        </div>
                                        <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                            Proponer una fecha para <br />celebrar el Día de la Alimentación <br />Saludable en el colegio

                                        </div>
                                        <div className="psp-5 pep-5 align-self-center">
                                            <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
                                        </div>
                                        <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                            Describir las<br /> características del Día <br /> de la Alimentación Saludable

                                        </div>
                                        <div className="p-0 align-self-center">
                                            <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                                        </div>
                                        <div className="psp-5 pep-5 align-self-center f-colby-compres-bold fsp-17 lh-sm text-white text-center">
                                            Escribir una carta al<br /> director del colegio


                                        </div>

                                    </div>
                                </div>
                                {/* END CABECERA VERSIÓN 2 */}

                                <div className="ptp-30 container-titulo-global mbp-0">

                                    <div className="d-flex psp-20">
                                        {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                                        <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                            1
                                        </div>
                                        <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                            Con todo lo que aprendimos en las sesiones anteriores, creemos que la mejor fecha para celebrar el Día de la Alimentación Saludable en el colegio es:
                                        </div>
                                        {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
                                        {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                                        {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                                        {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                                    </div>
                                </div>



                                <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                                    <div className="row p-0 m-0 w-100  d-flex justify-content-center msp-105 mep-60 p-2  p-0 bgc-shaokhan border border-1 border-color-dark rounded-seb-10">
                                        <div className="col-sm-12 col-md-3 p-0 m-0 position-relative">
                                            <div className="rounded-p-10 border-style-solid border-1 border-color-dark m-1 p-2 wp-170 h-100 bgc-white">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 col-md-1 p-0 m-0 position-relative h-100 wp-50  d-flex justify-content-center align-items-center  ">
                                            <img src={"images/page_" + pagina + "/img_004.svg"} className="wp-30  flecha-rotar" alt="" />
                                        </div>
                                        <div className="col-sm-12 col-md-7 p-0 m-0 h-100  position-relative   d-flex justify-content-center ">
                                            <div className="rounded-p-10 border border-1 border-color-dark m-1 p-2 wp-700 hp-150 bgc-white"></div>
                                        </div>
                                    </div>
                                </div>



                                {/* <div class="row d-flex justify-content-center msp-105 mep-60 p-2  p-0 bgc-shaokhan border border-1 border-color-dark rounded-seb-10 position-relative">
                    <div class="col-lg-3 col-sm-12 m-0 p-0 h-100 d-flex justify-content-center  ">
                        <div class=" rounded-p-10 border border-1 border-color-dark m-1 wp-170 hp-100 bgc-white"></div>
                    </div>
                    <div class="col-lg-1 col-sm-6 m-0 p-0 h-100 wp-50  d-flex justify-content-center align-items-center ">
                        <div class="hp-100 m-1 flecha-ancho flecha-rotar  d-flex align-items-center " >
                            <img class="hp-30 d-flex align-items-center " src="images/page_057/img_004.svg" alt="">
                        </div>
                    </div>
                    <div class="col-lg-7 col-sm-12 m-0 p-0 h-100 d-flex justify-content-center ">
                        <div class="rounded-p-10 border border-1 border-color-dark m-1 p-2 wp-700 hp-150 bgc-white">
                            <div class="f-Ubuntu-R fsp-15">Porque </div>
                            <div class="pep-5 psp-5 ">
                                <div class="linea mbp-20 mtp-20"></div>
                                <div class="linea mbp-20"></div>
                                <div class="linea mbp-20"></div>
                                <div class="linea mbp-20"></div>
                                
                            </div>
                        </div>
                    </div>
                    <img class="wp-60 position-absolute img-frutilla" src="images/page_057/img_003.png" alt="">
                    <img class="wp-70 position-absolute img-platano" src="images/page_057/img_005.png" alt="">
                    <img class="wp-70 position-absolute img-pera" src="images/page_057/img_002.png" alt="">
                </div> */}







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
                    </div>

                    {/* END CABECERA VERSIÓN 2 */}

                    <div className="ptp-30 container-titulo-global mbp-0">
                        <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            Antes de la presentación
                        </div>
                        <div className="d-flex psp-20">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                1
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Veo el video, leo la historieta y respondo.
                            </div>
                            {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
                            <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" />
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">
                                <img src={"images/page_" + pagina + "/img_002.png"} className="w-100" alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="d-flex global-margin mtp-20 mbp-100 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">
                                <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-15 rotate-15" alt="" /></div>
                                <div className="border-style-solid border-2 border-color-bach rounded-p-10">
                                    <div className="d-flex flex-column bgc-blanka rounded-p-10">
                                        <div className="bgc-white w-100 f-Ubuntu-L text-start fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                                            Hemos recibido un mensaje de nuestro amigo reciclador el que nos dice que...
                                        </div>
                                        <div className="psp-10 pep-10">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-160" />
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
        </div>

    );
}

export default Page057;
