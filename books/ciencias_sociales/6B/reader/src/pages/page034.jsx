import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_034.css";

function Page034(props) {

    const pagina = "034";
    var indexInput = 0;
    const etapa = "3"
    const background = "bgc-android18";
    const color = "color-android18";
    const colorSesion = "color-primary";
    const borderColor = "border-color-android18"
    const borderColorTabla = "border-color-android18"
    const bgc_cajas = "bgc-azuka";


    return (

        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    <div className="cabecera-v1 hp-80 bgc-android18">
                    </div>
                    {/* <div className="ptp-50 container-titulo-global mbp-0">
                        <div className="d-flex psp-20">
                            <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  />
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                3
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Relaciono cada imagen a un concepto.
                            </div>
                            <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" />
                            <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" />
                            <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
                        </div>
                    </div> */}

                    <div className="d-flex global-margin mtp-50 mbp-0 psp-30 pep-50 ptp-0 pbp-10">
                        <div className="row p-0 m-0 w-100">

                            <div className="col-12 m-0 position-relative">
                                <div className="position-absolute top-100 start-50 translate-middle msp--130 mtp--10 zindex-1"><img src="images/page_034/img_004.svg" className=" wp-10" alt="" /></div>
                                <div className="position-absolute top-100 start-50 translate-middle msp-130 mtp--10 zindex-1"><img src="images/page_034/img_004.svg" className=" wp-10" alt="" /></div>
                                <div className="position-absolute top-100 start-0 translate-middle msp--20 mtp--150 visible-768"><img src="images/page_034/img_002.png" className=" " alt="" /></div>

                                <div className="d-flex mbp-20 mtp-10 w-90 ">
                                    <div className="ptp-70 psp-10 pep-10 pbp-10 min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-lightDark box-shadow-simple">

                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0  px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-380" />
                                        <div className="position-absolute top-0 start-50 msp--25 mtp-40 translate-middle">
                                            <div className="bgc-kai min-wp-410 color-white f-Ubuntu-B text-center px-3 py-2 rounded-p-20">
                                                <div className="d-flex p-2">
                                                    <div className={"f-Ubuntu-B fsp-21 mtp--6 " + color}>
                                                        c.
                                                    </div>
                                                    <div className="f-Ubuntu-R fsp-16 psp-10 pep-10 text-start color-dark">
                                                        ¿Cómo discriminaremos qué información es importante?
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="d-flex global-margin mtp-0 mbp-0 psp-80 pep-0 ptp-0 pbp-100">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12 m-0 position-relative">
                                <div className="position-absolute top-100 start-100 translate-middle  msp--100"><img src="images/page_034/img_005.png" className=" " alt="" /></div>
                                <div className="position-absolute top-0 start-100 translate-middle msp--70 mtp--80 visible-768"><img src="images/page_034/img_003.png" className=" " alt="" /></div>

                                <div className="d-flex mbp-20 mtp-10 w-90 ">
                                    <div className="ptp-70 psp-10 pep-10 pbp-10  min-hp-100 w-100 border-style-solid border-2 rounded-p-10 border-color-lightDark box-shadow-simple">

                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-380" />
                                        <div className="position-absolute top-0 start-50 msp--25 mtp-40 translate-middle">
                                            <div className="bgc-azuka min-wp-410 color-white f-Ubuntu-B text-center px-3 py-2 rounded-p-20">
                                                <div className="d-flex p-2">
                                                    <div className={"f-Ubuntu-B fsp-21 mtp--6 " + color}>
                                                        d.
                                                    </div>
                                                    <div className="f-Ubuntu-R fsp-16 psp-10 pep-10 text-start color-dark">
                                                        ¿Cómo registraremos la información y su fuente de origen?
                                                    </div>
                                                </div>
                                            </div>
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
        </div >
    );
}

export default Page034;
