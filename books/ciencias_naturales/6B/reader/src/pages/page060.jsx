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





                    <div className="d-flex global-margin  mtp-30 mbp-0 psp-60 pep-0 ptp-0 pbp-0">
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
                    <div className="d-flex global-margin  mtp-0 mbp-0 psp-60 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 msp-0 w-100">
                            <div className="col-12 p-0 m-0 position-relative">

                                <div className="d-flex w-100 p-2">
                                    <div className="d-flex d-inline justify-content-start align-items-starttext-start f-Ubuntu-R color-saitama fsp-17 fw-700 pbp-5">c.</div>
                                    <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Elaboramos un álbum fotográfico.</div>
                                </div>

                            </div>
                        </div>
                    </div>






                    <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                        <div className="row p-0 m-0 w-100">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6 ">
                                        <div className="d-flex justify-content-start text-start"></div>

                                        <div className="mtp-20">
                                            <div className="w-100  p-1 m-2 border-style-solid border-5 border-color-kagome    lh-sm  gira-2 position-relative">Nos faltan los  <br /> siguientes materiales:
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                                                <div className="position-absolute top-0 start-0  zindex-1 mtp--15"><img class=" hp-45" src="images/page_060/img_001.png" alt="" /></div>
                                                <div className="position-absolute top-100 start-0 translate-middle  zindex-1 mtp-10"><img class=" hp-60" src="images/page_060/img_003.png" alt="" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <div className="d-flex mtp-20">
                                            <div className="w-100   p-1 m-2 border-style-solid border-5 border-color-kagome    lh-sm  gira-2 position-relative">Para conseguirlos, debemos:
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                                                <div className="position-absolute top-0 end-0    zindex-1 mep-10 mtp--15"><img class=" hp-45" src="images/page_060/img_001.png" alt="" /></div>
                                                <div className="position-absolute top-100 start-100 translate-middle  zindex-1 msp-10 mtp--1"><img class=" hp-70" src="images/page_060/img_002.png" alt="" /></div>
                                            </div>

                                        </div>
                                        <div className="mtp-20">
                                            <div className="w-100  p-1 m-2 border-style-solid border-5 border-color-kagome    lh-sm  gira--2 position-relative">Las tareas que nos<br /> faltan por realizar son:
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                                                <div className="position-absolute top-0 start-0  zindex-1 mtp--15"><img class=" hp-45" src="images/page_060/img_001.png" alt="" />
                                                </div>
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
