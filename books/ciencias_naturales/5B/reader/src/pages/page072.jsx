import React from "react";
import ModalVideo from "../components/ModalVideo";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import "./page_072.css";

function Page072(props) {

    const pagina = "072";
    var indexInput = 0;
    const etapa = "6"
    const background = "bgc-pikachu";
    const color = "color-pikachu";
    const borderColor = "border-color-pikachu"
    const borderColorTabla = "border-color-kokomi"
    const bgc_cajas = "bgc-kokomi";

    return (
        <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
                <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
                    <div className={"cabecera-v1 hp-80 " + background}>
                    </div>

                    <div className="msp-60 mep-60 mtp-20 mbp-10">
                        <div className="row p-0 m-0">
                            <div className="col-sm-12 col-md-3 position-relative"></div>
                            <div className="container-titulo-global mbp-0 mbp-20">
                                <div className="d-flex psp-20">
                                    {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                                    <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                        3
                                    </div>
                                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                        Acuerdo con mi grupo aspectos finales para la exposición.
                                    </div>
                                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                                    {/*<ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />*/}
                                </div>
                            </div>
                            <div className="bgc-dan rounded-p-10 ptp-20">
                                {/* BEGIN EJERCICIO 1 */}
                                <div className="max-wp-700 mx-auto bgc-white mbp-20 rounded-p-10 cb-outline-p74 position-relative">
                                    <div className="position-absolute top-100 start-0 translate-middle msp-20 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-80" alt="" /></div>
                                    <div className="position-absolute top-0 start-100 translate-middle msp-20 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-80" alt="" /></div>
                                    <div className="rounded-set-6 hp-40 pep-20 psp-20 ptp-5 pbp-5 d-flex justify-content-center align-items-center f-Ubuntu-R fsp-14 ptp-15">
                                        ¿Qué tenemos listo para la exposición?
                                    </div>
                                    <div className="psp-15 pep-15">
                                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230" />
                                    </div>
                                </div>
                                {/* BEGIN EJERCICIO 2 */}
                                <div className="row mx-auto d-flex f-Ubuntu-R fsp-15 mbp-20">
                                    <div className="col-sm-12 col-md-6 rounded-p-10 position-relative">
                                        <div className="position-absolute top-100 start-0 translate-middle msp--0 mtp--30 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-50" alt="" /></div>
                                        <div className="text-start w-100 rounded-p-10  mtp-10 bgc-white cb-outline-p74">
                                            <div className="rounded-set-6 hp-40 pep-20 psp-20 ptp-5 pbp-5 ptp-15 f-Ubuntu-R fsp-14">
                                                ¿Qué nos falta preparar?
                                            </div>
                                            <div className="psp-15 pep-15">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-md-6 rounded-p-10 position-relative">
                                        <div className="position-absolute top-100 start-100 translate-middle msp--0 mtp--70 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-120" alt="" /></div>
                                        <div className="text-start w-100 rounded-p-10 mtp-10 bgc-white cb-outline-p74">
                                            <div className="rounded-set-6 hp-40 ptp-15 pbp-5 psp-10 f-Ubuntu-R fsp-14 ">
                                                ¿De qué otra manera podemos cooperar con el curso para que la exposición tenga éxito?
                                            </div>
                                            <div className="psp-15 pep-15">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="position-relative mtp-30">
                                <div className="psp-30 pep-10 ptp-10 pbp-20 max-wp-400 top-100 start-50 translate-middle msp-0 mtp-50 d-flex bgc-marcianos position-absolute border-1 border-style-solid border-color-dark">
                                    <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                        4
                                    </div>
                                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                        Con mi grupo preparamos los últimos detalles y realizamos <br /> la exposición.
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
                        <div className="col-1 col-sm-2 p-0 m-0 position-relative">
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
                            <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
                            <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                            <div className="w-100 hp-25 bgc-saitama"></div>
                        </div>
                        <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                            <img src="images/rotulo_difusion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                            <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
                            <div className="w-100 hp-25 bgc-pikachu"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
}


export default Page072;
