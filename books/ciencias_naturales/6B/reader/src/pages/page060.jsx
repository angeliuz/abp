import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";


import "./page_060.css";

function Page060(props) {

    const pagina = "060";
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
                    <div className={"cabecera-v1 hp-80 " + background}>
                    </div>





                    <div className="d-flex global-margin  mtp-10 mbp-0 psp-60 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 msp-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">

                                <div className="d-flex w-100 p-2">
                                    <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-saitama fsp-17 fw-700 pbp-1">b.</div>
                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Construimos el aparato o sistema tecnológico que aprovechará la
                                        energía en el colegio y documentamos el proceso con fotografías</div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="d-flex global-margin h-100  mtp-0 mbp-0 psp-60 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 msp-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">

                                <div className="d-flex w-100 p-2">
                                    <div className="d-flex d-inline justify-content-start align-items-starttext-start f-Ubuntu-R color-saitama fsp-17 fw-700 pbp-5">c.</div>
                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Elaboramos un álbum fotográfico.</div>
                                </div>

                            </div>
                        </div>
                    </div>







                    <div className="d-flex global-margin  mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100  ">
                            <div className="col-12 p-0 m-0 position-relative">
                                <div className="row ">
                                    <div className="col-lg-6  h-100  mbp-20">
                                        <div className=" d-flex justify-content-center ">
                                            <div className="d-flex align-items-center ptp-20 flex-column    ">
                                                {/* <div className="zindex-2 psp-20 pep-20 ptp-10 fsp-15 f-Ubuntu-R">La fiesta será el día</div> */}
                                                <div className="wp-260 zindex-2 border-style-solid border-5 border-color-orff bgc-white p-2   position-relative gira--2">
                                                    <div className="position-absolute top-0 start-0 translate-middle        msp-0 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/img_007.svg"} className="wp-30 msp-5  mtp-5" alt="" /></div>
                                                    <div className="position-absolute top-0 start-100 translate-middle      msp-0 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/img_007.svg"} className="wp-30 msp--5 mtp-5    rotate-90" alt="" /></div>
                                                    <div className="position-absolute top-100 start-100 translate-middle    msp-0 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/img_007.svg"} className="wp-30 msp--5  mbp--10  rotate-180" alt="" /></div>
                                                    <div className="position-absolute top-100 start-0 translate-middle      msp-0 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/img_007.svg"} className="wp-30 msp-5  mbp--10  rotate--90" alt="" /></div>
                                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                                                </div>
                                                {/* <div className="position-absolute top-0 start-50 translate-middle-x msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_001.svg"} className="wp-300" alt="" /></div> */}

                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12 h-100  mbp-20">
                                        <div className=" d-flex justify-content-center ">
                                            <div className="d-flex align-items-center ptp-20 flex-column    ">
                                                {/* <div className="zindex-2 psp-20 pep-20 ptp-10 fsp-15 f-Ubuntu-R">La fiesta será el día</div> */}
                                                <div className="wp-260 zindex-2 border-style-solid border-5 border-color-orff bgc-white p-2   position-relative gira-2">
                                                    <div className="position-absolute top-0 start-0 translate-middle        msp-0 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/img_007.svg"} className="wp-30 msp-5  mtp-5" alt="" /></div>
                                                    <div className="position-absolute top-0 start-100 translate-middle      msp-0 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/img_007.svg"} className="wp-30 msp--5 mtp-5    rotate-90" alt="" /></div>
                                                    <div className="position-absolute top-100 start-100 translate-middle    msp-0 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/img_007.svg"} className="wp-30 msp--5  mbp--10  rotate-180" alt="" /></div>
                                                    <div className="position-absolute top-100 start-0 translate-middle      msp-0 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/img_007.svg"} className="wp-30 msp-5  mbp--10  rotate--90" alt="" /></div>
                                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                                                </div>
                                                {/* <div className="position-absolute top-0 start-50 translate-middle-x msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_001.svg"} className="wp-300" alt="" /></div> */}

                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <div className="row h-100 mbp-70">

                                    {/* <div className="col mtp-20  h-100">
                                       
                                    </div> */}

                                    <div className="col-12 h-100 ">
                                        <div className=" d-flex justify-content-center ">
                                            <div className="d-flex justify-content-center  align-items-center ptp-20 flex-column  ms-15  ">
                                                {/* <div className="zindex-2 psp-20 pep-20 ptp-10 fsp-15 f-Ubuntu-R">La fiesta será el día</div> */}
                                                <div className="wp-260 zindex-2 border-style-solid border-5 border-color-orff bgc-white p-2   position-relative gira--2">
                                                    <div className="position-absolute top-0 start-0 translate-middle        msp-0 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/img_007.svg"} className="wp-30 msp-5  mtp-5" alt="" /></div>
                                                    <div className="position-absolute top-0 start-100 translate-middle      msp-0 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/img_007.svg"} className="wp-30 msp--5 mtp-5    rotate-90" alt="" /></div>
                                                    <div className="position-absolute top-100 start-100 translate-middle    msp-0 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/img_007.svg"} className="wp-30 msp--5  mbp--10  rotate-180" alt="" /></div>
                                                    <div className="position-absolute top-100 start-0 translate-middle      msp-0 mtp-0   zindex-1"><img src={"images/page_" + pagina + "/img_007.svg"} className="wp-30 msp-5  mbp--10  rotate--90" alt="" /></div>

                                                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                                                </div>
                                                <div className=" d-flex h-50  center-center position-relative m-3 ">
                                                    <div className="position-absolute top-100 start-0 translate-middle  msp--250 mtp--120 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-180" alt="" /></div>
                                                </div>
                                                {/* <div className="position-absolute top-0 start-50 translate-middle-x msp-0 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_001.svg"} className="wp-300" alt="" /></div> */}

                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>














                    {/* PIE DE PAGINA */}
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
                            <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page060;
