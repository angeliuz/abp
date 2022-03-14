import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_057.css";

function Page057(props) {

    const pagina = "057";
    var indexInput = 0;
    const etapa = "5"
    const background = "bgc-saitama";
    const color = "color-saitama";
    const bgc_cajas = "bgc-bobafett";

    return (


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
                                Mis objetivos en <br />esta sesión son:
                            </div>
                            <div className="p-0 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Proponer una fecha para celebrar <br />el Día de la Alimentación<br /> Saludable en el colegio


                            </div>
                            <div className="psp-5 pep-5 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_2.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Describir las características <br />del Día de la Alimentación Saludable


                            </div>

                            <div className="psp-5 pep-5 align-self-center">
                                <img src={"images/generales/flecha_sesion_e" + etapa + "_1.svg"} className="wp-40 arrow-global" alt="" />
                            </div>
                            <div className="p-2 align-self-center f-colby-compres-bold fsp-15 lh-sm text-white text-center">
                                Escribir una carta al <br />director del colegio


                            </div>


                        </div>
                    </div>
                    {/* END CABECERA VERSIÓN 2 */}






                    <div className="container-titulo-global mtp-20 mbp-0">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            xxx
                        </div> */}
                        <div className="d-flex psp-20">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                1
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Con todo lo que aprendimos en las sesiones anteriores, creemos que la mejor fecha para celebrar el Día de la Alimentación Saludable en el colegio es:
                            </div>
                            {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>









                    <div className="d-flex global-margin mtp-20 mbp-0 psp-60 pep-40 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100 bgc-azuka border-style-solid border-1 border-color-dark">
                            <div className="col-12 p-0 m-0 position-relative     ptp-15 pbp-15 rounded-seb-10">


                                <div className="row ptp-10 pbp-10 rounded-seb-10">

                                    <div className="col-sm-12 col-md-4 p-0 m-0 position-relative">
                                    <div className="position-absolute top-100 start-100 translate-middle msp--60 zindex-1 visible-768"><img src={"images/page_" + pagina + "/img_005.png"} className="" alt="" /></div>
                                    <div className="position-absolute top-50 start-0 translate-middle mtp--20 zindex-1 "><img src={"images/page_" + pagina + "/img_003.png"} className="" alt="" /></div>
                                        <div className="d-flex center-center h-100 msp-5">

                                            {/* <div className="d-flex justify-content-center align-items-center"></div> */}
                                            <div className="rounded-p-10 border-style-solid border-1 border-color-dark m-1 p-2 wp-170 bgc-white ">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 col-md-1 p-0 m-0 position-relative wp-50  d-flex justify-content-center align-items-center  ">
                                    
                                        <div className="d-flex align-items-center "></div>
                                        <img src={"images/page_" + pagina + "/img_004.svg"} className="wp-30 rotar-flecha" alt="" />
                                    </div>

                                    <div className="col-sm-12 col-md-7 p-0 m-0 h-100 position-relative ">
                                    <div className="position-absolute top-0 start-100 translate-middle zindex-1 msp--20"><img src={"images/page_" + pagina + "/img_002.png"} className="" alt="" /></div>
                                        <div className=" justify-content-end mep-20 msp-20">
                                            <div className="rounded-p-10 border-style-solid border-1 border-color-dark m-1 p-2 bgc-white">

                                                <div className="mtp-0 ">
                                                    <div className=" justify-content-start align-items-center  f-Ubuntu-R fsp-15 ptp-0 psp-5 text-start">Porque</div>
                                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />

                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>




                    <div className="container-titulo-global mtp-10 mbp-0">
                        {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
                            xxx
                        </div> */}
                        <div className="d-flex psp-20">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                2
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Pensamos en la importancia que tiene para el colegio instaurar el Día de la Alimentación Saludable.
                            </div>
                            {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>











                    <div className="d-flex global-margin mtp-10 mbp-90 psp-60 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative bgc-white   border-style-solid  border-1 shadow border-color-lightDark  ">
                            <div className="position-absolute top-100 start-100 translate-middle msp--50 mtp-40 zindex-1 visible-768"><img src={"images/page_" + pagina + "/img_007.png"} className="" alt="" /></div>
                                <div className="position-absolute top-50 start-0 translate-middle    msp-0 mtp-0  zindex-1"><img src={"images/page_" + pagina + "/img_006.svg"} className="wp-20" alt="" /></div>
                                <div className="psp-25 ptp-10 pep-20">
                                    <div className="f-Ubuntu-L fsp-15 lh-sm text-start  ">
                                        El objetivo de la jornada es difundir la camapaña con nuestra propuesta de
                                        alimentación saludable, para...
                                    </div>
                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-220" />
                                </div>
                            </div>
                        </div>
                    </div>








                    {/* BEGIN PIE DE PAGINA */}
                    <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                        <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                            ABP &copy; SM
                        </div>
                        <div className="bgc-misty wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                    </div>
                    <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

                        <div className={etapa == 1 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
                            <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                            <div className="w-100 hp-25 bgc-goten"></div>
                        </div>
                        <div className={etapa == 2 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
                            <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-bulma"></div>
                        </div>
                        <div className={etapa == 3 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
                            <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-android18"></div>
                        </div>
                        <div className={etapa == 4 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
                            <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-pidgey"></div>
                        </div>
                        <div className={etapa == 5 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
                            <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
                            <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-saitama"></div>
                        </div>
                        <div className={etapa == 6 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
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
