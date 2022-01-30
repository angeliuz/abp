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
                    <div className="ptp-50 container-titulo-global mbp-0">
                        <div className="d-flex psp-20">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                3
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Relaciono cada imagen a un concepto.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="psp-60 pep-60 ptp-20">
                        <div className="row w-100 justify-content-center">

                            <div className="col-md-12 col-4 justify-content-between disposicion-imagenes msp--20">

                                <div className="position-relative psp-10 pbp-30">
                                    <div className="cajafoto-p34 foto1-p34 rounded-p-20"></div>
                                    <div className="position-absolute posicion-check-1 cuadrado-p34">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-30 min-hp-30" />
                                    </div>
                                </div>

                                <div className="position-relative psp-10 pbp-10">
                                    <div className="cajafoto-p34 foto2-p34 rounded-p-20"></div>
                                    <div className="position-absolute posicion-check-1 cuadrado-p34">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-30 min-hp-30" />
                                    </div>
                                </div>
                                <div className="position-relative psp-10 pbp-10">
                                    <div className="cajafoto-p34 foto3-p34 rounded-p-20"></div>
                                    <div className="position-absolute posicion-check-1 cuadrado-p34">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-30 min-hp-30" />
                                    </div>
                                </div>
                                <div className="position-relative psp-10 pbp-10">
                                    <div className="cajafoto-p34 foto4-p34 rounded-p-20"></div>
                                    <div className="position-absolute posicion-check-1 cuadrado-p34">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-30 min-hp-30" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 col-4 ">
                                <div className="disposicion-palabra ptp-40 pbp-50">
                                    <div className="espaciado-p34">
                                        <div className="border-style-solid border-color-bulma border-2 bgc-tigro p-2 rounded-p-20 "><div className="psp-20 pep-20">Sistema tecnológico</div></div>
                                    </div>
                                    <div className="espaciado-p34">
                                        <div className="border-style-solid border-color-bulma border-2 bgc-tigro p-2 rounded-p-20 "><div className="psp-20 pep-20">Aparato tecnológico</div></div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-12 col-4 justify-content-between disposicion-imagenes msp--20-p34">

                                <div className="position-relative psp-10 pbp-30">
                                    <div className="cajafoto-p34 foto5-p34 rounded-p-20"></div>
                                    <div className="position-absolute posicion-check-2 cuadrado-p34">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-30 min-hp-30" />
                                    </div>
                                </div>

                                <div className="position-relative psp-10 pbp-10">
                                    <div className="cajafoto-p34 foto6-p34 rounded-p-20"></div>
                                    <div className="position-absolute posicion-check-2 cuadrado-p34">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-30 min-hp-30" />
                                    </div>
                                </div>
                                <div className="position-relative psp-10 pbp-10">
                                    <div className="cajafoto-p34 foto7-p34 rounded-p-20"></div>
                                    <div className="position-absolute posicion-check-2 cuadrado-p34">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-30 min-hp-30" />
                                    </div>
                                </div>
                                <div className="position-relative psp-10 pbp-10">
                                    <div className="cajafoto-p34 foto8-p34 rounded-p-20"></div>
                                    <div className="position-absolute posicion-check-2 cuadrado-p34">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-center flex-grow-1 lhp-30 min-hp-30" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="ptp-20 container-titulo-global mbp-0">
                        <div className="d-flex psp-20">
                            {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                            <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                4
                            </div>
                            <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                Organizo mis conocimientos en el semáforo.
                            </div>
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                            {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                            {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                        </div>
                    </div>

                    <div className="psp-160 pep-100 ptp-20">
                        <div className="position-relative">
                            <div className="w-100 border-style-solid border-color-soldados rounded-p-30 psp-60 pep-20">
                                <div className="f-Ubuntu-L text-start ptp-10">Para superar el desafío, debo mejorar o profundizar en...</div>
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35" />
                            </div>
                            <div className="ptp-10"></div>
                            <div className="w-100 border-style-solid border-color-padme rounded-p-30 psp-60 pep-20">
                                <div className="f-Ubuntu-L text-start ptp-10">Las dudas que tengo son...</div>
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35" />
                            </div>
                            <div className="ptp-10"></div>
                            <div className="w-100 border-style-solid border-color-raiden rounded-p-30 psp-60 pep-20">
                                <div className="f-Ubuntu-L text-start ptp-10">Ya sé...</div>
                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35" />
                            </div>
                            <div className="position-absolute top-50 start-0 translate-middle msp--20 mtp-40 "><img src={"images/page_" + pagina + "/img_009.png"} className="wp-160" alt="" /></div>
                        </div>
                    </div>

                    <div className="pbp-100"></div>
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
