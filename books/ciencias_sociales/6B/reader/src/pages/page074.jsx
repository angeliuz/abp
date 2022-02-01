import React from "react";
import ModalVideo from "../components/ModalVideo";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import "./page_074.css";

function Page074(props) {

    const pagina = "074";
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
                                        5
                                    </div>
                                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                        Escuchamos la valoración de nuestros compañeros.
                                    </div>
                                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                                    {/*<ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />*/}
                                </div>
                            </div>
                            {/* BEGIN EJERCICIO 1 */}
                            <div className="row mx-auto d-flex f-Ubuntu-R fsp-15 mbp-20 ">
                                <div className="position-relative">
                                    <div className="position-absolute top-0 start-100 translate-middle msp--40 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-80" alt="" /></div>
                                    <div className="position-absolute top-50 start-50 translate-middle msp--0 mtp-160 visible-768 zindex-1"><img src={"images/page_" + pagina + "/espiral.svg"} className="wp-60" alt="" /></div>
                                </div>

                                <div className="col-sm-12 col-md-6">
                                    <div className="text-center w-100 border-1 border-style-solid border-color-chopin rounded-p-10  mtp-10">
                                        <div className="color-white fw-700 rounded-set-6 hp-40 pep-20 psp-20 ptp-5 pbp-5 bgc-chopin d-flex justify-content-center align-items-center">
                                            Nos ha salido bien
                                        </div>
                                        <div className="psp-15 pep-15">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="text-center w-100 border-1 border-style-solid border-color-obiwan rounded-p-10 mtp-10">
                                        <div className="color-white fw-700 rounded-set-6 hp-40 ptp-5 pbp-5 bgc-obiwan d-flex justify-content-center align-items-center">
                                            Podríamos mejorar
                                        </div>
                                        <div className="psp-15 pep-15">
                                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="container-titulo-global mbp-0 mbp-20">
                                <div className="d-flex psp-20">
                                    {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                                    <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                                        6
                                    </div>
                                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                                        Ponemos un <img src={"images/page_" + pagina + "/img_002.svg"} className="wp-15 pbp-5" alt="" /> a los recursos que elaboramos durante el proyecto y que utilizaremos en la presentación.
                                    </div>
                                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                                    {/*<ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />*/}
                                </div>
                            </div>
                            {/* BEGIN EJERCICIO 2 */}
                            <div className="max-wp-500 mx-auto position-relative mbp-60">
                                <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--70 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-130" alt="" /></div>
                                <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp--20 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-100" alt="" /></div>
                                <div className="position-absolute border-color-xinyan rounded-p-10 wp-150 top-0 start-50 translate-middle msp-0 mtp-10 zindex-1 bgc-white rounded-p-10 hp-50">
                                </div>
                                <div className="text-center w-100 border-color-yunjin rounded-p-10 pbp-50 bgc-white">
                                    <div className="f-Ubuntu-R fsp-18 rounded-p-10 max-wp-300 mx-auto mtp-20 hp-60 fw-700 d-flex justify-content-center align-items-center">
                                        Lista de control
                                    </div>
                                    <div className="mx-auto max-wp-350 mtp-5">
                                        <div className="d-flex justify-content-start align-items-center mbp-5 psp-15 ">
                                            <div className="wp-30 hp-30 mtp-10 bgc-white border-1 border-style-solid border-color-dark rounded-1 mep-5">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                            </div>
                                            <div className="text-start msp-5 mtp-10 pep-5  bgc-white  rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                                                Infografía de la investigación.
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mbp-5 psp-15">
                                            <div className="wp-30 hp-30 mtp-10 bgc-white border-1 border-style-solid border-color-dark rounded-1 mep-5">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                            </div>
                                            <div className="text-start msp-5 mtp-10 pep-5  bgc-white  rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                                                Boceto de la idea.
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mbp-5 psp-15 ">
                                            <div className="wp-30 hp-30 mtp-10 bgc-white border-1 border-style-solid border-color-dark rounded-1 mep-5">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                            </div>
                                            <div className="text-start msp-5 mtp-10 pep-5  bgc-white  rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                                                Prototipo del aparato/sistema tecnológico.
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mbp-5 psp-15 ">
                                            <div className="wp-30 hp-30 mtp-10 bgc-white border-1 border-style-solid border-color-dark rounded-1 mep-5">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                            </div>
                                            <div className="text-start msp-5 mtp-10 pep-5  bgc-white  rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                                                Video del prototipo.
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-start align-items-center mbp-5 psp-15 ">
                                            <div className="wp-30 hp-30 mtp-10 bgc-white border-1 border-style-solid border-color-dark rounded-1 mep-5">
                                                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                                            </div>
                                            <div className="text-start msp-5 mtp-10 pep-5  bgc-white  rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                                                Álbum fotográfico.
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


export default Page074;
